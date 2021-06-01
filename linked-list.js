const LinkedList = function () {
  this.head = null;
  this.insert = function (data) {
    const newNode = new Node(data);
    // If LinkedList is empty
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    // If LinkedList is full
    newNode.next = this.head;
    this.head = newNode;
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
const ll = new LinkedList();
ll.insert(3);
ll.insert(4);
ll.insert(7);
ll.insert(5);
ll.insert(8);
ll.print();
