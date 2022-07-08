import { defaultEquals } from './utils.mjs'
import { Node } from './Node.mjs'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }

  enqueue(element) {
    const node = new Node(element)
    let current
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.count++
  }

  dequeue() {
    const current = this.head
    if (this.head) {
      this.head = current.next
    }
  }
}
