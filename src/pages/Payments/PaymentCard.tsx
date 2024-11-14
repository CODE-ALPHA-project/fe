import { cn } from "@lib/utils";
import { Button } from "@ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { PaymentPlanProps } from "./types/types";

const PaymentCard = ({
  className,
  type,
  title,
  description,
  features,
  price,
  ...props
}: PaymentPlanProps) => {
  const isPremium = type === "Premium";

  return (
    <Card
      className={cn(
        "w-[calc(100vw-2rem)] max-w-[480px]", // 모바일 화면에서의 너비 조정
        isPremium ? "border-sky-500" : "",
        className,
      )}
      {...props}
    >
      <CardHeader className="items-center space-y-2 md:space-y-4 p-4 md:p-6">
        <CardTitle
          className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-bold",
            isPremium ? "text-sky-500" : "",
          )}
        >
          {title}
        </CardTitle>
        <CardDescription className="text-sm md:text-base text-center">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:gap-6 p-4 md:p-6">
        <div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="mb-4 md:mb-6 grid grid-cols-[20px_1fr] md:grid-cols-[25px_1fr] items-start pb-2 md:pb-4 last:mb-0 last:pb-0"
            >
              <span
                className={cn(
                  "flex h-2 w-2 translate-y-2 rounded-full",
                  isPremium ? "bg-sky-500" : "bg-slate-500",
                )}
              />
              <div className="space-y-1 md:space-y-2">
                <p className="text-base md:text-lg font-medium leading-none">
                  {feature.title}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-6">
        <Button
          className={cn(
            "items-center w-full h-12 md:h-14",
            isPremium
              ? "bg-sky-500 hover:bg-sky-600"
              : "bg-sky-950 hover:bg-sky-800",
          )}
        >
          <span className="text-xl md:text-2xl font-semibold font-sans">
            ${price}
          </span>
          <span className="text-sm md:text-base font-thin text-gray-200 ml-2 md:ml-3">
            USD/month
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;
