import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface ICategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
  displayOrder?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const fetchCategories = async (): Promise<ICategory[]> => {
  const { data } = await axios.get('/api/admin/categories', { withCredentials: true });
  return data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};
