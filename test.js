function createRequestObject(){
	var xmlhttpObj
	if(window.XMLHttpRequest){
		//IE7+ Firefox Safari Chrome Opera
		xmlhttpObj = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		try{//IE
			xmlhttpObj = new ActiveXObject("Msxm12.XMLHTTP");
		}catch(e){
			try{
				//IE5 IE6
				xmlhttpObj = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				return false;
			}
		}
	}
	return xmlhttpObj;
}
function getText(url){
	var xmlhttp = createRequestObject();
	if(xmlhttp != false){
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState==4){
				if(xmlhttp.status==200 || xmlhttp.status==0){
					var div1 = document.getElementById("div1");
					if(div1.style.display=="block"){
                        div1.style.display="none";
					}else{
						div1.style.display="block";
						div1.innerHTML = xmlhttp.responseText;
					    div1.setAttribute("class","div1");
					}
				}else{
					alert("响应有问题");
				}
			}

		};
	}else{
		alert("未能创建对象，读取失败");
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
  


