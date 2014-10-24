$.getJSON( "../assets/planets.json", function( data ) {
for (var i = 0; i < data.planet.length; i++) { 
		$('#planetlist').append('<li id="'+data.planet[i].name+'"><img src="assets/images/sun.jpg" /><h3>'+ data.planet[i].name +'</h3><p>'+ data.planet[i].description +'</p></a></li>');

}
    alert(data);

});
window.addEventListener("load", function() {
  console.log("Hello World!");
    $("#planetlist li").click(function() {
    sessionStorage.setItem("selectedplanet", $(this).attr('id'));
    document.location.href = 'index.html#planetdet';
        $( "#planettitle" ).text(sessionStorage.getItem("selectedplanet"));
        $( "#planetdesc" ).text(sessionStorage.getItem("selectedplanet"));
    });

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



