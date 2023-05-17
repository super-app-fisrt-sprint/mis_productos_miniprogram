let requestParameter = getApp();

export function getCutOffAccountList(url, data) {
  return new Promise((resolve, reject) => {
    console.log();
    my.request({
      url: url,
      method: "POST",
      data: data.datos,
      headers: {
        "X-SESSION-ID":
          "U2FsdGVkX18by9fLQE48f2vyGJjABFqGbKGQ2xYb3+c44Pbbj8OZlKyNNZ2eOx9NHED3MSHeSN/BagRkiVKjW77QFjeQYg0ReR6KGD2M2zSDKzsb6mL8FAvrhcZwF0ptBx+X9u/dXvVFPUGHZDWAAdFFDQgW3jvUwirtIXaHS8Uxk0mxto8lOUSIXKZMjZLrzwruc2TjsGbpE6A2ST0NbAADpgtCbfZJ6zE7itlZhJgOpFhRi62GzEAtgxroAzckkgQoXAYCKNtsob2Ird7VVx8qHIz2mDkULDxLcQ96EYqKkbMo241FCLNlSxOmL/4B/j2CPOTv6nM/yeP1HJGn4dbbPdZFvPA3WyVLgOJ3kwD+tpbW1OvBqevfWNO9ahlCV+M+v2aLhqRg0iyszdMC11+4FNU3WPypK8GMmiVUzuvr1L46Z8NmpgK6b2znPaV+jN1HVeJBt1Vnhai9tS+Jldd+7LSbmtGLU1NKlHF56flropC+vbZF8oQ0dKGRdT/VZPpElGvbCzoZT3ewwk3+ktpYmVN2qhhlMiYc9K8q3CfaJPN+MYdwyAp0RSJOjtDH6q3vMfywnXJbrUtyzdVXlzMPLPAhM1Gf/ePIPJ3qL9sdqKFBe+ikGh+CtHjUAZXyiHI6QCaqDm5t9yd8cRTK5TDhth4H0RSrJuSbrK1u4lNXVelgEP8b88U0d5qD0fPgeNL2+GSQ4JXAZQBZTk4cBo1GQGSouSzDLiTGXS30YSoo/0MqDCGGQ9lh9iM6SMvHucUSBD2sY2inLRsF8s0Ed46Sk0VGILOE/d9o5BUu3+syfiNUlHb2EY21MTN0vcGvjc+3qfLCS69CjC2Pr14flsx87jWw0YZuaOT0TI0lljwqGfa+mr6NGq2cgRUxBaZIjHCB6KxbEtUAiuQ18dlHdFqSHZqSsF5Ia/+aOevHSnSAdkmUxgd8kBSqnFFpxzVia9L81zEsXOJO0UKKKFE1M+DFxj1TLx1yHAyboMawygKCs/jVW1QHHHrPJU3gMSBID906sVjzCk2QPQzrNAN4fnKL8yqKa9yq2f4gSygBpbwtaUPGy3UVHLk6vGeZ4AjVD+AsDQ9rLO4yZ9KowXRCC3ZFehFxN011VEhazkU8Xgg=",
        "Content-Type": "application/json; charset=UTF-8",
        "Content-Length": "13",
        "X-MC-MAIL": "castellanosd162@gmail.com",
        "X-MC-SO": "android",
        "X-Carrier": "Tigo",
        "X-Wifi": "true",
        "X-MC-HE-V": "3",
        "X-MC-SO-V": "8.1.0",
        "Cache-Control": "no-cache",
        "X-MC-SO-API": "27",
        "X-MC-SO-PHONE-F": "HUAWEI",
        "X-MC-SO-PHONE-M": "DUB-LX3",
        "X-MC-APP-V": "15.1.3",
        "X-MC-DEVICE-NAME": "HUAWEIDUB-LX3",
        "X-MC-DEVICE-ID":
          "Jo/mIUAVDF/U9lgLdM2rxTZRTfxkJ4jzs4EL7y4tjMlPTjXGRxss9wUyuRwDaveZk6MHsXhpoQVDU98Fk8oytGMNYnMFFQQ3nWlQeSSdsn6A8VXi8FUNNM7QkHaWObisyqOYRE72LcHabII4t3dOhUperkPutLgdDzqobC85r64=",
        "X-MC-USER-AGENT":
          "eyJpcCI6IjE5Mi4xNjguMS4xIiwidXNlckFnZW50IjoiTWlDbGFyb0FwcC8wLjAuMSAoSFVBV0VJOyBEVUItTFgzOyBcdTAwM2NhbmRyb2lkLzguMS4wXHUwMDNlKSJ9"
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
