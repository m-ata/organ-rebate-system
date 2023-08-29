import { OrganOrder } from '../types/organOrder';

/**
 * Parse CSV data and convert it to an array of OrganOrder objects.
 *
 * @param csvData  CSV data as a string
 * @returns An array of OrganOrder objects parsed from the CSV
 */
export const parseCSVToJson = (csvData: string): OrganOrder[] => {
  const csvLines: string[] = csvData.trim().split('\n');
  csvLines.shift(); // Remove the header line

  return csvLines.map((line: string) => {
    const [organ, cash, price, bonus_ratio] = line.trim().split(',');

    return {
      organ,
      cash: parseInt(cash),
      price: parseInt(price),
      bonusRatio: parseInt(bonus_ratio),
    };
  });
};
