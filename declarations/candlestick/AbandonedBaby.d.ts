import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class AbandonedBaby extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function abandonedbaby(data: StockData, needGap?: boolean): any;
