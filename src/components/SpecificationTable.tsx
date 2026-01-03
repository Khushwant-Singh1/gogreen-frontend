import React from 'react';
import { TableData, TableCell } from '@/types/specification';

interface Props {
  title: string;
  data: TableData;
  className?: string;
}

const renderCellContent = (value: TableCell['value']) => {
  if (typeof value === 'boolean') {
    // Handle the checkmarks for boolean values
    return value ? (
      <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <span className="text-gray-300">-</span>
    );
  }
  return value;
};

export const SpecificationTable: React.FC<Props> = ({ title, data, className = '' }) => {
  return (
    <div className={`w-full my-6 border border-blue-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
      {/* Title Header */}
      <div className="bg-blue-900 text-white p-4 text-center text-xl font-bold">
        {title}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center border-collapse">
          {/* Dynamic Header Rendering */}
          {data.headers && data.headers.length > 0 && (
            <thead className="bg-blue-800 text-white">
              {data.headers.map((row, rowIndex) => (
                <tr key={`header-row-${rowIndex}`}>
                  {row.map((cell) => (
                    <th
                      key={cell.id}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={`border border-blue-600 px-4 py-3 font-semibold ${
                        cell.align === 'left' ? 'text-left' : 
                        cell.align === 'right' ? 'text-right' : 
                        'text-center'
                      } ${cell.className || ''}`}
                    >
                      {renderCellContent(cell.value)}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}

          {/* Dynamic Body Rendering */}
          <tbody className="bg-white text-gray-800">
            {data.rows.map((row, rowIndex) => (
              <tr 
                key={`row-${rowIndex}`} 
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50'} // Striped rows
              >
                {row.map((cell) => {
                  const CellTag = cell.isHeader ? 'th' : 'td';
                  return (
                    <CellTag
                      key={cell.id}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={`border border-gray-200 px-4 py-3 ${
                        cell.isHeader ? 'bg-blue-700 text-white font-semibold' : ''
                      } ${
                        cell.align === 'left' ? 'text-left' : 
                        cell.align === 'right' ? 'text-right' : 
                        'text-center'
                      } ${cell.className || ''}`}
                    >
                      {renderCellContent(cell.value)}
                    </CellTag>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
