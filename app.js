//app.js
App({
  onLaunch: function () {
    // 引入 SDK
    require('./utils/sdk-v1.2.1.js')

    // 初始化 SDK
    let clientID = '19977806be291e450778'
    wx.BaaS.init(clientID)

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    wx.BaaS.login().then((res) => {
      // 用户允许授权，res 包含用户完整信息，详见下方描述
      console.log('用户信息', res, )
      getApp().globalData.userInfo = res  //传入用户id
    
    }, (res) => {
      // 用户拒绝授权，res 包含基本用户信息：id、openid、unionid
      console.log(res)
      this.globalData.userInfo = res
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              // this.globalData.userI  = res.userInfo
              // this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: {},
    table:{
      courseClass: 30665,  //课程分类
      courseli: 30666,   //课程章节
      course:30666,  //章节信息
      comments:30668,   //用户评论
      user: 31857,   //用户评论
      teacher: 31991
     }
  }
})