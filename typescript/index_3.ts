function add(x:number,y:number) {
    return x + y;
}
console.log(add(2,5));

/*
function preson(name:string,age?:number):void {
    console.log('姓名:'+name,'年龄:'+age);
}
console.log(preson('tom',18));*/

//默认参数   默认参数一般在参数列表的最后
function preson(name:string,age:number=20):void {
    console.log('姓名:'+name,'年龄:'+age);
}
console.log(preson('tom',));


//剩余参数   参数数量不确定且由于代码限制使用arguments非常不方便，如果希望将这些不确定的参数列表作为数组处理
function fn(a:number,...result:number[]) {
    let sum = a;
    for (let i = 0; i< result.length; i++) {
        sum+=result[i];
    }
    return sum;
}
console.log(fn(1,1,2,3,4,5,6,7));

//重载    当有两个或两个以上的同名函数，当传入的参数类型不一样时
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
