
require(['jquery', 'domReady!'], function ($) {


    var userVisitedAddress = window.location.origin;

    var Websites = {
        "Interinational": "https://www.junglegym.com",
        "NL": "https://www.junglegym.nl",
        "EE": "https://www.junglegym.ee",
        "AT": "https://www.junglegym.at",
        "BE": "https://www.junglegym.be",
        "DE": "https://www.junglegym.de",
        "IT": "https://www.junglegym.it",
        "IE": "https://www.junglegym.ie",
        "LV": "https://www.junglegym.lv",
        "LU": "https://www.junglegym.lu",
        "PT": "https://www.junglegym.pt",
        

        };


        $.get("https://ipinfo.io", function(response) {
          
        
        if (Websites.hasOwnProperty(response.country)){
            console.log(
                `
                Howdy ${response.city}!
                You are on a wrong page.
                The right address is:
                ${Websites[response.country]}
                `
            );
        } else {
            `
            Howdy ${response.city}!
            You better visit 
            ${Websites['International']}
            `
        }

        }, "jsonp");
    
    // learn generating pop up dialog
    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2
    // https://www.sitepoint.com/14-jquery-modal-dialog-boxes/
        

});
