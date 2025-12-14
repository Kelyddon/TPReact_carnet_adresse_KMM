export default function TableHead({ columns = [] }) {
  return (
    <thead className="bg-gray-100">
      <tr>
        {columns.map((label) => (
          <th key={label} className="border border-gray-300 px-3 py-2 text-left">
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}