//假数据,包含封装过程中可能用到的所有参数
// var testData = {
//     el: '.lgd-alert-btn', //触发弹框的节点选择器
//     title: '这是一个测试标题', //标题
//     message: '您是否要删除这条信息', //提示内容
//     exitText: '走了', //取消按钮文字
//     okText: '了解', //确定按钮文字
//     titleBg: '#f00', //标题背景颜色
//     titleColor: '#fff', //标题的字体颜色
//     messageBg: '#fff', //提示内容的背景色
//     messageColor: '#333', //提示内容字体颜色
//     exitBg: '#fff', //取消按钮背景色
//     exitColor: '#333', //取消按钮字体颜色
//     okBg: '#f00', //确定按钮背景色
//     okColor: '#fff', //确定字体颜色
//     //点击exit按钮的回掉函数
//     exitClick: function () {
//         console.log('取消按钮的点击事件')；
//     }
//     //点击OK按钮的回调函数
//     okClick: function () {
//         console.log('确定按钮的点击事件')；
//     }
// };
function lgdAlert(obj) {

	//弹框节点
	var newAlert = $('<div class="lgd-wrap"><div class="lgd-title"><span>提示</span><button>×</button></div><div class="lgd-content"><p class="lgd-message">月上柳梢头，人约黄昏后。</p><div class="lgd-btns"><div class="lgd-exit">取消</div><div class="lgd-OK">确定</div></div></div></div>');
	
	function setCss() {
		$('.lgd-bg').css({
			width: '100%',
			height: '100vh',
			background: 'rgba(0, 0, 0, .1)',
			position: 'relative',
			zIndex: '1',
		});
		$('.lgd-title span').html(obj.title);
		$('.lgd-title').css({
			background: obj.titleBg,
			color: obj.titleColor,
		});
		$('.lgd-title button').css({
			background: obj.titleBg,
			color: obj.titleColor,
		})
		$('.lgd-content p').html(obj.message);
        $('.lgd-content').css({
            background: obj.messageBg,
        })
		$('.lgd-content p').css({
            color: obj.messageColor,
		})
		//两个按钮
		$('.lgd-exit').html(obj.exitText);
		$('.lgd-exit').css({
			background: obj.exitBg,
			color: obj.exitColor,
		})
		$('.lgd-OK').html(obj.okText);
		$('.lgd-OK').css({
			background: obj.okBg,
			color: obj.okColor,
		})
	}

	//为弹框中的确定取消按钮绑定点击事件
	function setEvent() {
		$('.lgd-title button').click(function () {
			$('.lgd-wrap').remove();
        });
		//取消按钮
		$('.lgd-exit').click(function () {
            obj.exitFn(); //用户设置回调
			$('.lgd-wrap').remove();
        });
        $('.lgd-OK').click(function () {
            obj.okFn(); //用户设置回调
            $('.lgd-wrap').remove();
        });
	}


	//通过触发用户规定的选择器元素的点击事件，创建alert弹窗
	$(obj.el).click(function() {
		$('.lgd-bg').append(newAlert);
		//将弹框添加到body标签后，跟据用户传递的其他样式设置信息做样式改变
		setCss();
        setEvent();
	})
	

}