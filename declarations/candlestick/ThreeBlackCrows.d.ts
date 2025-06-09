import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class ThreeBlackCrows extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function threeblackcrows(data: StockData, needGap?: boolean): any;
