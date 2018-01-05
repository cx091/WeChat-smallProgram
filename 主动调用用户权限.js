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