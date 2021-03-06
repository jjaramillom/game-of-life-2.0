type Color = 'success' | 'danger' | 'warning';

type ColorMap = {
  [key in Color]: { bg: string; text: string };
};

type CellTheme = {
  cell: string;
  filledCell: string;
  border: string;
};
