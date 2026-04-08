import { Cards } from "@/components/Cards";
import { CustomTable } from "@/components/CustomTable";

export function HomePage() {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">свой тейбл</h2>
      <div className="my-5 bg-white rounded-lg shadow-md p-4 gap-4">
        <ul className="flex justify-between px-2">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <span></span>
        <ul className="flex px-2">
          <li>Item 5</li>
          <li>Item 6</li>
        </ul>
      </div>
      <div className="gap-6 w-full flex justify-around my-5">
        <Cards item={1} />
        <Cards item={2} />
        <Cards item={3} />
      </div>
      <CustomTable />
    </>
  );
}
