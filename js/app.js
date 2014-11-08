var obj;
$.getJSON( "../assets/planets.json", function( data ) {
    loadPlanetList(data);
    obj = data;
});

var loadPlanetList = function( data ) {
for (var i = 0; i < data.planet.length; i++) { 
		$('#planetlist').append('<li id="'+data.planet[i].name+'" data-theme="e"><img src="assets/images/'+data.planet[i].name + '.jpg" /><h3>'+ data.planet[i].name +'</h3><p>'+ data.planet[i].description +'</p></a></li>');
}
};
var loadPlanet = function( data ) {
    $("#planetlist li").click(function() {
        var i = 0;
        selected = $(this).attr('id');
       
       for (var i = 0; i < data.planet.length; i++) { 
          if (data.planet[i].name == selected){
           $("#headImg").attr('src', "assets/images/"+data.planet[i].name + ".jpg");
           $( "#planettitle" ).text(data.planet[i].name);
           $( "#planetdesc" ).text(data.planet[i].description);
           $( "#diameter" ).text(data.planet[i].diameter);
           $( "#mass" ).text(data.planet[i].mass);
           $( "#orbit" ).text(data.planet[i].orbit);
             break;
          }
       }
        
        document.location.href = 'index.html#planetdet';

        
    });
};

window.addEventListener("load", function() {
  console.log("Hello World!");
    loadPlanet(obj);
    
});




