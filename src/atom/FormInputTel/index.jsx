const FormInputTel = ({ inputName, inputId, value, handleTelChange, placeholder }) => {
  return (
    <input
      type="tel"
      name={inputName}
      id={inputId}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={handleTelChange}
      placeholder={placeholder}
      required
    />
  );
};
export default FormInputTel;