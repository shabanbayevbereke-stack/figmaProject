export function MyButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="w-full rounded-xl bg-blue-500 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 focus:ring-offset-3 focus:ring-3 focus:ring-red-500 focus:outline-none"
    >
      {children}
    </button>
  );
}
