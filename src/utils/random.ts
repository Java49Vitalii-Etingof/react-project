// 5.1
export function getRandomNumber (min: number, max: number, isMinInclusive: boolean=true, isMaxInclusive: boolean=false): number {
    if((min === max) && (isMinInclusive || isMaxInclusive)){
     throw 'min may not be equaled to max';   
    }
    if(min > max) {
        [min, max] = [max, min];
    }
    min = isMinInclusive ? min: min+1;
    max = isMaxInclusive ? max: max-1;
    return min+ Math.round(Math.random() * (max - min));
}
// 5.2
export function getRandomMatrix(rows: number, columns: number, min: number, max: number): number[][] {
  const res: number[][] = new Array<number[]>(rows);
  for (let i = 0; i < rows; i++) {
    res[i] = new Array<number>(columns);
    for (let j = 0; j < columns; j++) {
        res[i][j] =getRandomNumber(min, max);
    }
  }  
  return res;
}
//5.3
export function getRandomArrayElement(array: any[]): any {
    let index:number =  getRandomNumber(0, array.length);
    return array[index];
}
//5.4
const daysInMonth: number[] = [31,28,31,30,31,30,31,31,30,31,30,31]; 
export function getRandomDate(minYear: number, maxYear: number): Date {
const year: number = getRandomNumber(minYear, maxYear);
const minMonth: number = 0, maxMonth: number = 11;
const month: number = getRandomNumber(minMonth, maxMonth);
const minDay: number = 1;
let maxDay: number = (year%4==0 && month==1) ? daysInMonth[month] + 1: daysInMonth[month];
const day: number = getRandomNumber(minDay, maxDay);
return new Date(year, month, day);

}
