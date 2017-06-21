module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.number()}
o) 平均值 = ${sequence.averange()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input = input;
    var i = 0,
    len = input.length,
    j,t;
    for(; i<len; i++) {
     for(j = 0; j<len; j++) {
       if(input[i]<input[j]) {
         t = input[j];
         input[j] = input[i];
         input[i] = t;
       }
     } 
    }
  }

  minimum() {
    // Write your code here
    constructor()
    return this.input[0];
  }

  // Write your code here
  maxmum() {
    constructor()
    return this.input[this.input.length-1];
  }
  number() {
    constructor()
    return this.input.length;
  }
  averange() {
    constructor()
    var count = 0,
    ave = 0;
    for(var n = 0; n<this.input.length; n++){
      count+=this.input[n];
    }
    ave = count/this.input.length;
    return ave.toFixed(2);
  }

}
