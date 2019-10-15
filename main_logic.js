//https://geoip-db.com/json/

var Websites = {

    "INT" :   "https://www.junglegym.com",
    "NL"  :   "https://www.junglegym.nl",
    "DK"  :   "https://www.junglegym.dk",
    "EE"  :   "https://www.junglegym.ee",
    "ES"  :   "https://www.junglegym.es",
    "FR"  :   "https://www.junglegym.fr",
    "GR"  :   "https://www.junglegym.gr",
    "IS"  :   "https://www.junglegym.is",
    "MK"  :   "https://www.junglegym.mk",
    "AT"  :   "https://www.junglegym.at",
    "BE"  :   "https://www.junglegym.be",
    "DE"  :   "https://www.junglegym.de",
    "IT"  :   "https://www.junglegym.it",
    "IE"  :   "https://www.junglegym.ie",
    "LV"  :   "https://www.junglegym.lv",
    "LU"  :   "https://www.junglegym.lu",
    "PT"  :   "https://www.junglegym.pt",
    "CH"  :   "https://www.junglegym.ch",
    "SI"  :   "https://www.junglegym.si",
    "ZA"  :   "https://www.junglegym.co.za",
    "NO"  :   "https://www.junglegym.co.no",
    "FI"  :   "https://www.junglegym.fi",
    "SE"  :   "https://www.junglegym.se",
    "PL"  :   "https://www.junglegym.pl",
    "UA"  :   "https://www.junglegym.ua",
    "UK"  :   "https://www.junglegym.co.uk"

    };



    var landedSite = window.location.hostname;
    var landedSiteCountry = landedSite.slice(-2).toUpperCase();

    if( landedSiteCountry === 'UK'){
        landedSiteCountry = 'GB';
    }
    
    var visitorCountry;
    var visitorCity;



 
require(['jquery', 'domReady!'], function ($) {




		console.log(`Landed site is ${landedSite}
					 Language of the website is ${landedSiteCountry}`);

        $.ajax({
            url: "https://geoip-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {

                visitorCountry = location.country_code;




                visitorCity = location.city;
				
				console.log(`Visitor's country is ${visitorCountry}
							 The city of the visitor is ${visitorCity}`)
                if ( landedSiteCountry !== visitorCountry){
                        var linkToShow = '';
                    if ( Websites.hasOwnProperty(visitorCountry)){

                        linkToShow = Websites[visitorCountry];

                        console.log(
                            `
                            Howdy ${visitorCity}!
                            You are on a wrong page.
                            The right address is:
                            ${linkToShow}
                            `
                        );
                        
                    } else {
                        linkToShow = Websites.INT;
                        console.log(
                                    ` Howdy ${visitorCity}!
                                      You better visit this site:
                                      ${linkToShow} `
                                      );
                      } 

                }  

            }
        });	


});
