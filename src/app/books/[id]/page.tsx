export default function Book({params: {id}}: {params: {id: string}}) {
  return (
    <>
      <h1>Book Page</h1>
      <p>ID: {params.id}</p>
    </>
  );
}