// Internal
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  name: string;
  amount: number;
  isOwed: boolean;
  splitAmount: number;
};

export default function TransactionCard({
  name,
  amount,
  isOwed,
  splitAmount,
}: Props) {
  function transactionDetails(isOwed: boolean) {
    if (isOwed) {
      return (
        <>
          <div>
            <CardDescription>You paid</CardDescription>
            {amount}
          </div>
          <div>
            <CardDescription>You lent</CardDescription>
            {splitAmount}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <CardDescription>Paid</CardDescription>
            {amount}
          </div>
          <div>
            <CardDescription>Lent you</CardDescription>
            {splitAmount}
          </div>
        </>
      );
    }
  }

  return (
    <Card className="flex items-center justify-between">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex gap-3 text-right">
        {transactionDetails(isOwed)}
      </CardContent>
    </Card>
  );
}
