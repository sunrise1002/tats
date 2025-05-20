export declare class LinkedList {
    private _head;
    private _tail;
    private _next;
    private _length;
    private _current;
    constructor();
    get head(): any;
    get tail(): any;
    get current(): any;
    get length(): any;
    push(data: any): void;
    pop(): any;
    shift(): any;
    unshift(data: any): void;
    unshiftCurrent(): any;
    removeCurrent(): any;
    resetCursor(): this;
    next(): any;
}
