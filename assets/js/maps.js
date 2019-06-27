
        var map, infoWindow;
        var locations = [];
        var markers = [];
        var icons = [];
var iconBase = 'http://maps.google.com/mapfiles/kml/pal2/';

        function initMap() {
            // New map
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: 53.421372, lng: -7.933859 },
                minZoom: 9,
                maxZoom: 18,
                draggable: true,
                scrollwheel: true,
                animation: google.maps.Animation.Drop,
                mapTypeControl: false,
                panControl: false,
                streetViewControl: false,
                // zoomControlOptions: {
            });

            

               icons = {
                dining: {
                    icon: iconBase + 'icon34.png'
                },
                entertainment: {
                    icon: iconBase + 'icon13.png'
                },
                accomodation: {
                    icon: iconBase + 'icon20.png'
                }
            };


            locations = [{
                position: new google.maps.LatLng(53.422062, -7.934560),
                type: 'dining',
                content: '<h5>Poppy fields</h5>, <p><img src="assets/images/poppy-field.jpg"></p>'


            }, {
                position: new google.maps.LatLng(53.422109, -7.943453),
                type: 'dining',
                content: '<h5>Kin Khao Thai</h5>',
                image: 'assets/images/kin-khao-thai.JPG'
            }, {
                position: new google.maps.LatLng(53.421394, -7.934222),
                type: 'dining',
                content: '<h5> CHARCOAL GRILL</h5>',
                image: 'assets/images/charcoal-grill.jpg'
            }, {
                position: new google.maps.LatLng(53.422411, -7.942702),
                type: 'dining',
                content: '<h5>The Snug Bar</h5>',
                image: 'assets/images/the-snug-bar.jpg'
            }, {
                position: new google.maps.LatLng(53.422676, -7.942339),
                type: 'dining',
                content: '<h5>Sean`s Bar</h5>',
                image: 'assets/images/sean-s-bar.jpg'
            }, {
                position: new google.maps.LatLng(53.423089, -7.942131),
                type: 'dining',
                content: '<h5> Mother India</h5>',
                image: 'assets/images/mother-india.jpg'
            }, {
                position: new google.maps.LatLng(53.423751, -7.940913),
                type: 'dining',
                content: '<h5>Bacchus Restaurant</h5>',
                image: 'assets/images/bacchus-restaurant.jpg'
            }, {
                position: new google.maps.LatLng(53.424085, -7.935835),
                type: 'dining',
                content: '<h5> Quigleys Cafe, Bakery & Deli</h5>',
                image: 'assets/images/quigleys-cafe.jpg'
            }, {
                position: new google.maps.LatLng(53.422208, -7.933528),
                type: 'dining',
                content: '<h5> Chameleon Cafe</h5>',
                image: 'assets/images/chameleon-cafe.png'
            }, {
                position: new google.maps.LatLng(53.423097, -7.942788),
                type: 'entertainment',
                content: '<h5>Athlone Castle & Visitor Centre</h5>',
                image: 'assets/images/athlone-castle-&-visitor-centre.jpg'
            }, {
                position: new google.maps.LatLng(53.423272, -7.943177),
                type: 'entertainment',
                content: '<h5>Athlone Army Memorial</h5>',
                image: 'assets/images/athlone-army-memorial'
            }, {
                position: new google.maps.LatLng(53.469417, -7.987214),
                type: 'entertainment',
                content: '<h5> Baysports Athlone</h5>',
                image: 'assets/images/baysports.jpg'
            }, {
                position: new google.maps.LatLng(53.399436, -8.020866),
                type: 'entertainment',
                content: '<h5> Glendeer Pet Farm</h5>',
                image: 'assets/images/glendeer-pet-farm.JPG'
            }, {
                position: new google.maps.LatLng(53.428223, -7.951626),
                type: 'entertainment',
                content: '<h5> Planet Entertainment Centre</h5>',
                image: 'assets/images/planet-centre.jpg'

            }, {
                position: new google.maps.LatLng(53.423703, -7.935521),
                type: 'accomodation',
                content: '<h5>Sheraton Athlone Hotel </h5>',
                image: 'assets/images/sheraton.jpg'

            }, {
                position: new google.maps.LatLng(53.424798, -7.941574),
                type: 'accomodation',
                content: '<h5>Radisson Blu Hotel Athlone</h5>',
                image: 'assets/images/radisson.jpg'
            }, {
                position: new google.maps.LatLng(53.424055, -7.767401),
                type: 'accomodation',
                content: '<h5> The Village B&B</h5>',
                image: 'assets/images/the-village-b&b.jpg'
            }, {
                position: new google.maps.LatLng(53.422651, -7.934581),
                type: 'accomodation',
                content: '<h5>Arch House B&B</h5>',
                image: 'assets/images/arch-house.jpg'
            }, {
                position: new google.maps.LatLng(53.456705, -7.977538),
                type: 'accomodation',
                content: '<h5>Reeside B&B</h5>',
                image: 'assets/images/reeside.jpg'
            }, {
                position: new google.maps.LatLng(53.423816, -7.938437),
                type: 'accomodation',
                content: '<h5> Prince of Wales Hotel</h5>',
                image: 'assets/images/prince-of-wales.JPG'
            }, {
                position: new google.maps.LatLng(53.448579, -7.934063),
                type: 'accomodation',
                content: '<h5> Coosan Cottage Ecolodge Hotel</h5>',
                image: 'assets/images/coosan-cottage.jpg'
            }];


            

// Create markers.
            for (var i = 0; i < locations.length; i++) {
                var marker = new google.maps.Marker({
                    position: locations[i].position,
                    icon: icons[locations[i].type].icon,
                    map: map,
                    content: locations[i].content
                });
            
                var infowindow = new google.maps.InfoWindow();
                var content = locations[i].content;
            
                google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
                    return function() {
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    };
                })(marker, content, infowindow));
            
                markers[i] = marker;
            };
            
            //var accomodationClick = selectPlaces("accomodation");
            $('#accomodationRadio').click(selectPlaces);
            $('#foodRadio').click(selectPlaces);
            $('#entertainment').click(selectPlaces);
            
           
// add Listener 'mouseover'
/*                marker.addListener('click', function() {
                    infoWindow.open(map, marker);
                });
                
                // add Listener 'mouseout'
                marker.addListener('mouseout', function() {
                    infoWindow.close(map, marker);
                });
*/                
                


            } // end  addMarker() function
        
        function selectPlaces(){
            var type;
            if ($("#accomodationRadio").is(':checked')){
                type = 'accomodation';
            }else if($("#foodRadio").is(':checked')){
                type = 'dining';
            }else if($("#entertainment").is(':checked')){
                type = 'entertainment';
            }
            clearMarkers();
            var ind = 0;
            for (var i = 0; i < locations.length; i++) {
                if(locations[i].type == type){
                var marker = new google.maps.Marker({
                    position: locations[i].position,
                    icon: icons[locations[i].type].icon,
                    map: map,
                    content: locations[i].content
                });
            
                var infowindow = new google.maps.InfoWindow();
                var content = locations[i].content;
            
                google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
                    return function() {
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    };
                })(marker, content, infowindow));
                markers[ind] = marker;
                ind = ind +1;
                };
            
            
            };
            
        }
        function clearMarkers() {
            for (var i = 0; i < markers.length; i++) {
                if (markers[i]) {
                    markers[i].setMap(null);
                }
            }
            markers = [];
        }
        
        function reset(){
            initMap();
        }