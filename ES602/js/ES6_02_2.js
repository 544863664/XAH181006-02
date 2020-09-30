//查找数组中第一个符合规则的元素
const arr = ['hello', true, 100, false, 0, 'world'];
 const r1 = arr.find(function (item) {
    //数组中的每一个元素
    if (typeof item == 'number') return item;
});
 console.log(r1);

 let tempArr = [];
 arr.find(function () {
     //
 });
 arr.find(function (item, i) {
     console.log(item, i);
 });
 arr.find(function (item, i, temp) {
     console.log(temp); //数组本身
 });




 Array.prototype.myFind = function (callback) {
     //循环this：每一个元素，循环下标，数组本身
     //调用callback，将item，i，temp传到callback中
     for (let i = 0; i < this.length; i++) {
         callback(this[i],i,this);
     }
 };
arr.myFind(function (item) {
    console.log(item);
});
