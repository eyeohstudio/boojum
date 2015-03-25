jQuery(document).ready(function ($) {
    
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
                
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
    var download = getUrlParameter('download')
    
    //
    var keyword = getUrlParameter('keyword').slice(0,1);
    var commonStyles = '* { stroke-width: 0; } .hue { opacity: .4; }';
    
    //
    function addColor(svg) {
        
             if (keyword === '0') { svg.style('.color, .hue { fill: #ffe875; } ' + commonStyles); }
        else if (keyword === '1') { svg.style('.color, .hue { fill: #ffd378; } ' + commonStyles); }
        else if (keyword === '2') { svg.style('.color, .hue { fill: #ffc187; } ' + commonStyles); }
        else if (keyword === '3') { svg.style('.color, .hue { fill: #ffb7ae; } ' + commonStyles); }
        else if (keyword === '4') { svg.style('.color, .hue { fill: #ff9c76; } ' + commonStyles); }
        else if (keyword === '5') { svg.style('.color, .hue { fill: #eac4be; } ' + commonStyles); }
        
        else if (keyword === '6') { svg.style('.color, .hue { fill: #f4c3cb; } ' + commonStyles); }
        else if (keyword === '7') { svg.style('.color, .hue { fill: #ffabc2; } ' + commonStyles); }
        else if (keyword === '8') { svg.style('.color, .hue { fill: #e4bdd0; } ' + commonStyles); }
        else if (keyword === '9') { svg.style('.color, .hue { fill: #cf8fa4; } ' + commonStyles); }
        else if (keyword === 'A') { svg.style('.color, .hue { fill: #dcb6ba; } ' + commonStyles); }
        else if (keyword === 'B') { svg.style('.color, .hue { fill: #eebae9; } ' + commonStyles); }
        
        else if (keyword === 'C') { svg.style('.color, .hue { fill: #e0cfd6; } ' + commonStyles); }
        else if (keyword === 'D') { svg.style('.color, .hue { fill: #cda2d9; } ' + commonStyles); }
        else if (keyword === 'E') { svg.style('.color, .hue { fill: #c9b7e8; } ' + commonStyles); }
        else if (keyword === 'F') { svg.style('.color, .hue { fill: #aca8c7; } ' + commonStyles); }
        else if (keyword === 'G') { svg.style('.color, .hue { fill: #a7b2e8; } ' + commonStyles); }
        else if (keyword === 'H') { svg.style('.color, .hue { fill: #7993a5; } ' + commonStyles); }
            
        else if (keyword === 'I') { svg.style('.color, .hue { fill: #afc3dc; } ' + commonStyles); }
        else if (keyword === 'J') { svg.style('.color, .hue { fill: #a9c8f4; } ' + commonStyles); }
        else if (keyword === 'K') { svg.style('.color, .hue { fill: #a7d4ee; } ' + commonStyles); }
        else if (keyword === 'L') { svg.style('.color, .hue { fill: #8298bd; } ' + commonStyles); }
        else if (keyword === 'M') { svg.style('.color, .hue { fill: #67a5bf; } ' + commonStyles); }
        else if (keyword === 'N') { svg.style('.color, .hue { fill: #6eb2bd; } ' + commonStyles); }
        
        else if (keyword === 'O') { svg.style('.color, .hue { fill: #6bd9de; } ' + commonStyles); }
        else if (keyword === 'P') { svg.style('.color, .hue { fill: #94b7bc; } ' + commonStyles); }
        else if (keyword === 'Q') { svg.style('.color, .hue { fill: #6aceb9; } ' + commonStyles); }
        else if (keyword === 'R') { svg.style('.color, .hue { fill: #a9bab7; } ' + commonStyles); }
        else if (keyword === 'S') { svg.style('.color, .hue { fill: #6bac92; } ' + commonStyles); }
        else if (keyword === 'T') { svg.style('.color, .hue { fill: #a7d9bc; } ' + commonStyles); }
            
        else if (keyword === 'U') { svg.style('.color, .hue { fill: #b7e394; } ' + commonStyles); }
        else if (keyword === 'V') { svg.style('.color, .hue { fill: #c7ca9c; } ' + commonStyles); }
        else if (keyword === 'W') { svg.style('.color, .hue { fill: #d4e458; } ' + commonStyles); }
        else if (keyword === 'X') { svg.style('.color, .hue { fill: #ebe081; } ' + commonStyles); }
        else if (keyword === 'Y') { svg.style('.color, .hue { fill: #cabe96; } ' + commonStyles); }
        else if (keyword === 'Z') { svg.style('.color, .hue { fill: #dfa880; } ' + commonStyles); }
            
        else {
            $('body').append(
                $('<div class="error"><strong>ERROR!</strong> Please, make sure it is (i) a word formed by characters from A to Z and/or numbers from 9 to 0; and (ii) all letters are in uppercase.</div>')
            );
        }
    }
    
    //
    var dateNow = new Date();
    var dateToday = ( '0' + (dateNow.getMonth()+1) ).slice( -2 ) + dateNow.getDate();
    var dateCurrent = getUrlParameter('date') || dateToday;
    var date = parseInt(dateCurrent, 10);
    
    //
         if (date >= 101 && date <= 110) { $('#svgObject').svg({ loadURL: 'objects/0101-0110.svg', onLoad: addColor }); }
    else if (date >= 111 && date <= 120) { $('#svgObject').svg({ loadURL: 'objects/0111-0120.svg', onLoad: addColor }); }
    else if (date >= 121 && date <= 131) { $('#svgObject').svg({ loadURL: 'objects/0121-0131.svg', onLoad: addColor }); }
    
    else if (date >= 201 && date <= 210) { $('#svgObject').svg({ loadURL: 'objects/0201-0210.svg', onLoad: addColor }); }
    else if (date >= 211 && date <= 220) { $('#svgObject').svg({ loadURL: 'objects/0211-0220.svg', onLoad: addColor }); }
    else if (date >= 221 && date <= 229) { $('#svgObject').svg({ loadURL: 'objects/0221-0229.svg', onLoad: addColor }); }
    
    else if (date >= 301 && date <= 310) { $('#svgObject').svg({ loadURL: 'objects/0301-0310.svg', onLoad: addColor }); }
    else if (date >= 311 && date <= 320) { $('#svgObject').svg({ loadURL: 'objects/0311-0320.svg', onLoad: addColor }); }
    else if (date >= 321 && date <= 331) { $('#svgObject').svg({ loadURL: 'objects/0321-0331.svg', onLoad: addColor }); }
    
    else if (date >= 401 && date <= 410) { $('#svgObject').svg({ loadURL: 'objects/0401-0410.svg', onLoad: addColor }); }
    else if (date >= 411 && date <= 420) { $('#svgObject').svg({ loadURL: 'objects/0411-0420.svg', onLoad: addColor }); }
    else if (date >= 421 && date <= 430) { $('#svgObject').svg({ loadURL: 'objects/0421-0430.svg', onLoad: addColor }); }
    
    else if (date >= 501 && date <= 510) { $('#svgObject').svg({ loadURL: 'objects/0501-0510.svg', onLoad: addColor }); }
    else if (date >= 511 && date <= 520) { $('#svgObject').svg({ loadURL: 'objects/0511-0520.svg', onLoad: addColor }); }
    else if (date >= 521 && date <= 531) { $('#svgObject').svg({ loadURL: 'objects/0521-0531.svg', onLoad: addColor }); }
    
    else if (date >= 601 && date <= 610) { $('#svgObject').svg({ loadURL: 'objects/0601-0610.svg', onLoad: addColor }); }
    else if (date >= 611 && date <= 620) { $('#svgObject').svg({ loadURL: 'objects/0611-0620.svg', onLoad: addColor }); }
    else if (date >= 621 && date <= 630) { $('#svgObject').svg({ loadURL: 'objects/0621-0630.svg', onLoad: addColor }); }
    
    else if (date >= 701 && date <= 710) { $('#svgObject').svg({ loadURL: 'objects/0701-0710.svg', onLoad: addColor }); }
    else if (date >= 711 && date <= 720) { $('#svgObject').svg({ loadURL: 'objects/0711-0720.svg', onLoad: addColor }); }
    else if (date >= 721 && date <= 731) { $('#svgObject').svg({ loadURL: 'objects/0721-0731.svg', onLoad: addColor }); }
    
    else if (date >= 801 && date <= 810) { $('#svgObject').svg({ loadURL: 'objects/0801-0810.svg', onLoad: addColor }); }
    else if (date >= 811 && date <= 820) { $('#svgObject').svg({ loadURL: 'objects/0811-0820.svg', onLoad: addColor }); }
    else if (date >= 821 && date <= 831) { $('#svgObject').svg({ loadURL: 'objects/0821-0831.svg', onLoad: addColor }); }
    
    else if (date >= 901 && date <= 910) { $('#svgObject').svg({ loadURL: 'objects/0901-0910.svg', onLoad: addColor }); }
    else if (date >= 911 && date <= 920) { $('#svgObject').svg({ loadURL: 'objects/0911-0920.svg', onLoad: addColor }); }
    else if (date >= 921 && date <= 930) { $('#svgObject').svg({ loadURL: 'objects/0921-0930.svg', onLoad: addColor }); }

    else if (date >= 1001 && date <= 1010) { $('#svgObject').svg({ loadURL: 'objects/1001-1010.svg', onLoad: addColor }); }
    else if (date >= 1011 && date <= 1020) { $('#svgObject').svg({ loadURL: 'objects/1011-1020.svg', onLoad: addColor }); }
    else if (date >= 1021 && date <= 1031) { $('#svgObject').svg({ loadURL: 'objects/1021-1031.svg', onLoad: addColor }); }
    
    else if (date >= 1101 && date <= 1110) { $('#svgObject').svg({ loadURL: 'objects/1101-1110.svg', onLoad: addColor }); }
    else if (date >= 1111 && date <= 1120) { $('#svgObject').svg({ loadURL: 'objects/1111-1120.svg', onLoad: addColor }); }
    else if (date >= 1121 && date <= 1130) { $('#svgObject').svg({ loadURL: 'objects/1121-1130.svg', onLoad: addColor }); }
    
    else if (date >= 1201 && date <= 1210) { $('#svgObject').svg({ loadURL: 'objects/1201-1210.svg', onLoad: addColor }); }
    else if (date >= 1211 && date <= 1220) { $('#svgObject').svg({ loadURL: 'objects/1211-1220.svg', onLoad: addColor }); }
    else if (date >= 1221 && date <= 1231) { $('#svgObject').svg({ loadURL: 'objects/1221-1231.svg', onLoad: addColor }); }
    
    else {
        $('body').append(
            $('<div class="error"><strong>ERROR!</strong> Please, make sure it is (i) an actual date; (ii) with proper format: MMDD.</div>')
        );
    }
    
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

});