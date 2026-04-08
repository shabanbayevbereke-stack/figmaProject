type CardProps = {
  item: number;
};
export function Cards({ item }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex gap-4 w-full">
      <div>
        <h2 className="text-xl font-bold mb-2">Card Title {item}</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me
        </button>
      </div>
      <div>
        <p className="text-gray-600">This is a description for card {item}.</p>
        <p className="text-gray-600">This is a description for card {item}.</p>
      </div>
    </div>
  );
}
