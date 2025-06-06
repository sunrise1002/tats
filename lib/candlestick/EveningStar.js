import CandlestickFinder from './CandlestickFinder';
export default class EveningStar extends CandlestickFinder {
    constructor() {
        super();
        this.name = 'EveningStar';
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
        let firstdaysMidpoint = ((firstdaysOpen + firstdaysClose) / 2);
        let isFirstBullish = firstdaysClose > firstdaysOpen &&
            (firstdaysOpen - firstdaysClose > 3 * Math.abs(seconddaysOpen - seconddaysClose));
        let isThirdBearish = thirddaysOpen > thirddaysClose &&
            (thirddaysOpen - thirddaysClose > 3 * Math.abs(seconddaysOpen - seconddaysClose)) &&
            (thirddaysOpen < seconddaysOpen) &&
            (thirddaysOpen < seconddaysClose);
        let gapExists = ((seconddaysHigh > firstdaysHigh) &&
            (seconddaysLow > firstdaysHigh) &&
            (thirddaysOpen < seconddaysLow) &&
            (seconddaysClose > thirddaysOpen));
        let doesCloseBelowFirstMidpoint = thirddaysClose < firstdaysMidpoint;
        return isFirstBullish &&
            gapExists &&
            isThirdBearish &&
            doesCloseBelowFirstMidpoint &&
            (!needGap || gapExists);
    }
}
export function eveningstar(data, needGap) {
    return new EveningStar().hasPattern(data, needGap);
}
