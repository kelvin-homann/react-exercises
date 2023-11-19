import { useUser } from "./UserContext";

export default function UserProfile() {
  const { user } = useUser();

  return (
    <div>
      <h1>{user?.firstName}</h1>
      <h2>{user?.lastName}</h2>

      <p>Age: {user?.age}</p>
    </div>
  );
}
