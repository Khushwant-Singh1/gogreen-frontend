import { TableData, TableCell } from '@/types/specification';

/**
 * Utility functions for creating and manipulating table specifications
 */

/**
 * Generate a simple grid table structure
 */
export function createSimpleTable(
  headers: string[],
  rows: (string | number | boolean)[][],
  options?: {
    firstColumnAsHeader?: boolean;
    alignment?: 'left' | 'center' | 'right';
  }
): TableData {
  const { firstColumnAsHeader = false, alignment = 'center' } = options || {};

  return {
    headers: [
      headers.map((header, idx) => ({
        id: `h${idx}`,
        value: header,
        align: alignment,
      })),
    ],
    rows: rows.map((row, rowIdx) =>
      row.map((cell, colIdx) => ({
        id: `r${rowIdx}c${colIdx}`,
        value: cell,
        align: alignment,
        isHeader: firstColumnAsHeader && colIdx === 0,
      }))
    ),
  };
}

/**
 * Create a table with merged header cells
 */
export function createTableWithMergedHeaders(
  headerRows: Array<Array<{ value: string; colSpan?: number; rowSpan?: number }>>,
  bodyRows: (string | number | boolean)[][]
): TableData {
  return {
    headers: headerRows.map((row, rowIdx) =>
      row.map((cell, colIdx) => ({
        id: `h${rowIdx}-${colIdx}`,
        value: cell.value,
        colSpan: cell.colSpan || 1,
        rowSpan: cell.rowSpan || 1,
        align: 'center' as const,
      }))
    ),
    rows: bodyRows.map((row, rowIdx) =>
      row.map((cell, colIdx) => ({
        id: `r${rowIdx}c${colIdx}`,
        value: cell,
        align: 'center' as const,
      }))
    ),
  };
}

/**
 * Create a feature comparison table with checkmarks
 */
export function createFeatureTable(
  features: string[],
  variants: string[],
  featureMatrix: boolean[][]
): TableData {
  return {
    headers: [
      [
        { id: 'h0', value: 'Feature', align: 'left' as const },
        ...variants.map((variant, idx) => ({
          id: `h${idx + 1}`,
          value: variant,
          align: 'center' as const,
        })),
      ],
    ],
    rows: features.map((feature, rowIdx) => [
      {
        id: `r${rowIdx}c0`,
        value: feature,
        isHeader: true,
        align: 'left' as const,
      },
      ...featureMatrix[rowIdx].map((hasFeature, colIdx) => ({
        id: `r${rowIdx}c${colIdx + 1}`,
        value: hasFeature,
        align: 'center' as const,
      })),
    ]),
  };
}

/**
 * Create a specification table (key-value pairs)
 */
export function createSpecTable(
  specs: Array<{ label: string; value: string | number; unit?: string }>
): TableData {
  const hasUnits = specs.some((s) => s.unit);

  return {
    headers: hasUnits
      ? [[
          { id: 'h1', value: 'Specification', align: 'left' as const },
          { id: 'h2', value: 'Value', align: 'center' as const },
          { id: 'h3', value: 'Unit', align: 'center' as const },
        ]]
      : [[
          { id: 'h1', value: 'Specification', align: 'left' as const },
          { id: 'h2', value: 'Value', align: 'center' as const },
        ]],
    rows: specs.map((spec, idx) => {
      const row: TableCell[] = [
        {
          id: `r${idx}c1`,
          value: spec.label,
          isHeader: true,
          align: 'left' as const,
        },
        {
          id: `r${idx}c2`,
          value: spec.value,
          align: 'center' as const,
        },
      ];

      if (hasUnits) {
        row.push({
          id: `r${idx}c3`,
          value: spec.unit || '-',
          align: 'center' as const,
        });
      }

      return row;
    }),
  };
}

/**
 * Validate table structure
 */
export function validateTableStructure(data: TableData): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check if headers and rows exist
  if (!data.headers || data.headers.length === 0) {
    errors.push('Table must have at least one header row');
  }

  if (!data.rows || data.rows.length === 0) {
    errors.push('Table must have at least one body row');
  }

  // Check for consistent column counts
  if (data.headers.length > 0) {
    const headerCols = data.headers[data.headers.length - 1].length;
    data.rows.forEach((row, idx) => {
      if (row.length !== headerCols) {
        errors.push(
          `Row ${idx + 1} has ${row.length} columns, expected ${headerCols}`
        );
      }
    });
  }

  // Check for unique IDs
  const ids = new Set<string>();
  [...data.headers.flat(), ...data.rows.flat()].forEach((cell) => {
    if (ids.has(cell.id)) {
      errors.push(`Duplicate cell ID: ${cell.id}`);
    }
    ids.add(cell.id);
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Convert CSV to table structure
 */
export function csvToTable(
  csv: string,
  options?: {
    hasHeader?: boolean;
    delimiter?: string;
  }
): TableData {
  const { hasHeader = true, delimiter = ',' } = options || {};
  
  const lines = csv.trim().split('\n');
  const rows = lines.map((line) =>
    line.split(delimiter).map((cell) => cell.trim())
  );

  if (hasHeader && rows.length > 0) {
    const headerRow = rows.shift()!;
    return {
      headers: [
        headerRow.map((cell, idx) => ({
          id: `h${idx}`,
          value: cell,
          align: 'center' as const,
        })),
      ],
      rows: rows.map((row, rowIdx) =>
        row.map((cell, colIdx) => ({
          id: `r${rowIdx}c${colIdx}`,
          value: cell,
          align: 'center' as const,
        }))
      ),
    };
  }

  return {
    headers: [
      rows[0].map((_, idx) => ({
        id: `h${idx}`,
        value: `Column ${idx + 1}`,
        align: 'center' as const,
      })),
    ],
    rows: rows.map((row, rowIdx) =>
      row.map((cell, colIdx) => ({
        id: `r${rowIdx}c${colIdx}`,
        value: cell,
        align: 'center' as const,
      }))
    ),
  };
}

/**
 * Convert table to CSV
 */
export function tableToCSV(data: TableData, options?: { delimiter?: string }): string {
  const { delimiter = ',' } = options || {};
  
  const csvRows: string[] = [];

  // Add headers
  data.headers.forEach((headerRow) => {
    csvRows.push(
      headerRow.map((cell) => `"${cell.value}"`).join(delimiter)
    );
  });

  // Add body rows
  data.rows.forEach((row) => {
    csvRows.push(
      row.map((cell) => `"${cell.value}"`).join(delimiter)
    );
  });

  return csvRows.join('\n');
}

/**
 * Clone a table structure with new IDs
 */
export function cloneTable(data: TableData): TableData {
  return {
    headers: data.headers.map((row, rowIdx) =>
      row.map((cell, colIdx) => ({
        ...cell,
        id: `h${rowIdx}-${colIdx}`,
      }))
    ),
    rows: data.rows.map((row, rowIdx) =>
      row.map((cell, colIdx) => ({
        ...cell,
        id: `r${rowIdx}c${colIdx}`,
      }))
    ),
  };
}

// Usage examples for documentation
export const USAGE_EXAMPLES = {
  simple: `
// Create a simple table
const table = createSimpleTable(
  ['Name', 'Value', 'Unit'],
  [
    ['Flow Rate', '2-4', 'LPH'],
    ['Pressure', '1.0-3.0', 'Bar']
  ],
  { firstColumnAsHeader: true, alignment: 'left' }
);
`,

  merged: `
// Create table with merged headers
const table = createTableWithMergedHeaders(
  [
    [
      { value: 'Pressure', rowSpan: 2 },
      { value: 'Spacing Options', colSpan: 3 }
    ],
    [
      { value: '20cm' },
      { value: '30cm' },
      { value: '40cm' }
    ]
  ],
  [
    ['2 LPH', 18, 26, 35],
    ['4 LPH', 13, 20, 26]
  ]
);
`,

  features: `
// Create feature comparison table
const table = createFeatureTable(
  ['UV Resistant', 'Anti-Clog', 'Self-Flushing'],
  ['Basic', 'Pro', 'Premium'],
  [
    [true, true, true],
    [false, true, true],
    [false, false, true]
  ]
);
`,

  specs: `
// Create specifications table
const table = createSpecTable([
  { label: 'Flow Rate', value: '2-4', unit: 'LPH' },
  { label: 'Working Pressure', value: '1.0-3.0', unit: 'Bar' },
  { label: 'Material', value: 'PE (Polyethylene)' }
]);
`,
};
