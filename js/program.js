function Login() {
	// body...
	var Usuario = document.getElementById('Us').value;
	var Contraseña = document.getElementById('Pass').value;

	if (Usuario == "Jose" && Contraseña == "1234") {
		Inicio();
	}
	else{
		alert('Revisa el usuario o la contraseña');
	}
}

function Inicio() {
	// body...
	window.location = "./pages/Inicio.html"
}