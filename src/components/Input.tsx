interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, name, value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg bg-transparent border dark:border-white/20 px-5 py-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-red-500"
    />
  );
};

export default Input;
