import React from 'react';
import axios from 'axios';
import { ProductSpecification, TableData, ChartData } from '@/types/specification';

const API_BASE_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
const API_URL = `${API_BASE_URL}/api`;

export class SpecificationAPI {
  /**
   * Get all specifications for a product
   */
  static async getByProductId(
    productId: string,
    includeInactive = false
  ): Promise<ProductSpecification[]> {
    const url = `${API_URL}/specifications/product/${productId}${
      includeInactive ? '?includeInactive=true' : ''
    }`;

    const response = await axios.get(url, {
      withCredentials: true,
    });

    return response.data.data;
  }

  /**
   * Get a single specification by ID
   */
  static async getById(id: string): Promise<ProductSpecification> {
    const response = await axios.get(`${API_URL}/specifications/${id}`, {
      withCredentials: true,
    });

    return response.data.data;
  }

  /**
   * Create a new specification
   */
  static async create(
    productId: string,
    title: string,
    type: 'grid' | 'matrix' | 'chart',
    content: TableData | ChartData,
    displayOrder?: string
  ): Promise<ProductSpecification> {
    const response = await axios.post(`${API_URL}/specifications`, {
      productId,
      title,
      type,
      content,
      displayOrder: displayOrder || '0',
    }, {
      withCredentials: true,
    });

    return response.data.data;
  }

  /**
   * Update an existing specification
   */
  static async update(
    id: string,
    updates: {
      title?: string;
      type?: 'grid' | 'matrix' | 'chart';
      content?: TableData | ChartData;
      displayOrder?: string;
      isActive?: boolean;
    }
  ): Promise<ProductSpecification> {
    const response = await axios.put(`${API_URL}/specifications/${id}`, updates, {
      withCredentials: true,
    });

    return response.data.data;
  }

  /**
   * Delete a specification
   */
  static async delete(id: string): Promise<void> {
    await axios.delete(`${API_URL}/specifications/${id}`, {
      withCredentials: true,
    });
  }

  /**
   * Toggle active/inactive status
   */
  static async toggleActive(id: string): Promise<ProductSpecification> {
    const response = await axios.patch(`${API_URL}/specifications/${id}/toggle-active`, {}, {
      withCredentials: true,
    });

    return response.data.data;
  }
}

// React hook for specifications (optional)
export function useSpecifications(productId: string, includeInactive = false) {
  const [specifications, setSpecifications] = React.useState<ProductSpecification[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchSpecs = async () => {
      try {
        setLoading(true);
        const data = await SpecificationAPI.getByProductId(productId, includeInactive);
        setSpecifications(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load specifications');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchSpecs();
    }
  }, [productId, includeInactive]);

  return { specifications, loading, error, refetch: () => {} };
}
