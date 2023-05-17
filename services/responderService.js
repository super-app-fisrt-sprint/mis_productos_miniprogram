let requestParameter  = getApp();

export function requestApiResponder(url, that){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      data: {
        "AccountId": that.data.preguntas,
        "telefono": that.data.lineNumber
      },
      headers: {
        'accept-encoding' : 'gzip',
        'cache-control':'no-cache',
        'connection':'Keep-Alive',
        'content-length':'86',
        'content-type':'application/json; charset=UTF-8',
        'host':'apiselfservice.co',
        'user-agent':'okhttp/4.9.3',
        'x-carrier':'Android',
        'x-mc-app-v':'14.7.0',
        'x-mc-device-id':'YoaOEab2kzFQWPrew/K3pVMVnGKFSkVuAy4f2jAzLdd6/qXtfd1gdGYwvlHu0Mjq/ROq4LT4g74Lgy2aH+5Q2lD9bnFOdVbkHvaXPN4LPZ2WOJ3Q3ayWG0zUCIR5PD72/MgqPqMEdQVmxnCkTJtX4oDWC0HRNO60vt1l64ZBKXE=',
        'x-mc-device-name':'Googlesdk_gphone_x86',
        'x-mc-he-v':'3',
        'x-mc-line':'29743651',
        'x-mc-lob':'1',
        'X-MC-MAIL': 'castellanosd162@gmail.com',
        'X-MC-SO': 'android',
        'X-MC-SO-API' : '30',
        'x-mc-so-phone-f' :'Google',
        'x-mc-so-phone-m':'sdk_gphone_x86',
        'x-mc-so-v':'11',
        'x-mc-user-agent': 'eyJpcCI6IjEwLjAuMi4xNiIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKEdvb2dsZTsgc2RrX2dwaG9uZV94ODY7IFx1MDAzY2FuZHJvaWQvMTFcdTAwM2UpIn0=',
        //'X-SESSION-ID': requestParameter.globalData.sessionId,
        'x-wifi' : 'true'
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