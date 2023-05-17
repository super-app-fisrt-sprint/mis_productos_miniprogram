App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info("App onLaunch");
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData: {
    DocumentNumbe: "900999998",
    lineNumber: "3209911758",
    sessionId:
      "U2FsdGVkX197LntRQh0hzaVCbZLWwTyFRVjJHWFko4db4MspXgW+1SU/H5h4HQ0HDHR+fNrc33LRMzEhO+75MmVPKHDmZ1NZIghkJ+9xAhJ1G8PdoCdGn/0UjKT985Er/k8q79VIbWEGsEtxG1AK5VI26RX/qAXd0IrNn87kwtkOI0sh2fBeZMzcC/pgI4zEQemHGaXBwiqD07Wv8uJFWNB68L+Oe0S0Vqz3b8/XapM+y4jqhGJpD1nnLSRD5UDTw6DvjfBnGp/QKPlku/WH4fEaRUWscdQJG3SXoBV06vKUzgFXcnCYUVkodUqfjy5NBF2ruJUOPYNe+LmR50sd3dPNXFYwux3TuZGG/W0DMcFS72FuXxoiYbwEzUTAuOXGDfudfVO+nbQqZM8luemINlRuAxMRKowC60/AHgegyzPxoGrjYEvVQ8Xdp7XD0dVt9vom0f+DWmNJfyzGPb1EWYfW/F8Ok02CgQ8nTag5+xyK8QcIPMj0/KIqXku5NXlmjUrKWSo9l//sOTweqYUiafnamD1OCxYCndyLI982hdcqhd3fazo7NcN9vMPQ3UVE",
    sessionError: "Se te ha agotado el tiempo de sesión"
  }
});
