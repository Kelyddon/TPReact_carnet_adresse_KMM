import Table from "../../molecule/Table";

export default function ContactsTable({ contacts = [] }) {
  return (
    <div className="mt-6">
      <Table contacts={contacts} />
    </div>
  );
}
