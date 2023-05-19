Page({
  data: {url:""
  },
  onLoad() {
    const urlBase = getApp().globalData.urlActivate;
    const numeroCuenta = getApp().globalData.NumberAccount; 
    const tipoCanalID = getApp().globalData.tipoCanalID;
    const nombreUsuario =getApp().globalData.email;
    const nombre = getApp().globalData.name;
    const enlacePortalVoz = `${urlBase}?numeroCuenta=${numeroCuenta}&tipoCanalID=${tipoCanalID}&nombreUsuario=${nombreUsuario}&nombre=${nombre}`;
    this.setData({
      url:enlacePortalVoz
    })
  },
});
