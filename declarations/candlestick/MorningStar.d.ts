import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class MorningStar extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function morningstar(data: StockData, needGap?: boolean): any;
