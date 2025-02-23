import { Book } from "@/types/notebook";

type ExportBookOperation = (fileName : string , book : Book) => void;

export const exportBook : ExportBookOperation = (fileName , book) => {
    const mbcData = {
      title: fileName,
      chapters: book.chapters.map(chapter => ({
        title: chapter.title,
        notebook: {
          cells: chapter.notebook.cells.map(cell => ({
            type: cell.type,
            content: cell.content,
            outputs: cell.outputs
          })),
          metadata: chapter.notebook.metadata
        }
      }))
    };
  
    const blob = new Blob([JSON.stringify(mbcData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName.replace(/\s+/g, '_')}.mbc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };