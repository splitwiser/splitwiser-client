import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  friendName: string;
  balance: number;
};

export default function FriendCard({ friendName, balance }: Props) {
  const IsOwed = balance > 0;
  const prefixText = IsOwed ? "Owes you " : "You owe ";

  return (
    <>
      <Card
        className={
          "flex justify-between items-center hover:bg-slate-700 hover:border-white border" +
          (IsOwed ? " border-green-200" : " border-red-200")
        }
      >
        <CardHeader>
          <CardTitle>{friendName}</CardTitle>
        </CardHeader>
        <span
          className={
            "pr-[1.5rem]" + (IsOwed ? " text-green-200" : " text-red-200")
          }
        >
          {prefixText}: {balance}
        </span>
      </Card>
    </>
  );
}
