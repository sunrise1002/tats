import CandlestickFinder from './CandlestickFinder';
export default class BearishHaramiCross extends CandlestickFinder {
    constructor() {
        super();
        this.requiredCount = 2;
        this.name = 'BearishHaramiCross';
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
        let isBearishHaramiPattern = (firstdaysOpen < seconddaysOpen) &&
            (firstdaysClose > seconddaysClose) &&
            (firstdaysOpen < seconddaysLow) &&
            (firstdaysHigh > seconddaysHigh) &&
            (!needGap || (firstdaysClose > seconddaysOpen));
        let isSecondDayDoji = this.approximateEqual(seconddaysOpen, seconddaysClose);
        const isBearishHaramiCrossPattern = isBearishHaramiPattern && isSecondDayDoji;
        return (isBearishHaramiCrossPattern && isSecondDayDoji);
    }
}
export function bearishharamicross(data, needGap) {
    return new BearishHaramiCross().hasPattern(data, needGap);
}
