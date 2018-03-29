if ( $('.hamburgerMenu').length > 0 ) {
    $('.hamburgerMenu').on('click', function() {
        var mainNavigation = $('.mainNavigation'),
            hamburgerMenuBtn = $(this);

        if ( !mainNavigation.hasClass('is-scrolled-in') ) {
            mainNavigation.addClass('is-scrolled-in');
            hamburgerMenuBtn.addClass('is-in-x-mode');
            mainNavigation.after('<div class="mobile-menu-overlay"></div>');
            $('.mobile-menu-overlay').animate({
                opacity: 0.8
            });

            $('.mobile-menu-overlay').on('click', function() {
                mainNavigation.removeClass('is-scrolled-in');
                hamburgerMenuBtn.removeClass('is-in-x-mode');
                $('.mobile-menu-overlay').fadeOut(300, function() {
                    $(this).remove();
                });
            });
        } else {
            mainNavigation.removeClass('is-scrolled-in');
            hamburgerMenuBtn.removeClass('is-in-x-mode');
            $('.mobile-menu-overlay').fadeOut(300, function() {
                $(this).remove();
            });
        }
    });
}

if ( $('.heroSlider').length > 0 ) {
    $('.heroSlider').bxSlider({
        onSliderLoad: function() {
            $('.heroSlider__wrapper').css('overflow', 'visible');
        }
    });
}

if ( $('.projectBoxSlider').length > 0 ) {
    $('.projectBoxSlider').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 258,
        slideMargin: 25,
        pager: false,
        onSliderLoad: function() {
            $('.projectBoxSlider__wrapper').css('overflow', 'visible');
        }
    });
}

if ( $('#mapContainer').length > 0 ) {
    function initMap() {
    var uluru = {lat: 51.490298, lng: -0.120457};
    var map = new google.maps.Map(document.getElementById('mapContainer'), {
      zoom: 15,
      center: uluru,
      disableDefaultUI: false,
      styles: [
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d3d3d3"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b3b3b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1.8
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ebebeb"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a7a7a7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#efefef"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#696969"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d6d6d6"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        }
    ]
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: 'images/custom-map-marker.png'
    });
    }
}

if ( $('#mapContainerMain').length > 0 ) {
    function initMapMain() {
    var uluru = {lat: 51.490298, lng: -0.120457};
    var map = new google.maps.Map(document.getElementById('mapContainerMain'), {
      zoom: 15,
      center: uluru,
      disableDefaultUI: false,
      styles: [
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d3d3d3"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b3b3b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1.8
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ebebeb"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a7a7a7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#efefef"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#696969"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d6d6d6"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        }
    ]
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: 'images/custom-map-marker.png'
    });

    var testInfoWindow1 = new google.maps.InfoWindow({
        content: 'Dummy content'
    });

    var testMarker1 = new google.maps.Marker({
        position: {lat: 51.490298, lng: -0.130457},
        map: map,
        icon: 'images/map-markers/default-marker-purple.png'
    });

    google.maps.event.addListener(testMarker1, 'click', function() {
        testInfoWindow1.open(map, testMarker1);
    })

    }
}