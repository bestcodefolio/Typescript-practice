import LinkedList from './LinkedList.js';
import { IEqualsFunction, defaultEquals} from './utils.js';

export default class Queue<T> {
    private list = new LinkedList<T>();
    enqueue(elem: T): boolean {
        return this.list.add(elem);
    }
    peek(): T {
        return this.list.first();
    }
    dequeue(): T {
        const element = this.list.first();
        this.list.remove(element);
        return element;
    }
    size(): number {
        return this.list.size();
    }
    contains(elem: T, equalsFunction: IEqualsFunction<T> = defaultEquals): boolean {
        return this.list.contains(elem, equalsFunction);
    }
    isEmpty(): boolean {
        return this.list.isEmpty();
    }
    clear(): void {
        this.list.clear();
    }
};