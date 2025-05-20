import CandlestickFinder from './CandlestickFinder';
import Doji from './Doji';
export default class AbandonedBaby extends CandlestickFinder {
    constructor() {
        super();
        this.name = 'AbandonedBaby';
        this.requiredCount = 3;
    }
    logic(data, needGap) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let isFirstBearish = firstdaysClose < firstdaysOpen;
        let dojiExists = new Doji().hasPattern({
            "open": [seconddaysOpen],
            "close": [seconddaysClose],
            "high": [seconddaysHigh],
            "low": [seconddaysLow]
        });
        let gapExists = ((seconddaysHigh < firstdaysLow) &&
            (thirddaysLow > seconddaysHigh));
        let isThirdBullish = (thirddaysHigh < firstdaysOpen) && (thirddaysClose > thirddaysOpen);
        return (isFirstBearish && dojiExists && isThirdBullish && (!needGap || gapExists));
    }
}
export function abandonedbaby(data, needGap) {
    return new AbandonedBaby().hasPattern(data, needGap);
}
