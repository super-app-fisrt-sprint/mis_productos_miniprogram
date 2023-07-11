const userViewModel = require("../../domain/UserServiceViewModel");
const dataLoginViewModel = require("../../domain/DataLoginViewModel");
const DeviceSpectViewModel=require("../../domain/DeviceSpectViewModel")
Page({
  data: {
    Doc: "NN",
    redirectServices: "redirectBackServices",
    descriptionError: "se presentó un error ,intente más tarde.",
    modalVisibleError: false,
    showLoading: false,
  
    modalVisible: false,
    categoria3: [],
    isPhonePlan: false,
    isInternetPlan: false,
    isTvPlan: false,
    DescripctionPlanInternet: "0 MB",
    DescripctionPlanPhone: "Telefonia",
    msgEmptytelefonia: "Actualmente no cuentas con este servicio",
    msgEmptyTv: "Actualmente no cuentas con este servicio",
    DescripctionPlantv: []
  },
  onLoad(e) {
    const jsonString = `{
      "DocumentType": 1,
      "email": "evoluciondecanales@gmail.com",
      "nombre": "Sistema Calle telmex Col",
      "apellido": "",
      "UserProfileID": "evoluciondecanales@gmail.com",
      "DocumentNumber": "56220783",
      "NumberAccount": "56220783",
      "lineNumber": "",
      "sessionId": "U2FsdGVkX1/M2RqDOPvv79ABiYicxpWEV2ZHcpMyIgu8VqqxGENzU66PQb2vbE+YiGJe446unXTqdvfe45IE3w56zH84KcUlranzt6HctUjI2g6YMrIuv2jmPn9VhiEo7ZlbI/ZHekMtXO4OWdYsRvtfuOBY1x0PFqzYbyjm0D3I7csjXWIRxpoehfi8/A5CXjn4fBj/dZ4is8dQtt92hJo+CHOWlc+Ou0193ZeQ882ExRUksytOIxuSPlP93aiOmyYD0xCbD5O+Jfiyi4UDT6EBHSQhBqV3cwVcbBavoQ2xVpL/HB0UuRigwfTpc+H7CMZEaT6U4JrSlkdHhI0hdo7r1vVtTdVCAWlweCWUMwR/SrW26kKP15OtuOLZk8VPkA833AwU3Vo+77LkkNXrOLzBBdgskjY1WqJsDwgKo4ZS3z9MlqbA7v9e2X1uxyE+DD66Vee3vHSrhM8vc/DIms0gLKqDzNaUnBK04/EkGmu7C5yZkKiAiz03xkHRGWUGUnMgQmZ8hz5lFlj9NfpUxyomoiDpqZ05ItoGDEM9T2uNhUQY4G8Y/4HBMH9aB9h8Fugm+hRbx5OxnyuZNDVg3vGA5QhmEIQPB3NQTM4h+bHQfHCfq4F1yCH1liG2kgvaVP6w0zWEsANKuc3ia/qY0xqeKJ/2w3i4KwR30ytZNIGmHEOkJc/gVAt+1tv+ObzxirFJofVTSaZREq8iMbWzlDgiwBIpdBe7c4nwjtigYHrEh+wXTYHDU6Qr4t1BrouoYkJbn/QT2+h7f5/6NXUHBkPlEga4ytRKtoZOGKkWEGhj5COuhFbgEKdFXeUG/bhBNyUZ4eREsp+phhmB8d56wnvJQ+uhC8VVfrqthV7lAzc6BR398jprO+KEKq7+LQuEAYkQHRRoONJQcfp1Hq5KMNCGd2YcBDSCKkrIVooTNus="
      }`;
  
      const DeviceString =
      `{"X-SESSION-ID":"",
      "X-MC-LINE": "",
      "X-MC-LOB": "3",
      "Content-Type": "application/json; charset=UTF-8",
      "X-MC-MAIL": "",
      "X-Carrier": "Claro",
      "X-Wifi": false,
      "X-MC-HE-V": "3",
      "X-MC-SO-V": "11",
      "Cache-Control": "no-cache",
      "X-MC-SO-API": "30",
      "X-MC-SO-PHONE-F": "samsung",
      "X-MC-SO-PHONE-M": "SM-A305G",
      "X-MC-APP-V": "15.0.0",
      "X-MC-DEVICE-NAME": "samsungSM-A305G",
      "X-MC-DEVIDE-ID":
        "S5Efh9SSUVvc/EESWoRMiob0edv+k7f6LyyJ0ZK7y2NvmRLW51X1+ZKr/Er/8nsO7LwD7H/uafrxNb7wKbJXZB+u4eR8kK5VSW68OJh+4xnfvsxZMIJhYdOOkc1AoDkrf52ycn+jyGzu49My8/orw7eJg8yWFyH9EFQicD/1ndg=",
      "X-MC-USER-AGENT":
        "eyJpcCI6IjE5Mi4xNjguMS4xMDEiLCJ1c2VyQWdlbnQiOiJNaUNsYXJvQXBwLzAuMC4xIChYaWFvbWk7IE0yMTAxSzdCTDsgXHUwMDNjYW5kcm9pZC8xMVx1MDAzZSkifQ=="
    }`;
    //datos que se deberian recibir de manera externa por un miniprogram 
    // const jsonString =e.data;
    // const DeviceString =e.device;

    //charge info login User in storage
    DeviceSpectViewModel.CreateInfoDeviceStorage(DeviceString)
    dataLoginViewModel.CreateDataLoginInfoStorage(jsonString);
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight
    });
  },
  onShow(){
    const deviceSpect=DeviceSpectViewModel.GetInfoDeviceStorage();
    const datainfoUser=dataLoginViewModel.GetDataLoginInfoStorage();
    console.log("dara--->",datainfoUser)
    let FirstSecondValueTV = [];
    if (datainfoUser.DocumentType == 1) {
      this.setData({
        Doc: "CC"
      });
    } else if (datainfoUser.DocumentType == 2) {
      this.setData({
        Doc: "Nit"
      });
    }

    this.setData({
      name: datainfoUser.nombre,
      nit: datainfoUser.DocumentNumber,
      numberAccount:datainfoUser.NumberAccount,
    })
    this.showLoading();
    userViewModel
      .ApiconsultaSerClienteNew(datainfoUser,deviceSpect)
      .then(result => {
        console.log("succes iu--->", result);
        if (result.categoriaTelefonia != null) {
          this.setData({
            isPhonePlan: true,
            DescripctionPlanPhone: result.categoriaTelefonia[0].descripcion
          });
        }
        if (result.categoriaInternet != null) {
          this.setData({
            DescripctionPlanInternet: result.categoriaInternet
          });
        }

        if (result.categoriaTelevision != null) {
          if (result.categoriaTelevision.length >= 2) {
            FirstSecondValueTV = result.categoriaTelevision
              .slice(0, 2)
              .map(item => item.descripcion);
          } else {
            FirstSecondValueTV = result.categoriaTelevision.map(
              item => item.descripcion
            );
          }
          this.setData({
            isTvPlan: true,
            DescripctionPlantv: FirstSecondValueTV,
            categoria3: result.categoriaTelevision
          });
        }
        this.hideLoading();
      })
      .catch(error => {
        // Manejar errores aquí
      });
  },
  onUnload(){
    my.clearStorage({
      success() {
        console.log ( ' Clear cache successful' ) ;
      }
    });
  },
  redirectPaquetesContratados() {
    my.navigateTo({
      url:
        "/main/ui/Packages/Packages?categoria=" +
        JSON.stringify(this.data.categoria3)
    });
  },
  handleClose() {
    this.setData({
      modalVisible: false,
      modalVisiblePhoneActivate: false,
      modalVisiblePhonePlayStore: false
    });
  },

  onCancelButtonTap() {
    console.log("Cancelar");
    this.setData({
      modalVisible: false,
      modalVisiblePhoneActivate: false,
      modalVisiblePhonePlayStore: false
    });
  },

  onAcceptButtonTap() {
    console.log("Aceptar");
    my.navigateTo({
      url: "/main/ui/AddProduct/AddProduct"
    });
  },
  onAcceptButtonTapPhoneActivate() {
    my.navigateTo({
      url:
        "/pages/MyProducts/ActivatePhone/ActivatePhone?data=" +
        JSON.stringify(this.data.categoria3)
    });
  },
  onAcceptButtonTapPhonePlayStore() {
    my.navigateTo({
      url: "/main/ui/MyProducts/redirect/redirect"
    });
  },
  ActiveModal() {
    this.setData({
      modalVisible: true
    });
  },
  onNavigate() {
    this.setData({
      modalVisiblePhonePlayStore: true
    });
  },
  onNavigateactivatePhone() {
    this.setData({
      modalVisiblePhoneActivate: true
    });
  },
  showLoading() {
    this.setData({
      showLoading: true
    });
  },
  hideLoading() {
    this.setData({
      showLoading: false
    });
  },
  //cuando se integre arreglar ruta
  redirectBackServices() {
    console.log("clic");
    my.reLaunch({
      url: "/pages/MyProducts/MyProducts"
    });
  }
});
