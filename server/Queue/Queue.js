

export function Queue() {
    let array = [];
    this.enQueue = (element) => {
        array.push(element);
    };
    this.deQueue = () => {
        return array.shift();
    };
    this.front = () => {
        return array[0];
    };
    this.isEmpty = () => {
        return array.length;
    };
    this.print = () => {
        console.log(array.toString());
    }
}