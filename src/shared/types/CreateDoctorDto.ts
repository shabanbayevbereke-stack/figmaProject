interface Doctor {
  id: string;
  name: string | null;
  specialization?: string;
  experience?: number;
  created: string;
  createdBy: string;
}

interface CreateDoctorDto {
  name: string;
  specialization: string;
  experience: number;
}

interface PaginatedDoctors {
  doctors: Doctor[];
  totalCount: number;
}

export type { Doctor, CreateDoctorDto, PaginatedDoctors };
