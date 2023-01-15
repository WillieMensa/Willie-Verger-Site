/*
	menuppal.js
	2020.10.31 
*/

window.onload = function(){
	poneMenuPpal();
};


function poneMenuPpal() {

	document.getElementById('menuppal').innerHTML = 
		'	<ul id="mainMenu">' +
		'	<li><a href="./index.html">Inicio </a></li> ' +
		'	<li class="dropdown">' +
		'		<a href="javascript:void(0)" class="dropbtn">Caricaturas</a>' +
		'		<div class="dropdown-content">' +
		'			<a href="galeria.html?clase=%22C%22">Conocidos</a>' +
		'			<a href="galeria.html?clase=%22M%22">Mensos</a>' +
		'			<a href="galeria.html?clase=%22E%22">Periodistas</a>' +
		'			<a href="galeria.html?clase=%22P%22">Públicos</a>' +
		'			<a href="galeria.html?clase=%22A%22">Artistas</a>' +
		'			<a href="galeria.html?clase=%22D%22">Deportistas</a>' +
		'			<a href="galeria.html?clase=%22V%22">Varios</a>' +
		'		</div>' +
		'	</li>' +
		'	<li><a href="./ingenio.html">Ingenio</a></li>' +
		'	<li><a href="./aplicaciones.html">Juegos y Aplicaciones </a></li>' +
		'	<li class="dropdown">' +
		'		<a href="javascript:void(0)" class="dropbtn">Publicaciones</a>' +
		'		<div class="dropdown-content">' +
		'			<a href="publicaciones-varias.html">Publicaciones varias</a>' +
		'			<a href="calendarios.html">Impresion calendarios y otros</a>' +
		'			<a href="./repgrafsincorbata.html">Representación gráfica sin corbata</a>' +
		'			<a href="revista-enigma.html">Revista Enigma.</a>' +
		'		</div>' +
		'	<li><a href="./sitemap.html">Mapa del sitio </a></li>' +
		'</ul>' ;

}

