import { PaymentPlanProps } from '@/pages/Payments/types/types';

export const basicPlan: PaymentPlanProps = {
  type: 'Basic',
  title: '기본 요금제',
  description: '개인 사용자를 위한 기본 기능',
  price: 0,
  features: [
    {
      title: '기본 기능',
      description: '핵심 서비스 이용 가능',
    },
    {
      title: '챗봇 가능',
      description: '제한된 사용량',
    },
    {
      title: '매칭 가능',
      description: '노무사 매칭',
    },
  ],
};

export const premiumPlan: PaymentPlanProps = {
  type: 'Premium',
  title: '프리미엄 요금제',
  description: '비즈니스를 위한 고급 기능',
  price: 22,
  features: [
    {
      title: '모든 기본 기능',
      description: '기본 요금제의 모든 기능 포함',
    },
    {
      title: '무제한 챗봇',
      description: '무제한 채팅 가능',
    },
    {
      title: '빠른 매칭',
      description: '매칭 우선순위',
    },
  ],
};
