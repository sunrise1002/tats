import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class ThreeWhiteSoldiers extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function threewhitesoldiers(data: StockData, needGap?: boolean): any;
