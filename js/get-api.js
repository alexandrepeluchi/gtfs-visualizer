var api_url = "http://127.0.0.1:8000/api/";
var vez = 0;
var agency_id = "county-connection";
var url = api_url + "agency?agency_id=" + agency_id;
get(url, Generator.drawAgencyStop);

var url = api_url + "routes?agency_id=" + agency_id;
get(url, Generator.drawRoutes);

function get(url, type) {
    $.ajax({
        url: url,
        dataType: 'text',
        crossDomain: true,
        type: 'GET',
        success: function(data) {
            trataResultado(data, type);
        }
    });
}

function trataResultado(data, callback) {
    callback(data);
    /*
    switch (type) {
        case 'agency':
            Generator.drawAgencyStop(data);
            break;
        case 'routes':
            Generator.drawRoutes(data);
            break;
        case 'return-routes':

            break;
        case 'shapes':
            Generator.drawShapes(data);
            break;
        case 'stops':
            Generator.drawStops(data);
            break;
        case 'stopsnear':
            Generator.drawStopsNear(data);
            break;
        case 'test':
            test(data);
            break;
    }
    */


}

$("#rotas").click(function() {
  drawSelectedRoute();
});

function drawSelectedRoute() {

  map.removeLayer(markers);
  markers = new L.FeatureGroup();

  //url = api_url + "shapes?agency_key=county-connection&route_id=" + $("#rotas option:selected").val() + "&direction_id=0";
  //get(url, Generator.drawShapes);

  url = api_url + "stops?agency_key=county-connection&route_id=" + $("#rotas option:selected").val() + "&direction_id=0";
  console.log(url);
  get(url, Generator.drawStops);

}
