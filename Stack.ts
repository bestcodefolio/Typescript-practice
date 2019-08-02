import LinkedList from './LinkedList.js';
import { IEqualsFunction, defaultEquals} from './utils.js';

export default class Stack<T> {
    private list = new LinkedList<T>();
    push(elem: T): void {
        this.list.add(elem, 0);
    };
    
    pop(): T { 
        const element = this.list.first();
        this.list.remove(element);
        return element;
    };
    
    contains(elem: T, equalsFunction: IEqualsFunction<T> = defaultEquals): boolean {
        return this.list.contains(elem, equalsFunction);
    };
    clear(): void {
        this.list.clear();
    };
    peek(): T {
        return this.list.first();
    };
    
    size(): number {
        return this.list.size();
    };
    
    isEmpty(): boolean {
        return this.list.isEmpty();
    };
};