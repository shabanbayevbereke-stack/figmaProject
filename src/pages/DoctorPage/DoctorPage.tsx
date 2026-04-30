import { useState } from "react";
import { useTheme } from "next-themes";
import {
  useDoctorsData,
  useCreateDoctor,
  useDeleteDoctor,
} from "@/shared/api/useDoctorsData";
import { DoctorForm } from "./components/DoctorForm";
import { DoctorRow } from "./components/DoctorRow";
import { Pagination } from "./components/Pagination";
import { DeleteDoctorModal } from "./components/DeleteDoctorModal";
import type { Doctor } from "@/shared/types/CreateDoctorDto";

export function DoctorPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data } = useDoctorsData(currentPage, itemsPerPage);

  const doctors = data?.doctors || [];
  const totalPages = data?.totalPages || 1;
  const totalRecords = data?.totalRecords || 0;

  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, totalRecords);

  const { mutate: createDoctor, isPending: isCreating } = useCreateDoctor();
  const { mutate: deleteDoctor } = useDeleteDoctor();

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleConfirmDelete = () => {
    if (selectedDoctor) {
      deleteDoctor(selectedDoctor.id);
      setSelectedDoctor(null);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Управление персоналом</h1>
        <DoctorForm
          onAdd={(name) =>
            createDoctor({ name, specialization: "Терапевт", experience: 5 })
          }
          isPending={isCreating}
          isDark={isDark}
        />
      </div>

      <div
        className={`p-6 rounded-2xl border ${isDark ? "bg-[#1f2937] border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr
                className={`text-xs uppercase font-bold ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                <th className="py-4 px-6 text-center w-16">#</th>
                <th className="py-4 px-6">Врач</th>
                <th className="py-4 px-6">Специализация</th>
                <th className="py-4 px-6">Опыт</th>
                <th className="py-4 px-6 text-right">Действия</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor: Doctor, index: number) => (
                <DoctorRow
                  key={doctor.id}
                  doctor={doctor}
                  index={(currentPage - 1) * itemsPerPage + index}
                  onDelete={() => setSelectedDoctor(doctor)}
                  isDark={isDark}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center p-4">
          <span className="text-sm text-slate-500">
            Показано {from}–{to} из {totalRecords}
          </span>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
            isDark={isDark}
          />
        </div>
      </div>

      <DeleteDoctorModal
        isOpen={!!selectedDoctor}
        user={selectedDoctor}
        isDark={isDark}
        onClose={() => setSelectedDoctor(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
