export default function UserProfile({ firstName, lastName, age }) {
  return (
    <div>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>

      <p>Age: {age}</p>
    </div>
  );
}
