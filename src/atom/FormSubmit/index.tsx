export default function FormSubmit({ label = "Ajouter" }) {
  return (
    <button type="submit" className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
      {label}
    </button>
  );
}