// JavaScript Document
var get_Data = function(){
	var Nombre_Completo = document.getElementById("Nombre_Completo").value;
	var Empresa = document.getElementById("Empresa");
	var Cargo = document.getElementById("Cargo");
	var Telefono_Movil = document.getElementById("Telefono_Movil");
	var Telefono_Hogar =document.getElementById("Telefono_Hogar");
	var Correo_Electronico_Instucional = document.getElementById("Correo_Electronico_Instucional");
	var Correo_Empresa = document.getElementById("Correo_Empresa");
	var QR_Code = Nombre_Completo +' '+ Empresa +' '+ Cargo +' '+ Telefono_Movil +' '+ Telefono_Hogar +' '+ Correo_Electronico_Instucional +' '+ Correo_Empresa;
	console.log(QR_Code);

	var Generando_QR_code = new QRCode(document.getElementById("qrcode"),{
		width : 100,
      	height : 100
		
	}
	function makeCode(){
      var elText = QR_Code;
      if (!elText.value) {
        alert("Ingresa un texto");
        elText.focus();
        return;
      }
      qrcode.makeCode(elText.value);
    }
    // Al cargar crear el qr inicial
   	makeCode();
}