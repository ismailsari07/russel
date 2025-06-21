// src/config/fileTypes.tsx

export type FileType = {
  type: string; // unique identifier, e.g. 'document', 'spreadsheet', etc.
  label: string; // display label, e.g. 'Document'
  color: string; // Tailwind color class for hover/border/icon, e.g. 'text-[#8BEDEB]'
  borderColor: string; // Tailwind color class for hover/border/icon, e.g. 'text-[#8BEDEB]'
  icon: string; // FontAwesome icon class, e.g. 'fas fa-file-alt'
  link: string;
};

export const FILE_TYPES: FileType[] = [
  {
    type: 'document',
    label: 'Document',
    color: '[#8BEDEB]',
    borderColor: '[#8BEDEB]',
    icon: 'fas fa-file-alt',
    link: "https://myoffice.infogito.com/doc/"
  },
  {
    type: 'spreadsheet',
    label: 'Spreadsheet',
    color: 'green-400',
    borderColor: 'green-500',
    icon: 'fas fa-table',
    link: "https://myoffice.infogito.com/sheet/"
  },
  {
    type: 'presentation',
    label: 'Presentation',
    color: 'purple-400',
    borderColor: 'purple-500',
    icon: 'fas fa-chart-pie',
    link: "https://myoffice.infogito.com/presentation/"
  },
  {
    type: 'whiteboard',
    label: 'Whiteboard',
    color: 'yellow-400',
    borderColor: 'yellow-500',
    icon: 'fas fa-sticky-note',
    link: "https://myoffice.infogito.com/pad/"
  },
  {
    type: 'form',
    label: 'Form',
    color: 'pink-400',
    borderColor: 'pink-500',
    icon: 'fas fa-clipboard-list',
    link: "https://myoffice.infogito.com/form/"
  },
  {
    type: 'upload',
    label: 'Upload',
    color: 'indigo-400',
    borderColor: 'indigo-500',
    icon: 'fas fa-upload',
    link: "#"
  },
];
