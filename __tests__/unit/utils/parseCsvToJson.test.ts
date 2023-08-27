import { parseCSVToJson } from '../../../src/utils/parseCsvToJson';

describe('parseCsvToJson', () => {
  it('should parse CSV data into an array of OrganOrder objects', () => {
    const csvData = `
      organ,cash,price,bonus_ratio
      liver,10,5,2
      heart,20,3,3
      lung,30,4,4
    `;
    const expectedOrganOrders = [
      { organ: 'liver', cash: 10, price: 5, bonusRatio: 2 },
      { organ: 'heart', cash: 20, price: 3, bonusRatio: 3 },
      { organ: 'lung', cash: 30, price: 4, bonusRatio: 4 },
    ];

    const result = parseCSVToJson(csvData);

    expect(result).toEqual(expectedOrganOrders);
});

});
