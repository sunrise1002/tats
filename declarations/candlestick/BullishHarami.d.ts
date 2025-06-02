import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class BullishHarami extends CandlestickFinder {
    constructor();
    logic(data: StockData, needGap?: boolean): boolean;
}
export declare function bullishharami(data: StockData, needGap?: boolean): any;
