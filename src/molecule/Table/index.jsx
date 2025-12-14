import TableHead from "../../atom/TableHead";
import TableBody from "../../atom/TableBody";

export default function Table({ contacts = [], onDelete, onEdit, isBirthdayToday }) {
  return (
    <table className="w-full border border-gray-300 mt-6">
      <TableHead
        columns={["Prénom", "Nom", "Téléphone", "Email", "Anniversaire", "Actions"]}
      />
      <TableBody contacts={contacts} onDelete={onDelete} onEdit={onEdit} isBirthdayToday={isBirthdayToday} />
    </table>
  );
}