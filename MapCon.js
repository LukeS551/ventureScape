var app = new Vue({
    el: '#sidebar',
    data: {
        picked: ''
    },
    watch: {
        picked: function (val) {
           console.log(val); 
          switchLayer(val);
        }
    }
})
mapboxgl.accessToken = 'pk.eyJ1IjoibHM2NjEiLCJhIjoiY2pvM2Rub29oMHZoeDNxcXE0Mmc2Y2toaSJ9.1klSN7ZvY2AgMgiqPjDGYA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/ls661/cjo9a21j306fp2snzqy9k3elx', // stylesheet location
    center: [175, -38],
    zoom: 4.0, // starting zoom
});
map1();
function map1(){
    map.on('load', function(){
        map.addSource('dem', {
            "type": "raster-dem",
            "url": "mapbox://mapbox.terrain-rgb"
        }); 
        addShading();     
    });   
}
function switchLayer(layer) {
    console.log(layer);
    map.setStyle('mapbox://styles/mapbox/' + layer);
    addShading(); 
}
function addShading(){
    map.addLayer({
        "id": "hillshading",
        "source": "dem",
        "type": "hillshade"
        // insert below waterway-river-canal-shadow;
        // where hillshading sits in the Mapbox Outdoors style
    }, 'waterway-river-canal-shadow');
}
    
var box = 0;
function reveal1(){ box = 1; 
                reveal()}
function reveal2(){ box = 2; 
                reveal()}
function reveal3(){ box = 3; 
                reveal()}
function reveal(){
    
   //boxOn = "box" + box;
    for(var i = 1; i <= 4; i ++){
            boxOn = "box" + i;
            if(i == box){    
                    document.getElementById(boxOn).style.display = "inline-block";
                }
            else{
                document.getElementById(boxOn).style.display = "none";
            }
        }
}


