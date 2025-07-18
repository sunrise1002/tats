import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class BearishHarami extends CandlestickFinder {
    constructor() {
        super();
        this.requiredCount  = 2;
        this.name = 'BearishHarami';
    }
    logic (data:StockData, needGap?: boolean) {
        let firstdaysOpen   = data.open[0];
        let firstdaysClose  = data.close[0];
        let firstdaysHigh   = data.high[0];
        let firstdaysLow    = data.low[0]
        let seconddaysOpen  = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh  = data.high[1];
        let seconddaysLow   = data.low[1]

		let isBearishHaramiPattern = (firstdaysOpen < seconddaysOpen) &&
            (firstdaysClose > seconddaysClose) &&
            (firstdaysOpen < seconddaysLow) &&
            (firstdaysHigh  > seconddaysHigh) &&
            (!needGap || (firstdaysClose > seconddaysOpen));
   
        return (isBearishHaramiPattern);
        
   }
}

export function bearishharami(data:StockData, needGap?: boolean) {
    return new BearishHarami().hasPattern(data, needGap);
}
