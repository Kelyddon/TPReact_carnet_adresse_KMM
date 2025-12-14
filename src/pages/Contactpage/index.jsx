import { useEffect, useState } from "react";
import Header from "../../templates/Header";
import Form from "../../organism/Form";
import FormGroup from "../../molecule/FormGroup";
import FormLabel from "../../atom/FormLabel";
import FormInputText from "../../atom/FormInputText";
import FormInputEmail from "../../atom/FormInputEmail";
import FormDate from "../../atom/FormInputDate";
import FormInputTel from "../../atom/FormInputTel";
import ContactsTable from "../../organism/Contact";

const STORAGE_KEY = "contacts";

const Contactpage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [users, setUsers] = useState([]);
  const [nextId, setNextId] = useState(1);

  // id utilisateur en cours d’édition
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setUsers(parsed);
          const maxId = parsed.reduce((m, c) => (c.id > m ? c.id : m), 0);
          setNextId(maxId + 1);
        }
      }
    } catch {}
  }, []);

  // Sauvegarder
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    } catch {}
  }, [users]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleSurnameChange = (e) => setSurname(e.target.value);
  const handleTelChange = (e) => setTel(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const resetForm = () => {
    setName("");
    setSurname("");
    setTel("");
    setEmail("");
    setDate("");
    setEditingId(null);
  };

  const handleEditStart = (id) => {
    const u = users.find((x) => x.id === id);
    if (!u) return;
    setEditingId(id);
    setName(u.name || "");
    setSurname(u.surname || "");
    setTel(u.tel || "");
    setEmail(u.email || "");
    setDate(u.date || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!surname || !name || !tel || !email || !date) return;

    if (editingId != null) {
      // mise à jour
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingId ? { ...u, name, surname, tel, email, date } : u
        )
      );
      resetForm();
    } else {
      // ajout
      const newContact = { id: nextId, name, surname, tel, email, date };
      setUsers((prev) => [...prev, newContact]);
      setNextId((prev) => prev + 1);
      resetForm();
    }
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    // si suppression en cours d'édition
    if (editingId === id) resetForm();
  };

  const isBirthdayToday = (birthIso) => {
  if (!birthIso) return false;
  const today = new Date();
  const b = new Date(birthIso);
  return today.getDate() === b.getDate() && today.getMonth() === b.getMonth();
};

  return (
    <>
       <Header pageTitle="Mon carnet d'adresses" />
    <main className="container mx-auto p-4">
      <Form handleSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel content="Prénom" inputId="surname" />
            <FormInputText
              inputName="surname"
              inputId="surname"
              value={surname}
              handleNameChange={handleSurnameChange}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel content="Nom" inputId="name" />
            <FormInputText
              inputName="name"
              inputId="name"
              value={name}
              handleNameChange={handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel content="Téléphone" inputId="tel" />
            <FormInputTel
              inputName="tel"
              inputId="tel"
              value={tel}
              handleTelChange={handleTelChange}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel content="Email" inputId="email" />
            <FormInputEmail
              inputName="email"
              inputId="email"
              value={email}
              handleEmailChange={handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel content="Date d'anniversaire" inputId="anniv" />
            <FormDate
              inputName="anniv"
              inputId="anniv"
              value={date}
              handleDateChange={handleDateChange}
            />
          </FormGroup>

          {/*Modification d'un utilisateur*/}
          {editingId != null && (
          <div className="text-sm text-blue-700">Mode édition en cours (id: {editingId})</div>
        )}
        </Form>

        <ContactsTable
          contacts={users}
          onDelete={handleDelete}
          onEdit={handleEditStart}
          isBirthdayToday={isBirthdayToday}
        />
      </main>
    </>
  );
};

export default Contactpage;