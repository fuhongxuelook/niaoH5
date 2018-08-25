/**
 * Created by Administrator on 2017/7/4.
 */
//图片预加载
var loadImg = function () {

    var imgObj = document.getElementsByTagName('img'),
        imgCount = imgObj.length;

    return {
        loadImgLoop: function loadImgLoop() {
            var _loop = function _loop(i) {
                var img = new Image();
                var loadSrc = imgObj[i].getAttribute('data-loadSrc');

                if(loadSrc != null){
                    img.src = loadSrc;
                    img.onload = function () {
                        imgObj[i].src = this.src;
                    };
                }
            };

            for (var i = 0; i < imgCount; i++) {
                _loop(i);
            }
        }
    };
}();

loadImg.loadImgLoop();