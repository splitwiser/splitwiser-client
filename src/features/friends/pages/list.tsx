import useSWR from "swr";
import fetcher from "../../api";


export default function FriendsListPage() {
  const { data: friends, error, isLoading } = useSWR('/users/2/friends?withBalance=True', fetcher)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error!</p>
  }

  return (
    <ul>
      {friends.data.map(friend => <li>{friend.friend_username}: {friend.total_amount_due}</li>)}
    </ul>
  )
}