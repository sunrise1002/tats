import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class EveningDojiStar extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function eveningdojistar(data: StockData, needGap?: boolean): any;
