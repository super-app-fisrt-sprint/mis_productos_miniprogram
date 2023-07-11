Page({
  data: {
    title: 'Adquirir Productos',
    stateWeb: false,
    number: '6017435558',
    url: "https://www2.claro.com.co/negocios/app/solicitudes/solicitud-producto-generico-nv/?promo=nclaroapp"
  },
  onLoad() {
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight
    });
  },
  onMakePhoneCall(e){
    my.makePhoneCall({ number: this.data.number });
  },
  onWebView(e){
    this.setData({
      stateWeb: true
    });
  }
});
