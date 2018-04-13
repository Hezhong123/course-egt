// pages/temp/getuse.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: { // 属性名
      type: Array,
      value: '', 
      observer: function (newVal, oldVal) { } 
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    bh: 23232
  },

  attached: function () {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    formSubmit:function(e){
      console.log('from', e.detail.value)
      this.triggerEvent('myevent', e.detail.value)
    }
  }
})
