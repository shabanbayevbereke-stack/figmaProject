import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
  isDark: boolean;
}

export function Pagination({ currentPage, totalPages, onPageChange, isDark }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-1">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="p-2 rounded-lg border disabled:opacity-30"
      >
        <FiChevronLeft size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
            currentPage === page 
              ? "bg-indigo-600 text-white" 
              : isDark ? "hover:bg-slate-800 text-slate-400" : "hover:bg-slate-100 text-slate-500"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="p-2 rounded-lg border disabled:opacity-30"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
}