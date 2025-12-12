const FormInputTel = ({ value, id, name, handleTelChange }) => {
  return (
    <input
    type="tel"
    id={id}
    name={name}
    className="form-control"
    value={value}
    onChange={handleTelChange}
    pattern="[0-9]{10}"
    required
    />
 
  );
};

export default FormInputTel;
