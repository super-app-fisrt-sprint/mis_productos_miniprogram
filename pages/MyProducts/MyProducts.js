import { requestApiconsultaSerClienteNew } from "/services/consultaSerClienteNew";
Page({
  data: {
    isIos: false,
    system: getApp().globalData.carrier,
    Doc: "NN",
    redirectServices: "redirectBackServices",
    descriptionError: "se presentó un error ,intente más tarde.",
    modalVisibleError: false,
    showLoading: false,
    name: getApp().globalData.nombre,
    nit: getApp().globalData.DocumentNumber,
    numberAccount: getApp().globalData.NumberAccount,
    modalVisible: false,
    categoria3: [],
    isPhonePlan: false,
    isInternetPlan: false,
    isTvPlan: false,
    DescripctionPlanInternet: "0 MB",
    DescripctionPlanPhone: "Telefonia",
    msgEmptytelefonia: "Actualmente no cuentas con este servicio",
    msgEmptyTv: "Actualmente no cuentas con este servicio",
    DescripctionPlantv: [],
    urlApiconsultaSerClienteNew:
      "https://apiselfservice.co/api/index.php/v1/soap/consultaSerClienteNew.json"
  },
  //categoria1 es todo referente a telefonia
  //categoria2 es todo referente a Internet
  //categoria3 es todo referente a Television
  onShow() {
    this.setData({
      isIos: false
    });
  },
  onLoad() {
    if (getApp().globalData.DocumentType == 1) {
      this.setData({
        Doc: "CC"
      });
    } else if (getApp().globalData.DocumentType == 2) {
      this.setData({
        Doc: "Nit"
      });
    }
    this.showLoading();
    requestApiconsultaSerClienteNew(this.data.urlApiconsultaSerClienteNew, this)
      .then(res => {
        console.log("succes--->", res.data);
        if (
          res &&
          res.data &&
          res.data.error == 0 &&
          res.data.response &&
          res.data.response.servicioActual &&
          !res.data.response.mensajeRespuesta.includes("Error") &&
          !res.data.response.mensajeRespuesta.includes("La cuenta No Existe")
        ) {
          console.log("entro");
          const servicioActual = res.data.response.servicioActual;
          const categoria1 = servicioActual.filter(
            item => item.categoria === "1"
          );
          const categoria2 = servicioActual.filter(
            item => item.categoria === "2"
          );
          const categoria3 = servicioActual.filter(
            item => item.categoria === "3"
          );
          if (
            categoria1 &&
            categoria1 !== null &&
            categoria1 !== undefined &&
            categoria1.length > 0
          ) {
            this.setData({
              isPhonePlan: true,
              DescripctionPlanPhone: categoria1[0].descripcion
            });
          }
          if (
            categoria2 &&
            categoria2 !== null &&
            categoria2 !== undefined &&
            categoria2.length > 1
          ) {
            const categoria2primerValor = servicioActual.find(
              item => item.categoria === "2"
            );
            const primerValorCategoria2 = categoria2primerValor
              ? categoria2primerValor.descripcion
              : null;

            this.setData({
              DescripctionPlanInternet: primerValorCategoria2
            });
          }
          if (
            categoria3 &&
            categoria3 !== null &&
            categoria3 !== undefined &&
            categoria3.length > 0
          ) {
            let primerosValoresCategoria3 = [];
            if (categoria3.length >= 2) {
              primerosValoresCategoria3 = categoria3
                .slice(0, 2)
                .map(item => item.descripcion);
            } else {
              primerosValoresCategoria3 = categoria3.map(
                item => item.descripcion
              );
            }
            this.setData({
              isTvPlan: true,
              DescripctionPlantv: primerosValoresCategoria3,
              categoria3: categoria3
            });
          }
        } else {
          this.setData({
            modalVisibleError: true
          });
        }

        this.hideLoading();
      })
      .catch(error => {
        this.hideLoading();
        console.log(error);
        my.hideLoading({
          page: this
        });
        this.setData({
          modalVisibleError: true
        });
        my.alert({
          content: error,
          buttonText: "Cerrar"
        });
      });
  },
  redirectPaquetesContratados() {
    my.navigateTo({
      url:
        "/pages/Packages/Packages?categoria=" +
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
      url: "/pages/addProduct/addProduct"
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
    if (this.data.system == "android") {
      my.navigateTo({
        url: "/pages/MyProducts/redirect/redirect"
      });
    } else {
      this.setData({
        isIos: true
      });
    }
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
