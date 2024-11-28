import image from "../assets/image.webp";

interface QnAItem {
  id: string;
  category: string;
  title: string;
  expertName: string;
  expertImage: string;
  preview: string;
}

export const qnaItems: QnAItem[] = [
  {
    id: "1",
    category: "임금",
    title: "임금체불에 관해 질문드립니다.",
    expertName: "우성현 노무사",
    expertImage: image,
    preview:
      '체불임금(滯拂賃金)란 말그대로 `지급이 연체,지체된 임금`을 말합니다.재직중 임금(월급여, 상여금, 기타 수당 등)의 경우 근로기준법에 따르면 임금지급일에서 1일이라도 임금지급이 지체되면 "임금체불이 되었다"고 봅니다. * 근로기준법 제43조 제2항 : "임금은 매월 1회 이상 일정한 기일을 정하여 지급하여야 한다.',
  },
  {
    id: "2",
    category: "비자",
    title: "E-9비자 연장에 관해 질문드립니다.",
    expertName: "김건호 노무사",
    expertImage: image,
    preview:
      " 외국인이 체류기간을 초과하여 계속 체류하려면 법령으로 정하는 바에 따라 체류기간이 끝나기 전에 법무부장관의 비자연장허가를 받아야 합니다(규제「출입국관리법」 제25조제1항).※ 통상적으로 사용하는 “비자연장”이라는 말의 의미는 「출입국관리법」상의 용어인 “체류기간연장”에 해당합니다. 이 콘텐츠에서는 일상적으로 더 흔히 쓰이는 용어인“비자연장”을 주로 사용하겠습니다.",
  },
  {
    id: "3",
    category: "노동자 인권",
    title: "이러한 경우 어떻게 해결해야 하나요?",
    expertName: "강태현 노무사",
    expertImage: image,
    preview:
      "제대로된 근무 환경이 제공되지 않아 많은 어려움이 있습니다. 일을 하다 다치는 경우 제가 함부로 병원을 가지 못하고 있습니다.",
  },
  {
    id: "4",
    category: "임금",
    title: "임금체불에 관해 질문드립니다.",
    expertName: "우성현 노무사",
    expertImage: image,
    preview:
      "일한지 5년이 넘어가는데 아직도 임금을 한 푼도 못 받았습니다. 나 너무 억울해서 잠이 안와요 이거 어떡하죠 빨리 내 돈 달라고 하고싶은데 맞을까봐 못하겠어요",
  },
  {
    id: "5",
    category: "임금",
    title: "임금체불에 관해 질문드립니다.",
    expertName: "우성현 노무사",
    expertImage: image,
    preview:
      "일한지 5년이 넘어가는데 아직도 임금을 한 푼도 못 받았습니다. 나 너무 억울해서 잠이 안와요 이거 어떡하죠 빨리 내 돈 달라고 하고싶은데 맞을까봐 못하겠어요",
  },
];
