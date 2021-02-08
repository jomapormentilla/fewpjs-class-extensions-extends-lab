// Your code here

class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((acc, cur) => {return acc + cur}, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if (this.array[0] + this.array[1] < this.array[2] || this.array[0] + this.array[2] < this.array[1] || this.array[1] + this.array[2] < this.array[0]) {
                return false
            } else {
                return true
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            return this.perimeter === this.array[0] * 4 ? true : false
        }
    }

    get area() {
        return this.array[0] ** 2
    }
}