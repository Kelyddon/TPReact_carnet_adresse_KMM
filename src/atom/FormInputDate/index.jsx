const FormInputDate = ({ value, id, name, handleDateChange }) => {
  return (
    <input
      type="date"
      id={id}
      name={name}
      className="form-control"
      value={value}
      onChange={handleDateChange}
      required
    />
  );
};

export default FormInputDate;
