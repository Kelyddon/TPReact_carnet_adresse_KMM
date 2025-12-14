const FormInputText = ({ inputName, inputId, value, handleNameChange, placeholder }) => {
  return (
    <input
      type="text"
      name={inputName}
      id={inputId}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={handleNameChange}
      placeholder={placeholder}
      required
    />
  );
};
export default FormInputText;