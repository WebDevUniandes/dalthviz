function Module()
	{
		//Posibilidad de cargar información por AJAX...
		var data = [
 {
   "familia": "Tinamidae",
   "nombre_esp": "Tinam Leonado",
   "nombre_ing": "Tawny-breasted Tinamou",
   "nombre_cientifico": "Nothocercus julius",
   "estado": "",
   "notas": "",
   "imagen": "http://www.hbw.com/sites/default/files/styles/ibc_1k/public/ibc/p/tawny-breasted-tinamou.jpg?itok=4MFYn4NI"
 },
 {
   "familia": "Anatidae",
   "nombre_esp": "Pato Cariblanco",
   "nombre_ing": "White-cheeked Pintail",
   "nombre_cientifico": "Anas bahamensis",
   "estado": "",
   "notas": "",
   "imagen": "https://upload.wikimedia.org/wikipedia/commons/8/8a/White_cheeked_pintail.jpg"
 },
 {
   "familia": "Phaethontidae",
   "nombre_esp": "Rabijunco Dorsibarrado",
   "nombre_ing": "Red-billed Tropicbird",
   "nombre_cientifico": "Phaethon aethereus",
   "estado": "",
   "notas": "",
   "imagen": "https://c1.staticflickr.com/3/2065/1609289228_5176e26ec6_b.jpg"
 },
 {
   "familia": "Strigidae",
   "nombre_esp": "Buho Real",
   "nombre_ing": "Great Horned Owl",
   "nombre_cientifico": "Bubo virginianus",
   "estado": "",
   "notas": "",
   "imagen": "https://c1.staticflickr.com/5/4036/4419165515_cf8ce65a88_b.jpg"
 },
 {
   "familia": "Trochilidae",
   "nombre_esp": "Ermitaño Verde",
   "nombre_ing": "Green Hermit",
   "nombre_cientifico": "Phaethornis guy ",
   "estado": "",
   "notas": "",
   "imagen": "http://fieldguides.com/triplistsPHOTOS/2012/jec12-4.jpg"
 },
 {
   "familia": "Trochilidae",
   "nombre_esp": "Colibrí Chillón",
   "nombre_ing": "Sparkling Violetear",
   "nombre_cientifico": "Colibri coruscans",
   "estado": "",
   "notas": "",
   "imagen": "https://c2.staticflickr.com/4/3909/14354132502_65da82b468_b.jpg"
 },
 {
   "familia": "Trochilidae",
   "nombre_esp": "Calzoncitos ureo",
   "nombre_ing": "Golden-breasted Puffleg",
   "nombre_cientifico": "Eriocnemis mosquera",
   "estado": "",
   "notas": "",
   "imagen": "https://upload.wikimedia.org/wikipedia/commons/2/21/Golden-Breasted_Puffleg_(Eriocnemis_mosquera).jpg"
 },
 {
   "familia": "Estrildidae",
   "nombre_esp": "Pinzón Cebra ",
   "nombre_ing": "Zebra Finch",
   "nombre_cientifico": "Taeniopygia guttata  ",
   "estado": "Obs Esc",
   "notas": "For status in Colombia, see Donegan et al. 2012, 2013.",
   "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Taeniopygia_guttata_-Karratha,_Pilbara,_Western_Australia,_Australia_-male-8_(2).jpg"
 }
];

function domPopulation(){

		data.forEach(function(item, index)
		{
			var container = document.getElementById("aves");

			var estado = '<label>Estado: </label> <i>'+item.estado+'</i><br>';
			var notas =  '<label>Notas: </label> <i>'+item.notas+'</i><br>';

			var ave = '<div class="ave col-md-4 col-sm-6 col-lg-3 well">'+
		    '<h3 class="nombre_cientifico">'+item.nombre_cientifico+'</h3>'+
            '<a href="'+item.imagen+'" target="_blank"><img  class="img-responsive" src="'+item.imagen+'" alt="'+item.nombre_cientifico+'"/></a><br>'+
            '<div class="informacion">' +
            '<label>Familia: </label> <i>'+item.familia+'</i><br>' +
            '<label>Nombre (español): </label> '+item.nombre_esp+'<br>' +
            '<label>Nombre (inglés): </label> '+item.nombre_ing+'<br>';

			if (item.estado)
				ave = ave + estado;
			if (item.notas)
				ave = ave + notas;

            ave = ave + '</div></div>';

			container.innerHTML = container.innerHTML + ave;
			
});
};

function domDialog(imagen){
	var dialog = document.getElementById('dialog');

	dialog.innerHTML == dialog.innerHTML + 
	'<img class="img-responsive" src="'+imagen+'" alt="'+imagen+'"'+
	'<br> <button id="exit">Exit</button>';

	dialog.show();
}


return {domPopulation : domPopulation,
		domDialog: domDialog}

};

(function() {
	 var dialog = document.getElementById('dialog');
	  if (document.getElementById('exit')){
	  document.getElementById('exit').onclick = function() {
	    dialog.close();
	}
  };
})();

var module = new Module();
module.domPopulation();