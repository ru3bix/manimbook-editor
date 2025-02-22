import { Chapter } from '@/types/notebook';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function generateRandom4DigitNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}

export const cleanErrorOutput = (output: string) => {
  // Remove ANSI escape codes (e.g., colors and formatting)
  const cleanedOutput = output.replace(
    /\x1b\[[0-9;]*m|\[[0-9;]*m/g,
    ""
  );
  return cleanedOutput;
};

/**
 * Verify's the MCB file format
 * @param chapters List of Chapters[]
 * @returns true if file is valid else false
 */
export const verifyMBCFile = (chapters : Chapter[]) => {
  const names : string[] = [];
  for(const chapter of chapters){
    if(names.includes(chapter.title)){
      return false;
    }
    names.push(chapter.title);
  }

  return true;
};