let requestParameter  = getApp();

export function requestApigetHFCServiceConfig(url, that){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      data: {
        'data': null
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
        'X-SESSION-ID': "U2FsdGVkX1+h1KTysk26ddfV2rFBAs4de5rsqKZc8vM8YFhYVQ1mCx/Zwl9rB2vezOVoHpLBV8/CW2405BGqjTawplYjIE1OMof3jj2qW4MiZqRh1msSz9Hr63dA8QhcmDDUr3Ijv46WvlSl1PWQifcqURZEwj2s8URIcBtbTjhipBca9tezl9Arl+vCGzbI0MeB/JxwmBtX6Vaj6DLv7O3yJQIaunhrAoMgp+sdHSe+e/N1yoj5lZu/r4bqiLExE7U3rDcrMAc2DW4bXj0gRSuUWyxc9Q/0woIzBx68rSD8YUcEFOkXjK0tayN4GxtoY00OugSihy7qTaAsFhs67rViJywSpothXlp2wRhG2SVfHXgKTKiP4sEkGi3/9n0GbQKVJav2EB738eM2wDt7gVNtPgK3481Wi06hG0K0tUMNlivtzJAGRIIIITHcNTGMJMeqmIshXSyt48uXsO+OoiS9dHqsu3k7hEmRIJcjXjdJY3tBeRzpyr/Gprn3MMQp4E74BtJLyRg/mixHa/7m/cIuKjEShTTwRcgLRuXcYC+JKylKwcBENgz9OzHnSDTQUEN6w0bH1iO41KIwx9QAT+jXGjXc/7wz73Yj/0ie6tOu4vCamtsDdl2Nkt1Wx7ONY+GrBvL7/JgL5J9pGFEWifthgvIV8RKB52cs/XilQG6BpHTuIXnlduTjUql9EXFDRW/qM9wVS6mfAUPregD3Xprenz68sICfFbxFyR6YmxSyl18Ad6SlmV8w+nXvrUgN5rsrgVz8BrwRRoiRXjSvotSQBCVFo8XaPz43P3s5+UBILP0LjMShxAOpjOiz9yUYReUJQNmXzA2BA3CNCWn9/mTxBIZ0M1G+F5lkk+1Gke/jCMLvfW2Yp8mhHXyHh6Fxan5JN4rApeHHgUWCPBMuzuCKJISoWHJz+ZFFv7+fjJQ=",
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