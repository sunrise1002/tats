import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';

export default class BullishHaramiCross extends CandlestickFinder {
    constructor() {
        super();
        this.requiredCount  = 2;
        this.name = 'BullishHaramiCross';
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

		let isBullishHaramiPattern = (firstdaysOpen > seconddaysOpen) &&
        (firstdaysClose < seconddaysClose) &&
        (firstdaysOpen > seconddaysHigh) &&
        (firstdaysLow  < seconddaysLow) &&
        (!needGap || (firstdaysClose < seconddaysOpen)); 

        let isSecondDayDoji  = this.approximateEqual(seconddaysOpen, seconddaysClose); 
        
        const isBullishHaramiCrossPattern = isBullishHaramiPattern && isSecondDayDoji;
   
        return (isBullishHaramiCrossPattern && isSecondDayDoji);
        
   }
}

export function bullishharamicross(data:StockData, needGap?: boolean) {
  return new BullishHaramiCross().hasPattern(data, needGap);
}
