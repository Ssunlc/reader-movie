function http (url,callback) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "content-type": "application/json"
    },
    success: function (res) {
      callback(res.data)
    },
    fail: function (error) {
      console.log('failed')
    }
  })
}
module.exports={
  http:http
}