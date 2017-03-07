// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(52.629143, -1.139432));
});



function summonerLookUp() {
    var SUMMONER_ID = "34348895";
    var API_KEY = "03fbc237-8d27-4de4-9a25-b0267373973c";
    var div = document.getElementById('stuff');
    var combine = "";
 
    getStuff(SUMMONER_ID, combine, API_KEY, div);
}

function getStuff(SUMMONER_ID, combine, API_KEY, div) {
    var Topuser = SUMMONER_ID;
    $.ajax({
        url: 'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/' + SUMMONER_ID + '/entry?api_key=' + API_KEY,
        type: 'GET',
        dataType: 'json',
        async: false,
        data: {},
        success: function (json) {
            var user = Topuser;
            if (typeof json[user][0].queue != "undefined") {
                if (json[user][0].queue == "RANKED_SOLO_5x5") {
                    combine = json[user][0].tier + " - " + json[user][0].entries[0].division + " at " + json[user][0].entries[0].leaguePoints + " LP";
                    div.innerHTML = div.innerHTML + "<br />"  + combine;
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var user = Topuser;
            console.log(errorThrown);
            if (errorThrown === "Not Found")
            {
                div.innerHTML = div.innerHTML + "<br />" + ": " + user + " " + "UNRANKED";
            }            
        }
    });
}


//Loading academic grades from object
var obj = {"data": [
{
 "Secure Web Application Development:": "NA",
 "Telematics:": "NA",
 "Front-End Web Development:": "NA",
 "Fuzzy Logic and Knowledge Based Systems (AI):": "NA",
 "Privacy and Data Protection:": "NA",
 "Computing Project:": "NA",
},

{
 "<br />Organisations, Project Management and Research:": 71,
 "OO Software Design and Development:": 81,
 "Multi-tier Web Applications:": 62,
 "Data Structures and Algorithms:": 79,
},

{
  "<br />Programming in C:": 85,
  "Computer Ethics, Law and Portfolio:": 77,
  "Elements of Computing:": 76,
  "Computational Modelling:": 85,
}


]}
var divId = document.getElementById("grades")
for(var i=0;i<obj.data.length;i++)
for(var keys in obj.data[i]){
 console.log(keys +"\n %"+obj.data[i][keys]);
 divId.innerHTML = divId.innerHTML + "<br />"+ keys +"\n "+obj.data[i][keys] + "%";
}

//Displaying div on button click
function showDiv() {
   document.getElementById('grades').style.display = "block";
}


// Smooth transitioning 
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(52.629143, -1.139432), // De Montfort University

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5c6c6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e4d7c6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    }
]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Map Marker Icon
    var myLatLng = new google.maps.LatLng(52.629143, -1.139432);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,

    });

}

(function($) {

    skel.breakpoints({
        normal: '(max-width: 1280px)',
        narrow: '(max-width: 1080px)',
        narrower: '(max-width: 820px)',
        mobile: '(max-width: 736px)',
        mobilep: '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
            $body.addClass('is-loading');

            $window.on('load', function() {
                $body.removeClass('is-loading');
            });

        // Fix: Placeholder polyfill.
            $('form').placeholder();

        // Prioritize "important" elements on narrower.
            skel.on('+narrower -narrower', function() {
                $.prioritize(
                    '.important\\28 narrower\\29',
                    skel.breakpoint('narrower').active
                );
            });

        // CSS polyfills (IE<9).
            if (skel.vars.IEVersion < 9)
                $(':last-child').addClass('last-child');

        // Dropdowns.
            $('#nav > ul').dropotron({
                mode: 'fade',
                speed: 300,
                alignment: 'center',
                noOpenerFade: true
            });

        // Off-Canvas Navigation.

            // Navigation Button.
                $(
                    '<div id="navButton">' +
                        '<a href="#navPanel" class="toggle"></a>' +
                    '</div>'
                )
                    .appendTo($body);

            // Navigation Panel.
                $(
                    '<div id="navPanel">' +
                        '<nav>' +
                            '<a href="index.html" class="link depth-0">Home</a>' +
                            $('#nav').navList() +
                        '</nav>' +
                    '</div>'
                )
                    .appendTo($body)
                    .panel({
                        delay: 500,
                        hideOnClick: true,
                        resetScroll: true,
                        resetForms: true,
                        side: 'top',
                        target: $body,
                        visibleClass: 'navPanel-visible'
                    });

            // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
                if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
                    $('#navButton, #navPanel, #page-wrapper')
                        .css('transition', 'none');

    });

})(jQuery);
