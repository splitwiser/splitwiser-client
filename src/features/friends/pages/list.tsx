// External
import { Link } from "react-router-dom";
import useSWR from "swr";

// Internal
import fetcher from "../../api";
import FriendCard from "../components/FriendCard";
import PageTitle from "@/components/page-title";
import { Skeleton } from "@/components/ui/skeleton";
import type { Friend } from "@/types/friends";

export default function FriendsListPage() {
  const {
    data: friends,
    error,
    isLoading,
  } = useSWR("/users/2/friends?withBalance=True", fetcher);

  if (isLoading) {
    return <Skeleton />;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <>
      <PageTitle>Your Friends</PageTitle>
      <ul className="grid grid-cols-3 gap-5">
        {friends.data.map((friend: Friend) => {
          return (
            <Link to={`${friend.friend_id}`}>
              <FriendCard
                key={friend.friend_id}
                friendName={friend.friend_username}
                balance={friend.total_amount_due}
              />
            </Link>
          );
        })}
      </ul>
    </>
  );
}
