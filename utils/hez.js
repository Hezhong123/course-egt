// 生而为人，对不起 
// v0.0.1

// 查询数据表
let gets = (ctx, cb, dbid, dbname) => {
  let tableId = getApp().globalData.tableId,
    Books = new wx.BaaS.TableObject(dbid)
  // console.log(dbname,dbname)
  Books.find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

// 新增数据项
let sets = (ctx, cd ,dbid,apple,dbname) =>{
  let tableID = dbid
  let Product = new wx.BaaS.TableObject(tableID)
  let product = Product.create()
  product.set(apple).save()
    .then(res => cd(res, console.log(dbname + '新增', res)))
    .catch(err => console.dir(err))

}

// 更新数据项目 （对象）
let upDatasi = (ctx, cd, dbid, tbid, obj, dbname) => {
  let tableID = dbid
  let recordID = tbid

  let Product = new wx.BaaS.TableObject(tableID)
  let product = Product.getWithoutData(recordID)

  product.set(obj)
  product.update()
    .then(res => cd(res, console.log(dbname + '更新字符', res)))
    .catch(err => console.dir(err))
}

// 更新数据项目 （字符）
let upDatas = (ctx, cd, dbid, tbid, dbkey, dbval, dbname)=>{
  let tableID = dbid
  let recordID = tbid
  
  let Product = new wx.BaaS.TableObject(tableID)
  let product = Product.getWithoutData(recordID)

  product.set(dbkey, dbval)
  product.update()
    .then(res => cd(res, console.log(dbname + '更新字符', res)))
    .catch(err => console.dir(err))
}

// 更新数据项目 （数字）
let upIncrementBy = (ctx, cd, dbid, tbid, dbkey, dbval, dbname) => {
  let tableID = dbid
  let recordID = tbid

  let Product = new wx.BaaS.TableObject(tableID)
  let product = Product.getWithoutData(recordID)

  product.incrementBy(dbkey, dbval)
  product.update()
    .then(res => cd(res, console.log(dbname + '更新num', res)))
    .catch(err => console.dir(err))
}



// 更新数据项目 （添加值到数组末尾）
let upAppend = (ctx, cd, dbid, tbid, dbkey, dbval, dbname) => {
  let tableID = dbid
  let recordID = tbid

  let Product = new wx.BaaS.TableObject(tableID)
  let product = Product.getWithoutData(recordID)

  product.append(dbkey, dbval)
  product.update()
    .then(res => cd(res, console.log(dbname + '数组添加末尾', res)))
    .catch(err => console.dir(err))
}



// 更新数据项目 （不包含在当前数组值添加到末尾）
let upuAppend = (ctx, cd, dbid, tbid, dbkey, dbval, dbname) => {
  let tableID = dbid
  let recordID = tbid

  let Product = new wx.BaaS.TableObject(tableID)
  let product = Product.getWithoutData(recordID)

  product.uAppend(dbkey, dbval)
  product.update()
    .then(res => cd(res, console.log(dbname + '数组去重', res)))
    .catch(err => console.dir(err))
}

// 更新数据项目 （删除数组中制定的值）
let upuRemove = (ctx, cd, dbid, tbid, dbkey, dbval, dbname) => {
  let tableID = dbid
  let recordID = tbid

  let Product = new wx.BaaS.TableObject(tableID)
  let product = Product.getWithoutData(recordID)

  product.remove(dbkey, dbval)
  product.update()
    .then(res => cd(res, console.log(dbname + '删除数组项', res)))
    .catch(err => console.dir(err))
}

// 删除数据项目
let rmDelete = (ctx, cd, dbid, tbid, dbname) => {
  let tableID = dbid
  let recordID = tbid

  let Product = new wx.BaaS.TableObject(tableID)
  Product.delete(recordID)
    .then(res => cd(res, console.log(dbname + '删除项', res)))
    .catch(err => console.dir(err))
}



// 查询数据
let setQuery = (ctx,cd ,dbid,dbname)=>{
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  // query.compare('text', '=', '666')
  Product.setQuery(query).find()
    .then(res => cd(res, console.log(dbname + '查询', res)))
    .catch(err => console.dir(err))
}

//对比查询
let setQueryCompare = (ctx, cd, dbid,dbkey,dboper,dbval,dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.compare(dbkey, dboper, dbval)).find()
    .then(res => cd(res))
    .catch(err => console.dir(err))
}


//字符串查询
let setQueryContains = (ctx, cd, dbid, dbkey, dbval, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.contains(dbkey, dbval)).find()
    .then(res => cd(res, console.log(dbname + '字符查询', res)))
    .catch(err => console.dir(err))
}

//正则查询
let setQueryMatches = (ctx, cd, dbid, dbkey, dbval, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.contains(dbkey, dbval)).find()
    .then(res => cd(res, console.log(dbname + '字符查询', res)))
    .catch(err => console.dir(err))
}

// 数组查询(包含)
let setQueryIn = (ctx, cd, dbid, dbkey, dbArr, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.in(dbkey, dbArr)).find()
    .then(res => cd(res, console.log(dbname + '数组查询in', res)))
    .catch(err => console.dir(err))
}

// 数组查询(不包含)
let setQueryNotIn = (ctx, cd, dbid, dbkey, dbArr, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.notIn(dbkey, dbArr)).find()
    .then(res => cd(res, console.log(dbname + '数组查询no', res)))
    .catch(err => console.dir(err))
}

// 数组查询(不包含)
let setQueryArrContains = (ctx, cd, dbid, dbkey, dbArr, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.arrayContains(dbkey, dbArr)).find()
    .then(res => cd(res, console.log(dbname + '数组查询no', res)))
    .catch(err => console.dir(err))
}

// 数组查询(只包含)
let setQueryArrCompare = (ctx, cd, dbid, dbkey, dbArr, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.compare(dbkey,'=', dbArr)).find()
    .then(res => cd(res, console.log(dbname + '数组查询Nno', res)))
    .catch(err => console.dir(err))
}

// 查询为null的值
let setQueryisNull = (ctx, cd, dbid, dbArr, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.isNull(dbArr)).find()
    .then(res => cd(res, console.log(dbname + '查询null', res)))
    .catch(err => console.dir(err))
}

// 查询不null的值
let setQueryisNotNull = (ctx, cd, dbid, dbArr, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.isNotNull(dbArr)).find()
    .then(res => cd(res, console.log(dbname + '查询Nnnull', res)))
    .catch(err => console.dir(err))
}

// 查询为空的字段
let setQueryExists = (ctx, cd, dbid, dbArr, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.notExists(dbArr)).find()
    .then(res => cd(res, console.log(dbname + '查询为空', res)))
    .catch(err => console.dir(err))
}

// 查询为不为空的字段
let setQuerynotExists = (ctx, cd, dbid, dbArr, dbname) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query.notExists(dbArr)).find()
    .then(res => cd(res, console.log(dbname + '查询不为空', res)))
    .catch(err => console.dir(err))
}

//组合查询and（条件都满足，2条件）
let setQueryAnd = (ctx, cd, dbid, dbname, key1, key2) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var andQuery = wx.BaaS.Query.and(key1, key2)
  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(andQuery).orderBy('-created_at').find()
    .then(res => cd(res))
    .catch(err => console.dir(err))
}

//组合查询or（2条件都满足其中之一，）
let setQueryor = (ctx, cd, dbid, dbname, key1, key2) => {
  let tableID = dbid
  var query = new wx.BaaS.Query()

  var orQuery = wx.BaaS.Query.or(key1, key2)
  var Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(orQuery).find()
    .then(res => cd(res, console.log(dbname + 'or查询', res)))
    .catch(err => console.dir(err))
}


// 数据分页
let limit = (ctx, cd, dbid, limit, offset,key,omp,val,dbname)=>{
  var Product = new wx.BaaS.TableObject(dbid)

  var query = new wx.BaaS.Query()
  query.compare('total_cost', '>', 0)

  Product.setQuery(query).limit(limit).offset(offset).find()
    .then(res => cd(res, console.log(dbname + '分页', res)))
    .catch(err => console.dir(err))

}


// 排序
let created_at = (ctx, cd, dbid,at,key, omp, val,dbname) => {
  var Product = new wx.BaaS.TableObject(dbid)

  var query = new wx.BaaS.Query()
  query.compare(key, omp, val)

  Product.setQuery(query).orderBy(at).find()
    .then(res => cd(res, console.log(dbname + '排序', res)))
    .catch(err => console.dir(err))

}



// 微信支付
let pay = (ctx, cd, pay$, pay) => {
  let params = {}
  params.totalCost = pay$
  params.merchandiseDescription = pay
  wx.BaaS.pay(params)
    .then(res => cd(res, console.log('支付', res)))
    .catch(err => console.dir(err))

}


// 上传文件夹
let upload = (ctx, cd, file, meta ) => {
  let MyFile = new wx.BaaS.File()
  let fileParams = { filePath: file }
  let metaData = { categoryName: meta }

  MyFile.upload(fileParams, metaData)
    .then(res => cd(res, console.log('上传', res)))
    .catch(err => console.dir(err))

}







module.exports = {
  gets,
  sets,
  upDatas,
  upDatasi,
  upIncrementBy,
  upAppend,
  upuAppend,
  upuRemove,
  rmDelete,
  setQuery,
  setQueryCompare,
  setQueryMatches,
  setQueryIn,
  setQueryNotIn,
  setQueryArrContains,
  setQueryArrCompare,
  setQueryisNull,
  setQueryisNotNull,
  setQueryExists,
  setQuerynotExists,
  setQueryAnd,
  setQueryor,
  limit,
  created_at,
  pay,
  upload
}
