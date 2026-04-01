export function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full">
      <label className="block text-xs font-semibold text-gray-500 mb-2 ml-1 uppercase tracking-wider">
        {label}
      </label>
      <input
        {...props}
        className="w-full p-4 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-gray-900 transition-all outline-none"
      />
    </div>
  );
}