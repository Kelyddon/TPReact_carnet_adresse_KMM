export default function TableBody({ contacts = [], onDelete, onEdit, isBirthdayToday }) {
  return (
    <tbody>
      {contacts.map((c) => {
        const birthday = isBirthdayToday?.(c.date);
        return (
          <tr
            key={c.id}
            className={birthday ? "bg-yellow-200 font-semibold border-2 border-yellow-300" : ""}
          >
            <td className="border border-gray-300 px-3 py-2">{c.surname}</td>
            <td className="border border-gray-300 px-3 py-2">{c.name}</td>
            <td className="border border-gray-300 px-3 py-2">{c.tel}</td>
            <td className="border border-gray-300 px-3 py-2">{c.email}</td>
            <td className="border border-gray-300 px-3 py-2">{c.date}</td>
            <td className="border border-gray-300 px-3 py-2">
              <button
                type="button"
                className="text-red-600 hover:underline mr-3"
                onClick={() => onDelete?.(c.id)}
              >
                Supprimer
              </button>
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => onEdit?.(c.id)}
              >
                Modifier
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}