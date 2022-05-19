var fn = function sum() {
  console.log(1);
  console.log(sum); //f 函数本身  匿名函数起的名字只能在函数里面使用
};
fn(); // 1
sum();

