jQuery(document).ready(function($) {
                
    // Get url parameter jquery
    // http://stackoverflow.com/questions/19491336/get-url-parameter-jquery
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }

    var dateNow = new Date();
    var dateToday = ( '0' + (dateNow.getMonth()+1) ).slice( -2 ) + dateNow.getDate();
    var dateCurrent = getUrlParameter('date') || dateToday;
    var date = parseInt(dateCurrent, 10);
    
    //
    var keyword = getUrlParameter('keyword');
        
    var svgObject = '<object type="image/svg+xml" width="360" height="360"></object>';

    //
         if (date >= 101 && date <= 110) { $('body').append($(svgObject).attr('data', '0101-0110.svg'));}
    else if (date >= 111 && date <= 120) { $('body').append($(svgObject).attr('data', '0111-0120.svg'));}
    else if (date >= 121 && date <= 131) { $('body').append($(svgObject).attr('data', '0121-0131.svg'));}
    
    else if (date >= 201 && date <= 210) { $('body').append($(svgObject).attr('data', '0201-0210.svg'));}
    else if (date >= 211 && date <= 220) { $('body').append($(svgObject).attr('data', '0211-0220.svg'));}
    else if (date >= 221 && date <= 231) { $('body').append($(svgObject).attr('data', '0221-0231.svg'));}
    
    else if (date >= 301 && date <= 310) { $('body').append($(svgObject).attr('data', '0301-0310.svg'));}
    else if (date >= 311 && date <= 320) { $('body').append($(svgObject).attr('data', '0311-0320.svg'));}
    else if (date >= 321 && date <= 331) { $('body').append($(svgObject).attr('data', '0321-0331.svg'));}
    
    else if (date >= 401 && date <= 410) { $('body').append($(svgObject).attr('data', '0401-0410.svg'));}
    else if (date >= 411 && date <= 420) { $('body').append($(svgObject).attr('data', '0411-0420.svg'));}
    else if (date >= 421 && date <= 431) { $('body').append($(svgObject).attr('data', '0421-0431.svg'));}
    
    else if (date >= 501 && date <= 510) { $('body').append($(svgObject).attr('data', '0501-0510.svg'));}
    else if (date >= 511 && date <= 520) { $('body').append($(svgObject).attr('data', '0511-0520.svg'));}
    else if (date >= 521 && date <= 531) { $('body').append($(svgObject).attr('data', '0521-0531.svg'));}
    
    else if (date >= 601 && date <= 610) { $('body').append($(svgObject).attr('data', '0601-0610.svg'));}
    else if (date >= 611 && date <= 620) { $('body').append($(svgObject).attr('data', '0611-0620.svg'));}
    else if (date >= 621 && date <= 631) { $('body').append($(svgObject).attr('data', '0621-0631.svg'));}
    
    else if (date >= 701 && date <= 710) { $('body').append($(svgObject).attr('data', '0701-0710.svg'));}
    else if (date >= 711 && date <= 720) { $('body').append($(svgObject).attr('data', '0711-0720.svg'));}
    else if (date >= 721 && date <= 731) { $('body').append($(svgObject).attr('data', '0721-0731.svg'));}
    
    else if (date >= 801 && date <= 810) { $('body').append($(svgObject).attr('data', '0801-0810.svg'));}
    else if (date >= 811 && date <= 820) { $('body').append($(svgObject).attr('data', '0811-0820.svg'));}
    else if (date >= 821 && date <= 831) { $('body').append($(svgObject).attr('data', '0821-0831.svg'));}
    
    else if (date >= 901 && date <= 910) { $('body').append($(svgObject).attr('data', '0901-0910.svg'));}
    else if (date >= 911 && date <= 920) { $('body').append($(svgObject).attr('data', '0911-0920.svg'));}
    else if (date >= 921 && date <= 931) { $('body').append($(svgObject).attr('data', '0921-0931.svg'));}

    else if (date >= 1001 && date <= 1010) { $('body').append($(svgObject).attr('data', '1001-1010.svg'));}
    else if (date >= 1011 && date <= 1020) { $('body').append($(svgObject).attr('data', '1011-1020.svg'));}
    else if (date >= 1021 && date <= 1031) { $('body').append($(svgObject).attr('data', '1021-1031.svg'));}
    
    else if (date >= 1101 && date <= 1110) { $('body').append($(svgObject).attr('data', '1101-1110.svg'));}
    else if (date >= 1111 && date <= 1120) { $('body').append($(svgObject).attr('data', '1111-1120.svg'));}
    else if (date >= 1121 && date <= 1131) { $('body').append($(svgObject).attr('data', '1121-1131.svg'));}
    
    else if (date >= 1201 && date <= 1210) { $('body').append($(svgObject).attr('data', '1201-1210.svg'));}
    else if (date >= 1211 && date <= 1220) { $('body').append($(svgObject).attr('data', '1211-1220.svg'));}
    else if (date >= 1221 && date <= 1231) { $('body').append($(svgObject).attr('data', '1221-1231.svg'));}
    
    else {
        $('body').append(
            $('<div class="error"><strong>ERROR!</strong> Please, make sure it is (i) an actual date; (ii) with proper format: MMDD.</div>')
        );
    }
    
    /*
    $('head').append(
        $('<link rel="stylesheet" type="text/css">').attr('href', date)
    );
    */
    
    


});