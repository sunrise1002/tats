import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class BearishHaramiCross extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function bearishharamicross(data: StockData, needGap?: boolean): any;
