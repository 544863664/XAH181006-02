const pro = new Promise(function (resolve, reject) {
    //异步操作
    setTimeout(function () {
        console.log('异步');
        resolve('ok');
    });
});
pro.then(function (data) {
    console.log(data);
}).catch(function () {
    console.log('请求失败');
}).finally(function () {
    console.log('无论请求成功或者失败都会调用');
});