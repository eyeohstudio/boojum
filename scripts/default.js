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
    
    //
    var keyword = getUrlParameter('keyword');
    var date = getUrlParameter('date');
    
    var dateInt = parseInt(date, 10);
    
    var svgObject = '<object type="image/svg+xml" width="360" height="360">Please, make sure the date format on the URL parameter is: &date=MMDD. Thank you!</object>';

    //
         if (dateInt >= 101 && dateInt <= 110) { $('body').append($(svgObject).attr('data', '0101-0110.svg'));}
    else if (dateInt >= 111 && dateInt <= 120) { $('body').append($(svgObject).attr('data', '0111-0120.svg'));}
    else if (dateInt >= 121 && dateInt <= 131) { $('body').append($(svgObject).attr('data', '0121-0131.svg'));}
    
    else if (dateInt >= 201 && dateInt <= 210) { $('body').append($(svgObject).attr('data', '0201-0210.svg'));}
    else if (dateInt >= 211 && dateInt <= 220) { $('body').append($(svgObject).attr('data', '0211-0220.svg'));}
    else if (dateInt >= 221 && dateInt <= 231) { $('body').append($(svgObject).attr('data', '0221-0231.svg'));}
    
    else if (dateInt >= 301 && dateInt <= 310) { $('body').append($(svgObject).attr('data', '0301-0310.svg'));}
    else if (dateInt >= 311 && dateInt <= 320) { $('body').append($(svgObject).attr('data', '0311-0320.svg'));}
    else if (dateInt >= 321 && dateInt <= 331) { $('body').append($(svgObject).attr('data', '0321-0331.svg'));}
    
    else if (dateInt >= 401 && dateInt <= 410) { $('body').append($(svgObject).attr('data', '0401-0410.svg'));}
    else if (dateInt >= 411 && dateInt <= 420) { $('body').append($(svgObject).attr('data', '0411-0420.svg'));}
    else if (dateInt >= 421 && dateInt <= 431) { $('body').append($(svgObject).attr('data', '0421-0431.svg'));}
    
    else if (dateInt >= 501 && dateInt <= 510) { $('body').append($(svgObject).attr('data', '0501-0510.svg'));}
    else if (dateInt >= 511 && dateInt <= 520) { $('body').append($(svgObject).attr('data', '0511-0520.svg'));}
    else if (dateInt >= 521 && dateInt <= 531) { $('body').append($(svgObject).attr('data', '0521-0531.svg'));}
    
    else if (dateInt >= 601 && dateInt <= 610) { $('body').append($(svgObject).attr('data', '0601-0610.svg'));}
    else if (dateInt >= 611 && dateInt <= 620) { $('body').append($(svgObject).attr('data', '0611-0620.svg'));}
    else if (dateInt >= 621 && dateInt <= 631) { $('body').append($(svgObject).attr('data', '0621-0631.svg'));}
    
    else if (dateInt >= 701 && dateInt <= 710) { $('body').append($(svgObject).attr('data', '0701-0710.svg'));}
    else if (dateInt >= 711 && dateInt <= 720) { $('body').append($(svgObject).attr('data', '0711-0720.svg'));}
    else if (dateInt >= 721 && dateInt <= 731) { $('body').append($(svgObject).attr('data', '0721-0731.svg'));}
    
    else if (dateInt >= 801 && dateInt <= 810) { $('body').append($(svgObject).attr('data', '0801-0810.svg'));}
    else if (dateInt >= 811 && dateInt <= 820) { $('body').append($(svgObject).attr('data', '0811-0820.svg'));}
    else if (dateInt >= 821 && dateInt <= 831) { $('body').append($(svgObject).attr('data', '0821-0831.svg'));}
    
    else if (dateInt >= 901 && dateInt <= 910) { $('body').append($(svgObject).attr('data', '0901-0910.svg'));}
    else if (dateInt >= 911 && dateInt <= 920) { $('body').append($(svgObject).attr('data', '0911-0920.svg'));}
    else if (dateInt >= 921 && dateInt <= 931) { $('body').append($(svgObject).attr('data', '0921-0931.svg'));}

    else if (dateInt >= 1001 && dateInt <= 1010) { $('body').append($(svgObject).attr('data', '1001-1010.svg'));}
    else if (dateInt >= 1011 && dateInt <= 1020) { $('body').append($(svgObject).attr('data', '1011-1020.svg'));}
    else if (dateInt >= 1021 && dateInt <= 1031) { $('body').append($(svgObject).attr('data', '1021-1031.svg'));}
    
    else if (dateInt >= 1101 && dateInt <= 1110) { $('body').append($(svgObject).attr('data', '1101-1110.svg'));}
    else if (dateInt >= 1111 && dateInt <= 1120) { $('body').append($(svgObject).attr('data', '1111-1120.svg'));}
    else if (dateInt >= 1121 && dateInt <= 1131) { $('body').append($(svgObject).attr('data', '1121-1131.svg'));}
    
    else if (dateInt >= 1201 && dateInt <= 1210) { $('body').append($(svgObject).attr('data', '1201-1210.svg'));}
    else if (dateInt >= 1211 && dateInt <= 1220) { $('body').append($(svgObject).attr('data', '1211-1220.svg'));}
    else if (dateInt >= 1221 && dateInt <= 1231) { $('body').append($(svgObject).attr('data', '1221-1231.svg'));}
    
    else {
        $('body').append(
            $('<span>Error</span>')
        );
    }
    
    /*
    $('head').append(
        $('<link rel="stylesheet" type="text/css">').attr('href', date)
    );

    $('.base36').append(keyword);
    */

});