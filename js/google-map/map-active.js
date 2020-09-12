// var map;
// var latlng = new google.maps.LatLng(12.738830, -8.070800);
// var stylez = [{
//     featureType: "all",
//     elementType: "all",
//     stylers: [{
//         saturation: -10
//             }]
//         }];
// var mapOptions = {
//     zoom: 15,
//     center: latlng,
//     scrollwheel: false,
//     scaleControl: false,
//     disableDefaultUI: true,
//     mapTypeControlOptions: {
//         mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
//     }
// };
// map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
// var geocoder_map = new google.maps.Geocoder();
// var address = 'New york';
// geocoder_map.geocode({
//     'address': address
// }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//             map: map,
//             position: map.getCenter()
//         });
//     } else {
//         alert("Geocode was not successful for the following reason: " + status);
//     }
// });
// var mapType = new google.maps.StyledMapType(stylez, {
//     name: "Grayscale"
// });
// map.mapTypes.set('gMap', mapType);
// map.setMapTypeId('gMap');

function initMap(){
                    // Map options
                    var options = {
                      zoom: 14,
                      center: { lat: 12.73883, lng: -8.0708 },
                    };

                    // New map
                    var map = new google.maps.Map(
                      document.getElementById("googleMap"),
                      options
                    );

                    // // // Listen for click on map
                    // google.maps.event.addListener(map, "click", function (
                    //   event
                    // ) {
                    //   // Add marker
                    //   addMarker({ coords: event.latLng });
                    // });

                    // Add marker
    //                 var marker = new google.maps.Marker({
    //                   position: { lat: 12.744801, lng: -8.067704 },
    //                   map: map,
    //                   icon:
    //                     "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //                 });
                   
    //   var infoWindow = new google.maps.InfoWindow({
    //     content:'<h1>Testing</h1>'
    //   });

    //   marker.addListener('click', function(){
    //     infoWindow.open(map, marker);
    //   });
    
       
      

                    // Array of markers
                    var markers = [
                      {
                        coords: { lat: 12.744801, lng: -8.067704 },
                        iconImage:
                          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                        content: "<h1>Testing 1</h1>",
                      },
                      {
                        coords: { lat: 12.741686, lng: -8.073952 },
                        content: "<h1>Testing 2</h1>",
                      }
                      
                    ];

                    // Loop through markers
                    for (var i = 0; i < markers.length; i++) {
                      // Add marker
                      addMarker(markers[i]);
                    }

                    // Add Marker Function
                    function addMarker(props) {
                      var marker = new google.maps.Marker({
                        position: props.coords,
                        map: map,
                        //icon:props.iconImage
                      });

                      // Check for customicon
                      if (props.iconImage) {
                        // Set icon image
                        marker.setIcon(props.iconImage);
                      }

                      // Check content
                      if (props.content) {
                        var infoWindow = new google.maps.InfoWindow({
                          content: props.content,
                        });

                        marker.addListener("click", function () {
                          infoWindow.open(map, marker);
                        });
                      }
                    }
                }
 