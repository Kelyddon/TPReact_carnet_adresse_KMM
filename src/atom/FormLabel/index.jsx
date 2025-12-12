import "./index.css";

const FormLabel = ({ content, inputId }) => {
  return (
    <label htmlFor={inputId} className="form-label">
      {content}
    </label>
  );
};

export default FormLabel;
