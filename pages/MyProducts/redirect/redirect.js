Page({
  data: {
    isAndroid:false,
    isIos:false,
  },
  onLoad() {
    let system=getApp().globalData.carrier;
    if(system=="android"){
       this.setData({
         isAndroid:true
       })
    }else{
      this.setData({
        isIos:true
      })
    }
  },
});
