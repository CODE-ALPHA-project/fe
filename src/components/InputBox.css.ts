import { style } from "@vanilla-extract/css";

export const chatInputContainer = style({
  display: "flex",
  padding: "10px",
  borderTop: "1px solid #e0e0e0",
  backgroundColor: "#f5f5f5",
});

export const chatInput = style({
  flex: 1,
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  marginRight: "10px",
});

export const sendButton = style({
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#0056b3",
  },
});
