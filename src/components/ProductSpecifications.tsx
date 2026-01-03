import React from 'react';
import { ProductSpecification, TableData } from '@/types/specification';
import { SpecificationTable } from './SpecificationTable';

interface Props {
  specifications: ProductSpecification[];
  className?: string;
}

export const ProductSpecifications: React.FC<Props> = ({ specifications, className = '' }) => {
  if (!specifications || specifications.length === 0) {
    return null;
  }

  // Filter only active specifications
  const activeSpecs = specifications.filter(spec => spec.isActive);

  if (activeSpecs.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-8 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
      
      {activeSpecs.map((spec) => {
        if (spec.type === 'grid' || spec.type === 'matrix') {
          return (
            <SpecificationTable
              key={spec.id}
              title={spec.title}
              data={spec.content as TableData}
            />
          );
        }
        
        // TODO: Add chart rendering support when needed
        // if (spec.type === 'chart') {
        //   return <SpecificationChart key={spec.id} title={spec.title} data={spec.content as ChartData} />;
        // }
        
        return null;
      })}
    </div>
  );
};
