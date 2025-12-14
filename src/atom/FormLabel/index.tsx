const FormLabel = ({ inputId, content }) => {
  return (
    <label htmlFor={inputId} className="text-sm text-gray-700">
      {content}
    </label>
  );
};
export default FormLabel;