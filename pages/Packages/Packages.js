Page({
  data: {
    name:getApp().globalData.nombre,
    nit:getApp().globalData.DocumentNumber,
    numberAccount:getApp().globalData.NumberAccount,
    categoriaList:[]
  },
  onLoad(e) {
    const categoriaList=JSON.parse(e.categoria);
    console.log(categoriaList)
    this.setData({
      categoriaList:categoriaList
    })
  },
});
