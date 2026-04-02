interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function MyInput({
  label,
  error,
  ...props
}: MyInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full">
      <label className="mb-2 ml-4 block text-xs font-semibold tracking-wider text-gray-500 uppercase">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border-none bg-gray-100 p-4 text-gray-900 transition-all outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
