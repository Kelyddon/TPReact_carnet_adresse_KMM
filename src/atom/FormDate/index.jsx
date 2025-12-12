const FormInputDate = ({ inputDate, inputId, handleDate }) => {
  return (
    <input
      type="date"
      name={inputDate}
      id={inputId}
      className="form-control"
      onInput={handleDate}
    />
  );
};

export default FormInputDate;
