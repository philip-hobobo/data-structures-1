// Queue
"use strict";

// Queue with an Array

// const Queue = function (size) {
//   this.tail = 0;
//   this.q = new Array(size);

//   this.enqueue = function (value) {
//     if (this.q.length === this.tail - 1) {
//       throw new Error("Exceeded length of queue");
//     }
//     this.q[this.tail] = value;
//     this.tail++;
//   };

//   this.dequeue = function () {
//     if (this.q[this.tail - 1] === undefined) {
//       throw new Error("Queue deletion exceeded");
//     }
//     const result = this.q[this.tail - 1];
//     this.q[this.tail] = undefined;
//     this.tail--;
//     return result;
//   };

//   this.peek = function () {
//     return this.q[this.tail - 1];
//   };

//   this.size = function () {
//     return this.tail;
//   };
// };

// const q = new Queue(3);

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// console.log(q.peek());

// console.log(q.dequeue());

// console.log(q.peek());

// console.log(q.size());

// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());

// Queue with a Linked List

const Queue = function () {
  this.tail = null;
  this.ll = new LinkedList();
  this.enqueue = function (data) {
    this.ll.insert(data);
    this.tail = this.ll.head.next;
  };
  this.dequeue = function () {
    const removed = this.ll.head.data;
    this.ll.head = this.ll.head.next;
    return removed;
  };
};

const LinkedList = function () {
  this.head = null;
  this.insert = function (data) {
    this.newNode = new Node(data);

    // if linked list is empty
    if (this.head === null) {
      this.head = this.newNode;
      return;
    }

    // if linked list is full
    this.newNode.next = this.head;
    this.head = this.newNode;
  };

  this.print = function () {
    for (let curr = this.head; curr !== null; curr = curr.next) {
      console.log(curr.data, ",");
    }
  };
};

const Node = function (data) {
  this.next = null;
  this.data = data;
};
