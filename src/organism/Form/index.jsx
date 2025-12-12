import FormSubmit from "../../atom/FormSubmit";
import "./index.css";

const ContactForm = ({ handleSubmit, children }) => {
  return (
    <form className="app-form" onSubmit={handleSubmit}>
      {children}

      <FormSubmit content="Envoyer" />
    </form>
  );
};

export default ContactForm;
