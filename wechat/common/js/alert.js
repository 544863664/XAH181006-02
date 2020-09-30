function alert (title, icon, callback) {
  wx.showToast({
    title: title || '网络错误',
    icon: icon || 'none',
    success: callback ? callback : ''
  })
}
function modal(title, content, success, fail, complete, showCancel, cancelText, cancelColor, confirmText, confirmColor) {
  wx.showModal({
    title: title || '提示',
    content: content || '是否确定删除这条信息',
    success (res) {
      if (res.confirm) success();
    }
  })
}
module.exports = {
  alert,modal
}