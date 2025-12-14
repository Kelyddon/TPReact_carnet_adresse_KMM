export default function Form({ handleSubmit, children }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded border border-gray-200 p-6 space-y-4"
    >
      <h2 className="text-center text-xl font-medium mb-2">Ajouter un contact</h2>
      {children}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
}