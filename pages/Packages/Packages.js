Page({
  data: {
    Doc:"NN",
    name:getApp().globalData.nombre,
    nit:getApp().globalData.DocumentNumber,
    numberAccount:getApp().globalData.NumberAccount,
    categoriaList:[]
  },
  onLoad(e) {
    if(getApp().globalData.DocumentType==1){
      this.setData({
        Doc:"CC",
      })
    }else if(getApp().globalData.DocumentType==2){
      this.setData({
        Doc:"Nit",
      })
    }
    const categoriaList=JSON.parse(e.categoria);
    console.log(categoriaList)
    this.setData({
      categoriaList:categoriaList
    })
  },
});
