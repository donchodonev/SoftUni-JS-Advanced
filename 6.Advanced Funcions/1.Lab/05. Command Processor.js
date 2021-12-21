function solution() {
  return {
    internalStr: '',
    append(value) {
      this.internalStr += value;
    },
    removeStart(value) {
      this.internalStr = this.internalStr.slice(value);
    },
    removeEnd(value) {
        this.internalStr = this.internalStr.slice(0, value * -1);
    },
    print() {
      console.log(this.internalStr);
    },
  };
}