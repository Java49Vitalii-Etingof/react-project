import { getRandomMatrix } from "../utils/random";
function fromAlive(nLives: number): number {
    return +(nLives === 2 || nLives === 3);
}
function fromDead(nLives: number): number {
    return +(nLives === 3);
}

function topBottomNeighbors(numbers: number[][], i: number, j: number): number {
    return numbers[i] ? +!!numbers[i][j-1]+ +!![i][j+1] + numbers[i][j] : 0;
}

function getNextCellValue(numbers: number[][], i: number, j: number): number{
    const nNeighbourLives: number = +!!numbers[i][j-1] + +!!numbers[i][j+1] +
    topBottomNeighbors(numbers, i-1, j) + topBottomNeighbors(numbers, i+1, j);
    return numbers[i][j] ? fromAlive(nNeighbourLives) : fromDead(nNeighbourLives);
}
export class LifeMatrix {
    constructor(private _numbers: number[][]) {}
    get numbers() {
        return this._numbers;
    }
    nextStep(): number[][] {
        const nextMatrix = this._numbers.map((row, i) => row.map((cel, j) => getNextCellValue(this._numbers, i,j)));
        this._numbers = nextMatrix;
             return this._numbers;
    }
}