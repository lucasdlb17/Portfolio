function abrir(pagina) {
	document.getElementById('conteudo').innerHTML = document.getElementById(pagina).innerHTML;
}

window.onload = function() {
	document.getElementById('conteudo').innerHTML = document.getElementById('').innerHTML;
}


// Desativar o Click com o Botão Direito do Mouse
function disableselect(e){ 
	return false 
} 

function reEnable(){ 
	return true 
} 
