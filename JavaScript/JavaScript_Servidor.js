// JavaScript Document
function validar(){
	var Nombre_Usuario = document.getElementById("TXT_Nombre_Usuario").value;
	var password = document.getElementById("TXT_password").value;
	
	if (Nombre_Usuari == "Admin" && password == "123Admin"){
		alert("hola" + Nombre_Usuario);
		return true;
	}
	else if(Nombre_Usuari == "Estud" && password == "123estud"){
				alert("hola" + Nombre_Usuario);
				return true;
			}else{
				alert("ERRO 302: Campo no valido...");
			}
}