class MaxHeap {
  constructor() {
    this.value = [];
  }

  swap(fIndex, sIndex) {
    let temp = this.value[fIndex];
    this.value[fIndex] = this.value[sIndex];
    this.value[sIndex] = temp;
  }

  insert(value) {
    this.value.push(value);
    let childIndex = this.value.length - 1;

    while (true) {
      let parentIndex = Math.floor((childIndex - 1) / 2);

      if (parentIndex < 0 || this.value[parentIndex] > this.value[childIndex])
        break;

      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
    }
  }

  remove() {
    this.value[0] = this.value.pop();
    let newRootIndex = 0;

    while (true) {
      let leftChildIndex = 2 * newRootIndex + 1;
      let rightChildIndex = 2 * newRootIndex + 2;

      if (!this.value[leftChildIndex] || !this.value[rightChildIndex]) return;

      if (
        this.value[newRootIndex] > this.value[leftChildIndex] &&
        this.value[newRootIndex] > this.value[rightChildIndex]
      )
        return;

      if (this.value[newRootIndex] < this.value[leftChildIndex]) {
        this.swap(newRootIndex, leftChildIndex);
        newRootIndex = leftChildIndex;
      } else {
        this.swap(newRootIndex, rightChildIndex);
        newRootIndex = rightChildIndex;
      }
    }
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
maxHeap.insert(100);

console.log(maxHeap.value);

maxHeap.remove();

console.log(maxHeap.value);
