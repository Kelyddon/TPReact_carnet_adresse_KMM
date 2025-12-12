export default function TableBody({ contacts = [] }) {
  return (
    <tbody className="divide-y divide-gray-100 bg-white">
      {contacts.length === 0 ? (
        <tr>
          <td colSpan={5} className="px-4 py-6 text-center text-sm text-gray-500">
            Aucun contact pour le moment.
          </td>
        </tr>
      ) : (
        contacts.map((c, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm text-gray-900">{c.surname}</td>
            <td className="px-4 py-3 text-sm text-gray-900">{c.name}</td>
            <td className="px-4 py-3 text-sm text-gray-900">{c.tel}</td>
            <td className="px-4 py-3 text-sm text-blue-700">{c.email}</td>
            <td className="px-4 py-3 text-sm text-gray-900">{c.date}</td>
          </tr>
        ))
      )}
    </tbody>
  );
}