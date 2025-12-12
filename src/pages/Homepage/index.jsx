import Header from "../../templates/Header";
import Footer from "../../templates/Footer";
import ContactForm from "../../organism/Form";
import FormGroup from "../../molecule/FormGroup";
import FormLabel from "../../atom/FormLabel";
import FormInputText from "../../atom/FormInputText";
import FormInputEmail from "../../atom/FormInputEmail";
import FormTextarea from "../../atom/FormTextarea";

const Homepage = () => {
  return (
    <>
      <Header />

      <main className="app-main">
        <ContactForm>
          <FormGroup>
            <FormLabel content="Votre nom" inputId="name" />
            <FormInputText inputName="name" inputId="name" />
            <FormLabel content="Votre email" inputId="email" />
            <FormInputEmail inputName="email" inputId="email" />
            <FormLabel content="Sujet" inputId="subject" />
            <FormInputText inputName="subject" inputId="subject" />
            <FormLabel content="Message" inputId="message" />
            <FormTextarea inputName="message" inputId="message" />
          </FormGroup>
        </ContactForm>
      </main>

      <Footer />
    </>
  );
};

export default Homepage;
