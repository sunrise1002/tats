import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class EveningStar extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function eveningstar(data: StockData, needGap?: boolean): any;
