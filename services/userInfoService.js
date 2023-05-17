let requestParameter = getApp();

export function userInfo(url, longinUser) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: "POST",
      data: longinUser,
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
        "X-MC-DEVICE-ID": "sdSS5V/uzNMk7u+w5J7jrLK82uPH+QeVMag0lGPgjM/XZ5KOc7MKnHFsFNb8kPQtil3fH8ewmXvXD88huw4LGecaguoggK6aWSq+o3TmC0uyWNagvvJpl2R8VGwFdiil/JDQXF/JXv5Jm8nA+lr0TEMDDWqfc5bEtnOvX9mmmaQ=",
        "X-MC-USER-AGENT": "eyJpcCI6IjE3Mi4yMS45MC4xODUiLCJ1c2VyQWdlbnQiOiJNaUNsYXJvQXBwLzAuMC4xIChzYW1zdW5nOyBTTS1HOTg4TjsgXHUwMDNjYW5kcm9pZC85XHUwMDNlKSJ9"
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
