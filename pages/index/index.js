//index.js
//获取应用实例
const app = getApp()
import hez from '../../utils/hez.js'
const table = app.globalData.table 

Page({
  data: {
    djzt:false,   //信息收集状态
    djdata:'',    // 信息收集存储
    motto: 'Hello World',  
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    courseClass:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    
    // 课程列表查询
    hez.gets(this, (res) => {
      this.setData({
        courseClass: res.data.objects
      })
      wx.hideLoading()
    }, table.courseClass, '表名')

    // 设置标题
    wx.setNavigationBarTitle({
      title: '学习主页'
    })  
  },
  /**
   * 生命周期函数--监听页面初次显示
  */
  onReady: function () {
    // 用户初始数据
    this.setData({
      userInfo: app.globalData.userInfo
    })
    console.log('chushi ', this.data.userInfo)
    // 用户信息查询
    hez.setQueryCompare(this, (res) => {
      let dts = res.data.objects.length
      console.log('sdsds',dts, res.data.objects)
      this.setData({
        djdata: res.data.objects[0]
      })
    }, table.user, 'userid', '=', String(app.globalData.userInfo.id), '用户基本信息')

  },

  // 下拉刷新
  onPullDownRefresh:function(){
    wx.showNavigationBarLoading()
    hez.gets(this, (res) => {
      this.setData({
        courseClass: res.data.objects
      })
      wx.showToast({
        title: '更新完成',
        duration: 2000
      })
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, table.courseClass, '表名')
    // 用户信息查询
    hez.setQueryCompare(this, (res) => {
      let dts = res.data.objects.length
      // console.log('sdsds',dts, res.data.objects)
      if (dts == 0) {
        this.setData({
          djzt: true
        })
      } else {
        this.setData({
          djdata: res.data.objects[0]
        })
      }
    }, table.user, 'userid', '=', String(app.globalData.userInfo.id), '用户基本信息')
  },

  //跳转至课程列表
  oncourseli: function(e){
    let obj = e.currentTarget.dataset
    console.log(obj)
    wx.navigateTo({
      url: '../../pages/courseli/courseli?id=' +obj.obj.id
    })
  },
  
  //修改个人资料 
  onSub:function(e){
    this.setData({
      djzt: true
    })
    // 用户信息查询
    hez.setQueryCompare(this, (res) => {
      let dts = res.data.objects.length
      // console.log('sdsds',dts, res.data.objects)
      if (dts == 0) {
        this.setData({
          djzt: true
        })
      } else {
        this.setData({
          djdata: res.data.objects[0]
        })
      }
    }, table.user, 'userid', '=', String(app.globalData.userInfo.id), '用户基本信息')
  },

  // 提交信息收集按钮
  onMyEvent:function(e){
    const frmObj = e.detail
    // console.log(frmObj)
    wx.showLoading({
      title: '处理中...',
    })
    // 判断是修改还是新增
    hez.setQueryCompare(this, (res) => {
      // console.log('ssss',res.data.objects)
      let dts = res.data.objects.length
      if (dts == 0) {
        // 提交用户数据
        hez.sets(this, (res) => {
          this.setData({
            djzt: false
          })
          wx.hideLoading()
        }, table.user, frmObj, '用户基本信息')
      } else {
        this.setData({
          djdata: res.data.objects[0]
        })
        hez.upDatasi(this, (res) => {
          // console.log('22323',res)
          this.setData({
            djdata: res.data,
            djzt: false
          })
          wx.hideLoading()
        }, table.user, res.data.objects[0].id, frmObj, '更新用户数据') 
      }
    }, table.user, 'userid', '=', String(app.globalData.userInfo.id), '用户基本信息')

   
  }

})
