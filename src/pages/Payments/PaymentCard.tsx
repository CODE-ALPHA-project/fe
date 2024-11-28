import { useState } from 'react';

import { cn } from '@lib/utils';
import { Button } from '@ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';
import { PaymentPlanProps } from './types/types';

const PaymentCard = ({
  className,
  type,
  title,
  description,
  features,
  price,
  ...props
}: PaymentPlanProps) => {
  const isPremium = type === 'Premium';

  const [currentPlan, _] = useState<'Basic' | 'Premium'>('Basic');

  return (
    <Card
      className={cn(
        'w-[calc(100vw-2rem)] max-w-[480px]',
        isPremium ? 'border-sky-500' : '',
        className,
      )}
      {...props}
    >
      <CardHeader className="items-center space-y-2 p-4 md:space-y-4 md:p-6">
        <CardTitle
          className={cn(
            'text-2xl font-bold md:text-3xl lg:text-4xl',
            isPremium ? 'text-sky-500' : '',
          )}
        >
          {title}
        </CardTitle>
        <CardDescription className="text-center text-sm md:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-4 md:gap-6 md:p-6">
        <div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[20px_1fr] items-start pb-2 last:mb-0 last:pb-0 md:mb-6 md:grid-cols-[25px_1fr] md:pb-4"
            >
              <span
                className={cn(
                  'flex h-2 w-2 translate-y-2 rounded-full',
                  isPremium ? 'bg-sky-500' : 'bg-slate-500',
                )}
              />
              <div className="space-y-1 md:space-y-2">
                <p className="text-base font-medium leading-none md:text-lg">
                  {feature.title}
                </p>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-6">
        <Button
          disabled={currentPlan === type}
          className={cn(
            'h-12 w-full items-center md:h-14',
            isPremium
              ? 'bg-sky-500 hover:bg-sky-600'
              : 'bg-sky-950 hover:bg-sky-800',
          )}
        >
          <span className="font-sans text-xl font-normal md:text-2xl">
            {currentPlan === type
              ? '현재 사용중인 요금제입니다.'
              : `${price} USD/month`}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;
