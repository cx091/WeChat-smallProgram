# WeChat-smallProgram
##小程序不主动获取用户权限问题
####问题：在的有微信版本和机型中可能会不自己获取权限导致小程序的一些请求发生错误


----------
解：（注意在实际运行中app.js和index.js是同时运行的，应该根据项目的实际情况确定验证的位置）

```
wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.userInfo', "scope.userLocation"]) {
            wx.authorize({
              scope: 'scope.userInfo',
              success() {
                wx.authorize({
                  scope: 'scope.userLocation',
                  success() {
                    //用户验证成功要执行的操作
                  }, fail() {
                    wx.showToast({
                      title: '用户未授权',
                      image: '/image/error.png',
                      duration: 2000
                    })
                  }
                })
              }, fail(){
                wx.showToast({
                  title: '用户未授权',
                  image: '/image/error.png',
                  duration: 2000
                })
              }
            })
          }else{
            //用户验证成功要执行的操作，平时用户已经授权就进入这里            
          }
        }
      })
```
