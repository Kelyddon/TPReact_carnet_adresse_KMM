import "./index.scss";

const FormInputEmail = ({ inputName, inputId , handleEmailChange}) => {
  return (
    <input
      type="email"
      name={inputName}
      id={inputId}
      className="form-control"
      onChange={handleEmailChange}
      required
    />
  );
};

export default FormInputEmail;
