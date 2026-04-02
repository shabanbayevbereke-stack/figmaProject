export function MyButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700"
    >
      {children}
    </button>
  );
}
