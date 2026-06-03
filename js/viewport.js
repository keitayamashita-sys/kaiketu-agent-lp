var baseW = 390;
var iOSviewportW = 0;
var ua = navigator.userAgent.toLowerCase();
var isiOS = (ua.indexOf("iphone") > -1) || (ua.indexOf("ipod") > -1) || (ua.indexOf("ipad") > -1);
if(isiOS){
	iOSviewportW = document.documentElement.clientWidth;
}
function updateMetaViewport(){
	var viewportContent;
	var w = window.outerWidth;
	if(isiOS){
		w = iOSviewportW;
	}
	if(w < baseW){
		viewportContent = "width="+baseW+",user-scalable=no,shrink-to-fit=yes";
	}else{
		viewportContent = "width=device-width,user-scalable=no,shrink-to-fit=yes";
	}
	document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
}
window.addEventListener("resize", updateMetaViewport, false);
window.addEventListener("orientationchange", updateMetaViewport, false);
var ev = document.createEvent("UIEvent");
ev = new Event("resize", {
	bubbles: true,
	cancelable: true
});
window.dispatchEvent(ev);
