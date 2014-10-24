var obj;
$.getJSON( "../assets/planets.json", function( data ) {
    loadPlanetList(data);
    obj = data;
});

var loadPlanetList = function( data ) {
for (var i = 0; i < data.planet.length; i++) { 
		$('#planetlist').append('<li id="'+data.planet[i].name+'"><img src="assets/images/sun.jpg" /><h3>'+ data.planet[i].name +'</h3><p>'+ data.planet[i].description +'</p></a></li>');
}
};
var loadPlanet = function( data ) {
    $("#planetlist li").click(function() {
        selected = $(this).attr('id');
        document.location.href = 'index.html#planetdet';
       for (var i = 0; i < data.planet.length; i++) { 
          if (data.planet[i].name = selected){
           $( "#planettitle" ).text(selected);
          }
       }
        
    });
};

window.addEventListener("load", function() {
  console.log("Hello World!");
    loadPlanet(obj);
    
});
$(function () {
    $("[data-role=header],[data-role=footer]").toolbar().enhanceWithin();
    $("[data-role=panel]").panel().enhanceWithin();
});

$(document).on("pagecreate", function () {
    $("[data-role=panel]").one("panelbeforeopen", function () {
        var height = $.mobile.pageContainer.pagecontainer("getActivePage").outerHeight();
        $(".ui-panel-wrapper").css("height", height + 1);
    });
});



