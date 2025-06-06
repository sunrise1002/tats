import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';

export default class MorningStar extends CandlestickFinder {
    constructor() {
        super();
        this.name = 'MorningStar';
        this.requiredCount  = 3;
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
        let thirddaysOpen   = data.open[2];
        let thirddaysClose  = data.close[2];
        let thirddaysHigh   = data.high[2];
        let thirddaysLow    = data.low[2];
         
        let firstdaysMidpoint = ((firstdaysOpen+firstdaysClose)/2);

        let isFirstBearish    = firstdaysClose < firstdaysOpen &&
          (firstdaysOpen - firstdaysClose > 3 * Math.abs(seconddaysOpen - seconddaysClose));

        let isThirdBullish    = (thirddaysClose > thirddaysOpen) &&
          (thirddaysClose - thirddaysOpen > 3 * Math.abs(seconddaysOpen - seconddaysClose)) &&
          (thirddaysClose > seconddaysOpen) &&
          (thirddaysClose > seconddaysClose);

        let gapExists         = ((seconddaysHigh < firstdaysLow) && 
                                (seconddaysLow < firstdaysLow) && 
                                (thirddaysOpen > seconddaysHigh) && 
                                (seconddaysClose < thirddaysOpen));

      let doesCloseAboveFirstMidpoint = thirddaysClose > firstdaysMidpoint;

      return isFirstBearish &&
        isThirdBullish &&
        doesCloseAboveFirstMidpoint &&
        (!needGap || gapExists);
     }
}

export function morningstar(data:StockData, needGap?: boolean) {
  return new MorningStar().hasPattern(data, needGap);
}