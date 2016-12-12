function esconder(){
	$("#instrucciones").slideToggle();
}

function abrir(data, ins){
	var jsonhttp = new XMLHttpRequest(), url="";
	url = data;

	jsonhttp.onreadystatechange = function() {
		if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
			var jsonDoc = jsonhttp.responseText;
			rellenar(jsonDoc);
		}
	};

	jsonhttp.open("GET",url,true);
	jsonhttp.send();

	function rellenar(arr) {
		
		document.getElementById("prin").innerHTML = arr;
		setIns(ins);
		
	}
}

function setIns(ins) {
	var jsonhttp = new XMLHttpRequest(), url="";
	url = ins;

	jsonhttp.onreadystatechange = function() {
		if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
			var jsonDoc = jsonhttp.responseText;
			rellenar(jsonDoc);
		}
	};

	jsonhttp.open("GET",url,true);
	jsonhttp.send();

	function rellenar(arr) {
		
		document.getElementById("instrucciones").innerHTML = arr;
		
	}
}