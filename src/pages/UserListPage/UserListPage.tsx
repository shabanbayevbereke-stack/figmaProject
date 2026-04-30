import { useState } from "react";
import { useUsersList, useUsersRedact } from "@/shared/api/useUsersList";
import type { User } from "@/shared/types/user";
import { useTheme } from "next-themes";
import { UserTable } from "./components/UserTable";
import { DeleteUserModal } from "./components/DeleteUserModal";
import { EditUserModal } from "./components/EditUserModal";
import { useQueryClient } from "@tanstack/react-query";

export function UserListPage() {
  const queryClient = useQueryClient();
  const { data } = useUsersList();
  const { mutateAsync: updateUsersMutation } = useUsersRedact();

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  const openDeleteModal = (user: User) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("API: Удаляем пользователя", userToDelete?.id);
    await new Promise((res) => setTimeout(res, 1000));
    setIsDeleteModalOpen(false);
  };

  const openEditModal = (user: User) => {
    setUserToEdit(user);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (userId: string, data: User) => {
    try {
      await updateUsersMutation({
        userId: String(userId),
         data,
      });
      await queryClient.invalidateQueries({ queryKey: ["Users"] });
      console.log("Успех!");
    } catch (error) {
      console.error("Ошибка в handleSaveEdit:", error);
      throw error;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
        Управление персоналом
      </h1>

      <UserTable
        users={data}
        isDark={isDark}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
      />

      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        user={userToDelete}
        isDark={isDark}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        user={userToEdit}
        isDark={isDark}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveEdit}
      />
    </div>
  );
}
