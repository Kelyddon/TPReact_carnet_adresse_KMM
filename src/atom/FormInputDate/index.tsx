const FormDate = ({ inputName, inputId, value, handleDateChange }) => {
  return (
    <input
      type="date"
      name={inputName}
      id={inputId}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={handleDateChange}
      required
    />
  );
};
export default FormDate;