
export default function Header({ pageTitle }) {
  return (
    <header className="py-6">
      <h1 className="text-center text-2xl font-semibold">{pageTitle}</h1>
    </header>
  );
}