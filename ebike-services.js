(function(window, angular, undefined) {'use strict';

// var urlBase = "http://192.168.0.143:3000/api";
var urlBase = "http://121.40.108.30:3000/api";

var module = angular.module("ebike-services", ['lbServices']);

module.service('RemoteStorage', ["$http", function ($http) {
  return {
    getUploadURL: function (container, path) {
      return urlBase+"/"+container+"/"+path+"/upload";
    },
    getDownloadURL: function (container, path, file) {
      return urlBase+"/"+container+"/"+path+'/download/'+file
    },
    getAvatar: function (userId) {
      return $http.get(this.getDownloadURL('uploads', userId, 'avatar.png'));
    }
  }
}])

.service('CurrentUser', function (User) {
  
})

})(window, window.angular);
