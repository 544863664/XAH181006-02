//封装一个HTTP请求
const sxios = function (url, data = {}, type = 'get') {
    const p = new Promise(function (resolve, reject) {
        $.ajax({
            type,
            url,
            data,
            success(res) {
                resolve({status: 1,data: res});
            },
            error(res) {
                reject({status: 0,data: res});
            }
        });
    });
    return p;
};
