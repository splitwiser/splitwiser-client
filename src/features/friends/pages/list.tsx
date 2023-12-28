import useSWR from "swr";
import fetcher from "../../api";

import { Skeleton } from "@/components/ui/skeleton";
import FriendCard from "../components/FriendCard";

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
    <ul>
      {friends.data.map((friend: Friend) => {
        return (
          <FriendCard
            key={friend.friend_id}
            friendName={friend.friend_username}
            balance={friend.total_amount_due}
          />
        );
      })}
    </ul>
  );
}
