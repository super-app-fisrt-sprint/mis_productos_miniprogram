import { requestApiconsultaSerClienteNew } from "/services/consultaSerClienteNew";
Page({
  data: {
    showLoading: false,
    name:getApp().globalData.nombre,
    nit:getApp().globalData.DocumentNumber,
    numberAccount:getApp().globalData.NumberAccount,
    modalVisible:false,
    categoria3:[],
    isPhonePlan:false,
    isInternetPlan:false,
    isTvPlan:false,
    DescripctionPlanInternet: "0 MB",
    DescripctionPlanPhone: "Telefonia",
    "msgEmptytelefonia":"Actualmente no cuentas con este servicio",
    "msgEmptyTv":"Actualmente no cuentas con este servicio",
    DescripctionPlantv: [],
    urlApiconsultaSerClienteNew:
      "https://apiselfservice.co/api/index.php/v1/soap/consultaSerClienteNew.json"
  },
  onLoad() {
    this.showLoading();
    requestApiconsultaSerClienteNew(this.data.urlApiconsultaSerClienteNew, this)
      .then(res => {
        console.log("succes--->", res.data.response);
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
        const categoria2primerValor = servicioActual.find(item => item.categoria === "2");
        const primerosValoresCategoria3 = categoria3.slice(0, 2).map(item => item.descripcion);
        const primerValorCategoria2 = categoria2primerValor ? categoria2primerValor.descripcion : null;

        console.log("Primeros valores de la categoría 3:", primerosValoresCategoria3);
        this.setData({
          isTvPlan:true,
          DescripctionPlantv:primerosValoresCategoria3,
          categoria3:categoria3
        })
        // Imprimir el primer valor de la categoría 2 en la consola
        console.log("Primer valor de la categoría 2:", primerValorCategoria2);
        this.setData({
          DescripctionPlanInternet:primerValorCategoria2
        })
        this.setData({
          isPhonePlan:true,
          DescripctionPlanPhone:categoria1[0].descripcion
        })
        this.hideLoading();
      })
      .catch(error => {
        this.hideLoading();
        console.log(error);
        my.hideLoading({
          page: this
        });
        my.alert({
          content: error,
          buttonText: "Cerrar"
        });
      });
  },
  redirectPaquetesContratados(){
    my.navigateTo({
      url: "/pages/Packages/Packages?categoria=" + JSON.stringify(this.data.categoria3)
    });
  },
  handleClose() {
    this.setData({
      modalVisible: false,
      modalVisiblePhoneActivate:false,
      modalVisiblePhonePlayStore:false
    });
  },
  
  onCancelButtonTap() {
    console.log("Cancelar");
    this.setData({
      modalVisible: false,
      modalVisiblePhoneActivate:false ,
      modalVisiblePhonePlayStore:false
    });
  },

  onAcceptButtonTap() {
    console.log("Aceptar");
    my.navigateTo({
      url: "/pages/addProduct/addProduct"
    });
  },
  onAcceptButtonTapPhoneActivate(){
    my.navigateTo({
      url: "/pages/MyProducts/ActivatePhone/ActivatePhone?data=" + JSON.stringify(this.data.categoria3)
    });
  },
  onAcceptButtonTapPhonePlayStore(){
    my.navigateTo({
      url: "/pages/MyProducts/redirect/redirect"
    });
  },
  ActiveModal(){
    this.setData({
      modalVisible: true
    });
  },
  onNavigate(){
    this.setData({
      modalVisiblePhonePlayStore:true
    });
  },
  onNavigateactivatePhone(){
    this.setData({
      modalVisiblePhoneActivate:true
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
});
