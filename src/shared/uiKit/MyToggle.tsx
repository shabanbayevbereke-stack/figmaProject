export function MyToggle({ label }: { label: string }) {
  return (
    <label className="flex items-center cursor-pointer group">
      <div className="relative">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-all"></div>
        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-4"></div>
      </div>
      <span className="ml-3 text-sm text-gray-500 font-medium">{label}</span>
    </label>
  );
}
