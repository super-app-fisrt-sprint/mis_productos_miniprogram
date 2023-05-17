let requestParameter = getApp();

export function requestValidateAccountDoc(url, that) {
  console.log("linea a vigilar---->", that.data.inputMainService)
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      data: {
        data: {
          "AccountId": that.data.inputMainService,
          "DocumentNumber": ""
        }
      },
      headers: {
        'X-SESSION-ID': requestParameter.globalData.sessionId,
        'X-MC-LINE': requestParameter.globalData.lineNumber,
        'X-MC-LOB': '3',
        'Content-Type': 'application/json; charset=UTF-8',
        'X-MC-MAIL': 'castellanosd162@gmail.com',
        'X-MC-SO': 'android',
        'X-Carrier': 'Claro',
        'X-Wifi': 'false',
        'X-MC-HE-V': '3',
        'X-MC-SO-V': '11',
        'Cache-Control': 'no-cache',
        'X-MC-SO-API': '30',
        'X-MC-SO-PHONE-F': 'Xiaomi',
        'X-MC-SO-PHONE-M': 'M2101K7BL',
        'X-MC-APP-V': '15.0.0',
        'X-MC-DEVICE-NAME': 'XiaomiM2101K7BL',
        'X-MC-DEVICE-ID': 'g3zVgMfE0IaSEYJTBEOpdZU6qTYsqaNKgF196CyumM0GXNkEUPmLFHJ2MYSrIK37BHtmrIv3tMfR/GmTzr7Vm7jGToLW2MCNPFwJfnk4e3z13w+lQrbmuXhcPliR2wO/8Gz/GpDX4LM+88oKohHrNzJ9s1FcF3hYIu8nPNVR698=',
        'X-MC-USER-AGENT': 'eyJpcCI6IjEzMS4xLjE3Mi4xODQiLCJ1c2VyQWdlbnQiOiJNaUNsYXJvQXBwLzAuMC4xIChYaWFvbWk7IE0yMTAxSzdCTDsgXHUwMDNjYW5kcm9pZC8xMVx1MDAzZSkifQ=='
      },
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
}