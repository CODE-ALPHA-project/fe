import { renderHook, act } from "@testing-library/react-hooks";
import { useChat } from "./useChat";
import { Client } from "@stomp/stompjs";

const mockActivate = jest.fn();
const mockDeactivate = jest.fn();
const mockSubscribe = jest.fn();

jest.mock("@stomp/stompjs", () => {
  return {
    Client: jest.fn().mockImplementation(() => ({
      activate: mockActivate,
      deactivate: mockDeactivate,
      subscribe: mockSubscribe,
      publish: jest.fn(),
      connected: true,
    })),
  };
});

describe("useChat", () => {
  const mockUrl = "ws://example.com/socket";
  const mockTopic = "/topic/chat";

  beforeEach(() => {
    (Client as jest.Mock).mockClear();
    mockActivate.mockClear();
    mockDeactivate.mockClear();
    mockSubscribe.mockClear();
  });

  it("should connect to the WebSocket and subscribe to the topic", () => {
    renderHook(() =>
      useChat({
        url: mockUrl,
        topic: mockTopic,
      }),
    );

    expect(Client).toHaveBeenCalledWith({
      brokerURL: mockUrl,
      onConnect: expect.any(Function),
      onStompError: expect.any(Function),
    });

    const onConnect = (Client as jest.Mock).mock.calls[0][0].onConnect; // Get the onConnect function
    act(() => {
      onConnect();
    });

    expect(mockSubscribe).toHaveBeenCalledWith(mockTopic, expect.any(Function));
  });

  it("should deactivate the client on unmount", () => {
    const { unmount } = renderHook(() =>
      useChat({
        url: mockUrl,
        topic: mockTopic,
      }),
    );

    unmount();

    expect(mockDeactivate).toHaveBeenCalled();
  });
});
