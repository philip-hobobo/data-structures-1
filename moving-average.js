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

// Moving average with circular queue

const MovingAverage = function (size) {
  this.totalCount = 0;
  this.avg = 0;
  this.q = new CircularQueue(size);

  this.next = function (val) {
    const isEnqueued = this.q.enqueue(val);
    if (!isEnqueued) {
      const removedValue = this.q.front();
      this.q.dequeue();
      this.avg =
        (this.avg * this.totalCount - removedValue + val) / this.totalCount;
      this.q.enqueue(val);
    } else {
      this.avg = (this.avg * this.totalCount + val) / (this.totalCount + 1);
      this.totalCount++;
    }
    return this.avg;
  };
};

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // return 1.0 = 1 / 1
console.log(movingAverage.next(10)); // return 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // return 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5));
