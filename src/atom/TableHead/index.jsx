export default function TableHead() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Prénom</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nom</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Téléphone</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date de naissance</th>
      </tr>
    </thead>
  );
}