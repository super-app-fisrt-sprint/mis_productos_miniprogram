const { TextEncoder } = require('text-encoding');
Page({
  data: { url: "" },
  onLoad() {

    class FormularioModel {
      constructor() {
        this.data = {
          numeroCuenta: '',
          tipoCanalID: '',
          nombreUsuario: '',
          nombre: ''
        };
        this.url = '';
      }
    }

    const urlBase = getApp().globalData.urlActivate;
    const numeroCuenta = getApp().globalData.NumberAccount;
    const tipoCanalID = getApp().globalData.tipoCanalID;
    const nombreUsuario = getApp().globalData.UserProfileID;
    const nombre = getApp().globalData.nombre;
    const enlacePortalVoz = `${urlBase}?numeroCuenta=${numeroCuenta}&tipoCanalID=${tipoCanalID}&nombreUsuario=${nombreUsuario}&nombre=${nombre}`;
    var url = enlacePortalVoz.replace(/\s/g, "");
    var formulario = new FormularioModel();
    formulario.data.numeroCuenta = numeroCuenta;
    formulario.data.tipoCanalID = tipoCanalID;
    formulario.data.nombreUsuario =nombreUsuario;
    formulario.data.nombre = nombreUsuario + " " + "";
    var url = urlBase;
    formulario.url = url;

    // var formularioJSON = JSON.stringify(formulario);
    // console.log("encode before---->",formularioJSON)
    // var encoder = new TextEncoder();
    // var bytes = encoder.encode(formularioJSON);
    // var Base64 = require('js-base64').Base64;
    // var base64_final = Base64.fromUint8Array(bytes);
    // var urlFinal=`file:///android_asset/www/proxy.html?data=${base64_final}`
    // console.log("BASE64---->", urlFinal)
    this.setData({
      url:url
    })
  }
});
