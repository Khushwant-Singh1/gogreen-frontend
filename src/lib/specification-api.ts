import React from 'react';
import { ProductSpecification, TableData, ChartData } from '@/types/specification';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
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

    const response = await fetch(url, {
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch specifications');
    }

    const data = await response.json();
    return data.data;
  }

  /**
   * Get a single specification by ID
   */
  static async getById(id: string): Promise<ProductSpecification> {
    const response = await fetch(`${API_URL}/specifications/${id}`, {
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch specification');
    }

    const data = await response.json();
    return data.data;
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
    const response = await fetch(`${API_URL}/specifications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        productId,
        title,
        type,
        content,
        displayOrder: displayOrder || '0',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create specification');
    }

    const data = await response.json();
    return data.data;
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
    const response = await fetch(`${API_URL}/specifications/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update specification');
    }

    const data = await response.json();
    return data.data;
  }

  /**
   * Delete a specification
   */
  static async delete(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/specifications/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete specification');
    }
  }

  /**
   * Toggle active/inactive status
   */
  static async toggleActive(id: string): Promise<ProductSpecification> {
    const response = await fetch(`${API_URL}/specifications/${id}/toggle-active`, {
      method: 'PATCH',
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to toggle specification status');
    }

    const data = await response.json();
    return data.data;
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
