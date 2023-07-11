const dataLoginViewModel = require("../../domain/DataLoginViewModel");
Page({
  data: {
    categoriaList:[]
  },
  onLoad(e) {
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight
    });
    const datainfoUser=dataLoginViewModel.GetDataLoginInfoStorage();
    if(datainfoUser.DocumentType==1){
      this.setData({
        Doc:"CC",
      })
    }else if(datainfoUser.DocumentType==2){
      this.setData({
        Doc:"Nit",
      })
    }
    this.setData({
      name: datainfoUser.nombre,
      nit: datainfoUser.DocumentNumber,
      numberAccount:datainfoUser.NumberAccount,
    })
    const categoriaList=JSON.parse(e.categoria);
    this.setData({
      categoriaList:categoriaList
    })
  },
});
