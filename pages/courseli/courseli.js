// pages/courseli/courseli.js
const app = getApp()
import hez from '../../utils/hez.js'
const table = app.globalData.table 
Page({

  /**
   * 页面的初始数据
   */
  data: {
      urlid:'',
      courseli:"",
      courseul:"",
      teacher:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      urlid: options.id
    })
    wx.showLoading({
      title: '加载中',
    })
    hez.setQueryCompare(this, (res) => {
     
      let ids = res.data.objects["0"].teacher
      console.log('ssss',res,ids)
      // 查询老师
      hez.setQueryCompare(this, (res) => {
        console.log('t', res.data.objects[0])
        this.setData({
          teacher: res.data.objects[0]
        })
      }, table.teacher, 'id', '=', ids, '弹幕')

      this.setData({
        courseli: res.data.objects[0]
      })
      hez.created_at(this, (res) => {
        this.setData({
          courseul: res.data.objects
        })
        wx.hideLoading()
      }, table.courseli, 'li', 'classId', '=', options.id, '课程列表')
    }, table.courseClass, 'id', '=', options.id, '课程信息')  
  },

  // 进入详情页
  oncourse:function(e){
    let obj = e.currentTarget.dataset
    if (obj.obj.zt =='已更新'){
      wx.navigateTo({
        url: '../../pages/course/course?id=' + obj.obj.id
      })
    }else{
      wx.showToast({
        title: '课程还没更新...',
        icon: 'success',
        duration: 2000
      })
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