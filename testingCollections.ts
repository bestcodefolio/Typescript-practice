import * as Array from './array';
import Stack from './Stack';
import Queue from './Queue';

(function testArray() {
    console.log('Testing Array! : contains of [1, 2, 3, 4, 5]');
    const array = [1, 2, 3, 4, 5];
    console.log(`Index of '2' = ${Array.indexOf(array, 2)}`);
    console.log(`Does array contain '6' - ${Array.contains(array, 6)}`);
    console.log(`Is array equal [1, 2, 5] - ${Array.areEqual(array, [1, 2, 5])}`);
    Array.remove(array, 1);
    console.log(`Array without '1' - ${array}`);
    
    console.log();
})();

(function testQueue() {
    console.log('Testing Queue! : contains of [1, 2, 3]');
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(`Peek element: ${queue.peek()}`);
    console.log(`Size of Queue: ${queue.size()}`);
    console.log(`Does the Queue has '2' - ${queue.contains(2)}`);
    queue.dequeue();
    queue.dequeue();
    console.log(`Does the Queue empty - ${queue.isEmpty()}`);

    console.log();
})();

(function testStack() {
    console.log('Testing Stack! : contains of [1, 2, 3]');
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(`Peek element: ${stack.peek()}`);
    console.log(`Size of Stack: ${stack.size()}`);
    console.log(`Does the Stack has '4' ${stack.contains(4)}`);
    stack.pop();
    stack.pop();
    console.log(`Does the Stack empty - ${stack.isEmpty()}`);
})();