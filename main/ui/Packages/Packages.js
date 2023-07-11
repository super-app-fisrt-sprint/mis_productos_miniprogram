const dataLoginViewModel = require("../../domain/DataLoginViewModel");
Page({
  data: {
    categoriaList:[]
  },
  onLoad(e) {
    my.getSystemInfo({
      success: (res) => {
          console.log(res);
      },
      fail: (err) => {
          console.log(err);
      }
  })
    const datainfoUser=dataLoginViewModel.GetDataLoginInfoStorage();
    console.log("dara--->",datainfoUser)
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
    console.log(categoriaList)
    this.setData({
      categoriaList:categoriaList
    })
  },
});
