import StockData from '../StockData';
import HangingMan from './HangingMan';

export default class HangingManUnconfirmed extends HangingMan {
    constructor() {
        super();
        this.name = 'HangingManUnconfirmed';
    }

    logic (data:StockData) {
        let isPattern = this.upwardTrend(data, false);
        isPattern = isPattern && this.includesHammer(data, false);
        isPattern = isPattern && this.hammerShouldHasHighestOpenOrClose(data); // Hammer candlestick should has highest open or close price compare to previous candlesticks
        return isPattern;
    }
}

export function hangingmanunconfirmed(data:StockData) {
  return new HangingManUnconfirmed().hasPattern(data);
}
