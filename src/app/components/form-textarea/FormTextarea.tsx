interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  uniqueId: string;
}

function FormTextarea({
  label,
  name,
  value,
  onChange,
  uniqueId,
}: FormTextareaProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={`${name}-${uniqueId}`}
        className="block text-sm font-medium text-gray-700 dark:text-white"
      >
        {label}
      </label>
      <textarea
        name={name}
        id={`${name}-${uniqueId}`}
        rows={4}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border border-gray-300 bg-white text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
        autoComplete="off"
      ></textarea>
    </div>
  );
}
export default FormTextarea