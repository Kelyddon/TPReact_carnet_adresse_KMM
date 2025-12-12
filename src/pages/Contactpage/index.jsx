import { useState } from "react";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";
import Form from "../../organism/Form";
import FormGroup from "../../molecule/FormGroup";
import FormLabel from "../../atom/FormLabel";
import FormInputText from "../../atom/FormInputText";
import FormInputEmail from "../../atom/FormInputEmail";
import FormTextarea from "../../atom/FormTextarea";
import FormDate from "../../atom/FormDate";

const Contactpage = () => {
  const [name, setName] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Coucou ${name}`);
  };

  return (
    <>
      <Header pageTitle="Contactez-nous" />

      <main className="app-main">
        <Form handleSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel content="Votre nom" inputId="name" />
            <FormInputText
              inputName="name"
              inputId="name"
              handleNameChange={handleNameChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Votre email" inputId="email" />
            <FormInputEmail inputName="email" inputId="email" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Anniversaire" inputId="anniversaire" />
            <FormDate inputName="subject" inputId="subject" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Votre message" inputId="message" />
            <FormTextarea inputName="message" inputId="message" />
          </FormGroup>
        </Form>
      </main>

      <Footer content="Un formulaire en React qui illustre atomic design + events + handler" />
    </>
  );
};

export default Contactpage;
