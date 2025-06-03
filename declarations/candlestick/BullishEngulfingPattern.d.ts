import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class BullishEngulfingPattern extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function bullishengulfingpattern(data: StockData, needGap?: boolean): any;
