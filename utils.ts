export interface IEqualsFunction<T> {
    (a: T, b: T): boolean;
};

export function defaultEquals<T>(a: T, b: T): boolean {
    // console.log(a, ' ', b, ' ' , a === b);
    return a === b;
}