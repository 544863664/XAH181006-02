/*
* 旧的语法中怎么处理异步请求：
*   将想要在异步操作成功之后执行成功之后的内容，放到异步操作成功之后
*   的回调中，一次方式，解决异步造成的问题。
* */
//$函数即是工厂方法，有是对象


//从数据库获取轮播图的数量
/*$.ajax({
   type: 'get',
   url: 'http://jsonplaceholder.typicode.com/posts',
    success (res) {
       for (let item of res) {
           const newEle = `<div class="swiper-slide">
                              `+ JSON.stringify(item) +`
                           </div>`;
           $('.swiper-wrapper').append(newEle);
       }
        const s = new Swiper('#swiper', {
            autoplay: true,
        });
    }
});*/


//利用promise解决异步问题
const pro = new Promise(function (resolve, reject) {
    $.ajax({
        type: 'get',
        url: 'http://jsonplaceholder.typicode.com/posts',
        success (res) {
            resolve(res);
        },
        error (res) {
            reject(res);
        }
    });
});

pro.then(function (data) {
    //resolve
    for (let item of data) {
        const newEle = `<div class="swiper-slide">
                              `+ JSON.stringify(item) +`
                           </div>`;
        $('.swiper-wrapper').append(newEle);
    }
    const s = new Swiper('#swiper', {
        autoplay: true,
    });
},function (data) {
    //reject
    console.log(data);
});


