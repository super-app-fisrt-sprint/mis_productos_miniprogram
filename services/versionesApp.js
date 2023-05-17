let requestParameter = getApp();

export function versionesApp(url) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: "GET",
      data: {
        version: "15.1.3",
        plataforma: "android"
      },
      headers: {
        "X-SESSION-ID": requestParameter.globalData.sessionId,
        "X-MC-LOB": "0",
        "X-MC-LINE": "0",
        "X-MC-MAIL": "",
        "X-MC-SO": "android",
        "X-MC-HE-V": "3",
        "X-MC-SO-V": "9",
        "X-MC-SO-API": "28",
        "X-MC-APP-V": "15.1.3",
        "X-MC-DEVICE-ID":
          "sdSS5V/uzNMk7u+w5J7jrLK82uPH+QeVMag0lGPgjM/XZ5KOc7MKnHFsFNb8kPQtil3fH8ewmXvXD88huw4LGecaguoggK6aWSq+o3TmC0uyWNagvvJpl2R8VGwFdiil/JDQXF/JXv5Jm8nA+lr0TEMDDWqfc5bEtnOvX9mmmaQ=",
        "X-MC-USER-AGENT":
          "eyJpcCI6IjE3Mi4yMS44My4yNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKHNhbXN1bmc7IFNNLUc5ODhOOyBcdTAwM2NhbmRyb2lkLzlcdTAwM2UpIn0="
      },
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      }
    });
  });
}
