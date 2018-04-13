### 澎湃互联-视频类小程序
> 声明：本源码仅限于交流学习，不得商用，违者追求法律责任



<center>
![课后ing](https://cloud-minapp-12742.cloud.ifanrusercontent.com/1f6xcWATyFCQYNVB.jpg)
</center>

#### <center> 已上线，扫码体验</center >

#### 数据结构
数据服务采用云服务器[小程序专业服务器](https://cloud.minapp.com/)
		
### - 课程分类表
		class:{ 			//类型 课程分类
			id:id,			//id 	
			courseClass:'',//string 年级分类
			course:'',	//string 科目
			teacher:'',	//string 老师资料id
			courseData:'', //string 课程介绍
			EnglishBt:'', //string引文标题	
		}
		
### - 用户信息表
	 	user:{				//类型 老师信息
			id:'', 		//id
			name:'',		//string 用户信息
			school:'',	//string  学校
			level:'',		//tring 年级
			identity:'', 	//tring 身份证号码	
			tel:'',		//string 电话号码
			userid:'', 	//用户id
		}	
		
### - 课程信息表
		course:{ 			// 类型 课程信息
			id:'',	       //id ,	
			vidID:'',		//string 视频源
			core:'',		// array  知识点
			courseNode:'', // string 章节标题
			classId:'',    //课程分类id
			li:'',			//课程序号
			zt:'',			//课程状态
		}

### - 老师资料表
		teacher:{			// 类型 老师资料
			id:'',    	//id  
			name:'',		//string 老师名称
			imgTx:'',		//string 老师头像
			data:''		//string老师秒杀内容
		} 
		
### - 用户评论表
		comments:{  		//类型 评论内容
			id:'',			//id
			userID:'',	//string 用户id
			courseID:'', 	//string 课程id
			comments:'', //string 评论内容
			username:'',	//string 用户名称
			userimg:'', 	//string 用户头像 
		}						


### 安装使用
#####- 在自己的知晓云管理后台建好这表，设置好权限，配置好小程序后台
#####- 	设置app.js
	 // 引入 SDK
    require('./utils/sdk-v1.2.1.js')

    // 初始化 SDK
    let clientID = '19977806be291e450778'
    wx.BaaS.init(clientID)
    
    
#####- 	设置全局参数
	//配置全局参数，用户信息
	globalData: {
	    userInfo: {},
	    table:{
	      courseClass: 30665,  //课程分类
	      courseli: 30666,   //课程章节
	      course:30666,  //章节信息
	      comments:30668,   //用户评论
	      user: 31857,   //用户信息
	      teacher: 31991
	     }
	 }    
	    

### 插件使用：
#### hez.js针对知晓云封装好的事件环机制：
例如： 查询数据后，新增数据
		
	// 用户信息查询
    hez.setQueryCompare(this, (res) => {
      let dts = res.data.objects.length
      console.log('sdsds',dts, res.data.objects)
      this.setData({
        djdata: res.data.objects[0]
      })
    }, table.user, 'userid', '=', String(app.globalData.userInfo.id), '用户基本信息')
    
    	
### 更多操作查阅hez.js [api](https://github.com/Hezhong123/hez)	
> 写文档不易，尤其是教学类。这里写的是必要重要的内容。详细的我会录制视频。
> 关注《澎湃互联》微信公众号，关注我，回复视频类小程序教程


### 如果有开发需求的，请联系我。 626815494@qq.com
	
	
	    