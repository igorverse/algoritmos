export class Deque {
  constructor() {
    this._count = 0
    this._lowestCount = 0
    this._items = {}
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this._lowestCount > 0) {
      this._lowestCount--
      this._items[this._lowestCount] = element
    } else {
      for (let i = this._count - 1; i > 0; i--) {
        this._items[i] = this._items[i - 1]
      }
    }

    this._count++
    this._lowestCount = 0
    this._items[0] = element
  }

  addBack(element) {
    this._items[this._count] = element
    this._count++
  }

  removeFront() {
    if (this.isEmpty()) return undefined

    const removedElement = this._items[this._lowestCount]
    delete this._items[this._lowestCount]

    this._lowestCount++

    return removedElement
  }

  removeBack() {
    if (this.isEmpty()) return undefined
    
    this._count--

    const removedElement = this._items[this._count]
    delete this._items[this._count]

    return removedElement
  }

  peekFront() {
    if (this.isEmpty()) return undefined

    return this._items[this._lowestCount]
  }

  peekBack() {
    if (this.isEmpty()) return undefined

    return this._items[this._count - 1]
  }

  size() {
    return this._count - this._lowestCount
  }

  isEmpty() {
    return this.size() === 0
  }
}