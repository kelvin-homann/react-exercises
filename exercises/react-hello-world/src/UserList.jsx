import { useFetch } from "./UseFetch";

export function UserList() {
  const baseUrl = "https://dummyjson.com/";
  const { data, loading, error } = useFetch(`${baseUrl}users`);

  if (loading) {
    return <p>Ladevorgang läuft...</p>;
  }

  if (error) {
    return <p>Es ist ein Fehler aufgetreten: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </ul>
  );
}
