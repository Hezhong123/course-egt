// pages/course/course.js
const app = getApp()
import hez from '../../utils/hez.js'
import time from '../../utils/util.js'
const table = app.globalData.table 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:"",   //课程
    comments:'',  //评论
    timed:"",    //时间组
    plnr:""   //评论内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    // 查看用户信息是否登记
    hez.setQueryCompare(this, (res) => {
      this.setData({
        course: res.data.objects[0]
      })
      wx.hideLoading()
    }, table.course, 'id', '=', options.id, '课程信息')

    // 评论查询
    hez.setQueryCompare(this, (res) => {
      let obj = res.data.objects

      // console.log(obj)
      const tims = []
      for (let i = 0; i < obj.length; i++) {
        let timeds = time.formatTime(obj[i].created_at, 'Y.M.D')
        tims.push(timeds)
      }
      this.setData({
        comments: obj,
        timed: tims
      })


      wx.hideLoading()
    }, table.comments, 'courseID', '=', options.id, '')

    let key1 = new wx.BaaS.Query()
    key1.compare('userID', '=', String(app.globalData.userInfo.id))
    // 条件2
    var key2 = new wx.BaaS.Query()
    key2.compare('courseID', '=', options.id)
    // hez.setQueryAnd(this, (res) => {
    //   let obj = res.data.objects
      
    //   // console.log(obj)
    //   const tims = []
    //   for(let i = 0;i<obj.length;i++){
    //     let timeds = time.formatTime(obj[i].created_at, 'Y.M.D')
    //     tims.push(timeds)
    //   }
    //   this.setData({
    //     comments: obj,
    //     timed: tims
    //   })


    //   wx.hideLoading()
    // }, table.comments, '评论', key1, key2)
  },

  // 获取输入内容
  plnr:function(e){
    this.setData({
      plnr: e.detail.value
    })
  },
  
  // 发送评论内容
  onsublim:function(e){
    if (this.data.plnr == ''){
      wx.showToast({
        title: '什么都没有输入',
        duration: 2000
      })
      console.log(app.globalData)
    }else{
      let appy = {
        courseID: e.currentTarget.dataset.obk,
        userID: String(app.globalData.userInfo.id),
        comments: this.data.plnr,
        username: app.globalData.userInfo.nickName,
        userimg: app.globalData.userInfo.avatarUrl
      }
      console.log(app.globalData.userInfo)
      hez.sets(this, (res) => {
        console.log(res)	//新增数据成功的回调
        this.setData({
          plnr:""
        })
        // 重新加载更新
        let key1 = new wx.BaaS.Query()
        key1.compare('userID', '=', '62513921')
        // 条件2
        var key2 = new wx.BaaS.Query()
        key2.compare('courseID', '=', '5acc2b6ed6fdf178e54d2ba6')
        hez.setQueryAnd(this, (res) => {
          let obj = res.data.objects

          console.log(obj)
          const tims = []
          for (let i = 0; i < obj.length; i++) {
            let timeds = time.formatTime(obj[i].created_at, 'Y.M.D')
            tims.push(timeds)
          }
          this.setData({
            comments: obj,
            timed: tims
          })
          wx.hideLoading()
        }, table.comments, '评论', key1, key2)
      }, table.comments, appy, '评论')
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})