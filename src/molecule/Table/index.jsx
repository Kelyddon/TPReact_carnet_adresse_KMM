import TableHead from "../../atom/TableHead";
import TableBody from "../../atom/TableBody";

export default function Table({ contacts = [] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHead />
        <TableBody contacts={contacts} />
      </table>
    </div>
  );
}