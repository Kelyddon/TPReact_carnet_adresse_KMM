import Table from "../../molecule/Table";

export default function ContactsTable({ contacts = [], onDelete, onEdit, isBirthdayToday }) {
  return (
    <div className="mt-6">
      <Table contacts={contacts} onDelete={onDelete} onEdit={onEdit} isBirthdayToday={isBirthdayToday} />
    </div>
  );
}