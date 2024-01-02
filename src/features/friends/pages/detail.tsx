// External
import useSWR from "swr";
import { useParams } from "react-router-dom";

// Internal
import fetcher from "../../api";
import type { TransactionListRes } from "@/types/api";
import TransactionCard from "@/features/transactions/components/TransactionCard";
import PageTitle from "@/components/page-title";

export default function FriendDetailPage() {
  const { friendId } = useParams();
  const { data, error, isLoading } = useSWR<TransactionListRes>(
    `/users/2/friends/${friendId}/expenses`,
    fetcher,
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <PageTitle>Expenses</PageTitle>
      <ul className="grid grid-col-1 gap-5">
        {data?.data.map((txn) => {
          return (
            <TransactionCard
              name={txn.name}
              amount={txn.amount}
              isOwed={txn.payer === 2}
              splitAmount={txn.split_amount}
            />
          );
        })}
      </ul>
    </>
  );
}
