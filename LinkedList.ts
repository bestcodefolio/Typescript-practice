import { IEqualsFunction, defaultEquals} from './utils.js';

interface ILinkedListNode<T> {
    element: T;
    next: ILinkedListNode<T>;
};

export default class LinkedList<T> {
    private firstNode: ILinkedListNode<T>;
    private lastNode: ILinkedListNode<T>;
    private numberOfElements: number = 0;
    private isNullOrUndefined(item: T) {
        return typeof (item) === 'undefined' || item === null;
    }
    private createNode(item: T): ILinkedListNode<T> {
        return {
            element: item,
            next: null
        };
    };
    private nodeAtIndex(index: number): ILinkedListNode<T> | null {
        if (index < 0 || index >= this.numberOfElements) {
            return null;
        }
        if (index === (this.numberOfElements - 1)) {
            return this.lastNode;
        }
        for (let i = 0, node = this.firstNode; i < index; i++, node = node.next) {
            if (i === index - 1) {
                return node;
            }
        }
    };
    add(item: T, index?: number): boolean {
        if (typeof (index) !== 'number') {
            index = this.numberOfElements;
        }
        if (index < 0 || index > this.numberOfElements || this.isNullOrUndefined(item)) {
            return false;
        }
        const newNode = this.createNode(item);
        if (this.isEmpty()) {
            this.firstNode = newNode;
            this.lastNode = newNode;
            this.numberOfElements = 1;
            return true;
        } 
        switch(index) {
            case this.numberOfElements:
                this.lastNode.next = newNode;
                this.lastNode = newNode;
                break;
            case 0:
                this.lastNode.next = newNode;
                this.lastNode = newNode;
                break;
            default:
                const prev = this.nodeAtIndex(index - 1);
                if (prev === null) {
                    return false;
                }
                newNode.next = prev.next;
                prev.next = newNode;
        }
        this.numberOfElements++;
        return true;
    };
    first(): T {
        return this.firstNode && this.firstNode.element;
    };
    last(): T {
        return this.lastNode && this.lastNode.element;
    };
    elementAtIndex(index: number): T {
        const node = this.nodeAtIndex(index);
        return node && node.element;
    }
    indexOf(item: T, equalsFunction: IEqualsFunction<T> = defaultEquals): number {
        if (this.isNullOrUndefined(item)) {
            return -1;
        }
        for(let index = 0, currentNode = this.firstNode; currentNode !== null; currentNode = currentNode.next, index++) {
            if (equalsFunction(currentNode.element, item)) {
                return index;
            }
        }
        return -1;
    };
    contains(item: T, equalsFunction: IEqualsFunction<T> = defaultEquals): boolean {
        return (this.indexOf(item, equalsFunction) > -1);
    };
    remove(item: T, equalsFunction: IEqualsFunction<T> = defaultEquals): boolean {
        if (this.numberOfElements < 1 || this.isNullOrUndefined(item)) {
            return false;
        }
        let previous: ILinkedListNode<T> = null;
        let currentNode: ILinkedListNode<T> = this.firstNode;
        while (currentNode !== null) {
            if (equalsFunction(currentNode.element, item)) {
                switch(currentNode) {
                    case this.firstNode:
                        this.firstNode = currentNode.next;
                        if (currentNode === this.lastNode) {
                            this.lastNode = null;
                        }
                        break;
                    case this.lastNode:
                        this.lastNode = previous;
                        previous.next = currentNode.next;
                        currentNode.next = null;
                        break;
                    default:
                        previous.next = currentNode.next;
                        currentNode.next = null;
                }
                this.numberOfElements--;
                return true;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    };
    removeElementAtIndex(index: number): boolean {
        if (index < 0 || index >= this.numberOfElements) {
            return false;
        }
        const element = this.nodeAtIndex(index).element;
        return this.remove(element);
    };
    clear(): void {
        this.firstNode = null;
        this.lastNode = null;
        this.numberOfElements = 0;
    };
    reverse(): void {
        let previous: ILinkedListNode<T>;
        let current: ILinkedListNode<T> = this.firstNode;
        let temp: ILinkedListNode<T>;
        while (current !== null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        temp = this.firstNode;
        this.firstNode = this.lastNode;
        this.lastNode = temp;
    };
    size(): number {
        return this.numberOfElements;
    };
    isEmpty(): boolean {
        return this.numberOfElements === 0;
    };
};