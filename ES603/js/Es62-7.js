{
    /*
     * ajax请求返回了一个数组,数组中有若干个对象,已知每个对象的键值对都是统一的,
     * 根据对象的键,动态创建表头,将数据正常的展示在页面上
     */

    // 创建一个XMLHttpRequest对象
    const ajax = new XMLHttpRequest();
    //掉偶用ajax对象的一些列函数
    ajax.open('get',"http://jsonplaceholder.typicode.com/posts");
    ajax.send();
    //监听请求状态
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200){
            const  data = ajax.responseText;
            const  res = JSON.parse(data);
            const keyArr = Object.keys(res[0]);
            let th;
            for(let i in keyArr){
                th+="<th>"+keyArr[i]+"</th>"
            }
            $('table').append('<tr>'+th+'</tr>>');
            $.each(res,function (i,val) {
                let tr;
                //列遍历
                $.each(val,function (key) {
                    tr+='<td>'+ val[key] + '</td>';
                });

                $('table').append('<tr>'+ tr +'</tr>');
            })
        }
    }
}
//