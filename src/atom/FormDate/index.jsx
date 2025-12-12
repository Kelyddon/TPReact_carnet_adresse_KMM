const FormInputDate = ({ value, id, name, onChange }) => {
  return (
    <input
      type="date"
      id={id}
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInputDate;
