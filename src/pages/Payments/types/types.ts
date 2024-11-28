import { Card } from '@/components/ui/card';

export interface PaymentFeature {
  title: string;
  description: string;
}

export interface PaymentPlanProps extends React.ComponentProps<typeof Card> {
  type: 'Basic' | 'Premium';
  title: string;
  description: string;
  features: PaymentFeature[];
  price: number;
}
