const CircularQueue = function (size) {
  this.q = new Array(size);
  this.head = -1;
  this.tail = -1;
  this.size = size;

  this.isEmpty = function () {
    return this.head === -1 && this.tail === -1;
  };

  this.isFull = function () {
    return (this.tail + 1) % size === this.head;
  };

  this.rear = function () {
    if (this.isEmpty()) {
      return -1;
    }

    return this.q[this.tail];
  };

  this.front = function () {
    if (this.isEmpty()) {
      return -1;
    }
    return this.q[this.head];
  };

  this.enqueue = function (data) {
    if (this.isFull()) {
      return false;
    }

    if (this.head === -1) {
      this.head++;
    }

    this.tail = (this.tail + 1) % this.size;
    this.q[this.tail] = data;
    return true;
  };

  this.dequeue = function () {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
      return true;
    }

    const removed = this.q[this.head];
    this.head = (this.head + 1) % this.size;
    return true, removed;
  };
};
