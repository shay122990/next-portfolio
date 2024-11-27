interface FormInputProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    uniqueId: string;
  }
  
  function FormInput({ label, name, type, value, onChange, uniqueId }: FormInputProps) {
    return (
      <div className="mb-4">
        <label htmlFor={`${name}-${uniqueId}`} className="block text-sm font-medium text-gray-700 dark:text-white">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={`${name}-${uniqueId}`}
          value={value}
          onChange={onChange}
          className="mt-1 p-2 w-full border border-gray-300 bg-white text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete={name}
        />
      </div>
    );
  }
export default FormInput  