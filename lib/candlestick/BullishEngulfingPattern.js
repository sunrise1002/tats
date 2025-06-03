import CandlestickFinder from './CandlestickFinder';
export default class BullishEngulfingPattern extends CandlestickFinder {
    constructor() {
        super();
        this.name = 'BullishEngulfingPattern';
        this.requiredCount = 2;
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
        let isBullishEngulfing = (firstdaysClose < firstdaysOpen) &&
            (firstdaysOpen < seconddaysClose) &&
            (!needGap || ((firstdaysOpen > seconddaysOpen) && (firstdaysClose > seconddaysOpen)));
        return (isBullishEngulfing);
    }
}
export function bullishengulfingpattern(data, needGap) {
    return new BullishEngulfingPattern().hasPattern(data, needGap);
}
