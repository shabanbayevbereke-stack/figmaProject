export function MyToggle({ label }: { label: string }) {
  return (
    <label className="group flex cursor-pointer items-center">
      <div className="relative">
        <input type="checkbox" className="peer sr-only border" />
        <div className="h-5 w-9 rounded-full bg-gray-200 transition-all peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:outline-none peer-focus:ring-offset-2"></div>
        <div className="absolute top-1 left-1 h-3 w-3 rounded-full bg-white transition-all peer-checked:translate-x-4"></div>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-500">{label}</span>
    </label>
  );
}
