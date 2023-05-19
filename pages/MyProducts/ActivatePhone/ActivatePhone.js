Page({
  data: {url:""
  },
  onLoad() {
    const urlBase = getApp().globalData.urlActivate;
    const numeroCuenta = getApp().globalData.NumberAccount; 
    const tipoCanalID = getApp().globalData.tipoCanalID;
    const nombreUsuario =getApp().globalData.email;
    const nombre = getApp().globalData.nombre;
    const enlacePortalVoz = `${urlBase}?numeroCuenta=${numeroCuenta}&tipoCanalID=${tipoCanalID}&nombreUsuario=${nombreUsuario}&nombre=${nombre}`;
    var url = enlacePortalVoz .replace(/\s/g, "");
    console.log("execute Enlace Activar Portal voz---->",url)
    this.setData({
      url:url
    })
  },
});
