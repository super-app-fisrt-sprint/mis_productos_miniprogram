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
    //datos que se deberian recibir de manera externa por un miniprogram 
    const jsonString =e.data;
    const DeviceString =e.device;

    //charge info login User in storage
    DeviceSpectViewModel.CreateInfoDeviceStorage(DeviceString)
    dataLoginViewModel.CreateDataLoginInfoStorage(jsonString);
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
