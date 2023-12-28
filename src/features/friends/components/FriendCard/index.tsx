import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  friendName: string;
  balance: number;
};

export default function FriendCard({ friendName, balance }: Props) {
  return (
    <>
      <Card className="flex justify-between items-center">
        <CardHeader>
          <CardTitle>{friendName}</CardTitle>
        </CardHeader>
        <span
          className={
            "pr-[1.5rem]" + (balance < 0 ? " text-red-300" : " text-green-300")
          }
        >
          {balance}
        </span>
      </Card>
    </>
  );
}
