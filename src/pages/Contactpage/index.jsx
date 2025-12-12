import { useState } from "react";
import Header from "../../templates/Header";
import Form from "../../organism/Form";
import FormGroup from "../../molecule/FormGroup";
import FormLabel from "../../atom/FormLabel";
import FormInputText from "../../atom/FormInputText";
import FormInputEmail from "../../atom/FormInputEmail";
import FormDate from "../../atom/FormInputDate";
import FormInputTel from "../../atom/FormInputTel";
import ContactsTable from "../../organism/Contact";

const Contactpage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [users, setUsers] = useState([]);
  const [nextId, setNextId] = useState(1);

  const contacts = users;

  const handleNameChange = (e) => setName(e.target.value);
  const handleSurnameChange = (e) => setSurname(e.target.value);
  const handleTelChange = (e) => setTel(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUsers([
    ...users,
    {
      id: nextId,
      name,
      surname,
      tel,
      email,
      date,
    }
  ]);

  setNextId(nextId + 1);

  console.log("Nouvel utilisateur ajouté :", {
    id: nextId,
    name,
    surname,
    tel,
    email,
    date,
  });
};

  return (
    <>
      <Header pageTitle="Contactez-nous" />

      <main className="app-main">
        <Form handleSubmit={handleSubmit}>

          <FormGroup>
            <FormLabel content="Votre Surnom" inputId="surname" />
            <FormInputText
              inputName="surname"
              inputId="surname"
              handleNameChange={handleSurnameChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Votre nom" inputId="name" />
            <FormInputText
              inputName="name"
              inputId="name"
              handleNameChange={handleNameChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Votre telephone" inputId="tel" />
            <FormInputTel
              inputName="tel"
              inputId="tel"
              handleTelChange={handleTelChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Votre email" inputId="email" />
            <FormInputEmail
              inputName="email"
              inputId="email"
              handleEmailChange={handleEmailChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Anniversaire" inputId="anniv" />
            <FormDate
              inputName="anniv"
              inputId="anniv"
              handleDateChange={handleDateChange}
            />
          </FormGroup>

        </Form>

      <ContactsTable contacts={contacts} />
      </main>
    </>
  );
};

export default Contactpage;
