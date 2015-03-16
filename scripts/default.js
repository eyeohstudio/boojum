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
    var keyword = getUrlParameter('keyword').slice(0,1);
    
    //
    function addColor(svg) {
        
             if (keyword === '0') { svg.style('.color { fill: #ffe875; stroke: #ffe875; } .hue { fill: #ffe875; stroke: #ffe875; }'); }
        else if (keyword === '1') { svg.style('.color { fill: #ffd378; stroke: #ffd378; } .hue { fill: #ffd378; stroke: #ffd378; }'); }
        else if (keyword === '2') { svg.style('.color { fill: #ffc187; stroke: #ffc187; } .hue { fill: #ffc187; stroke: #ffc187; }'); }
        else if (keyword === '3') { svg.style('.color { fill: #ffb7ae; stroke: #ffb7ae; } .hue { fill: #ffb7ae; stroke: #ffb7ae; }'); }
        else if (keyword === '4') { svg.style('.color { fill: #ff9c76; stroke: #ff9c76; } .hue { fill: #ff9c76; stroke: #ff9c76; }'); }
        else if (keyword === '5') { svg.style('.color { fill: #eac4be; stroke: #eac4be; } .hue { fill: #eac4be; stroke: #eac4be; }'); }
        
        else if (keyword === '6') { svg.style('.color { fill: #f4c3cb; stroke: #f4c3cb; } .hue { fill: #f4c3cb; stroke: #f4c3cb; }'); }
        else if (keyword === '7') { svg.style('.color { fill: #ffabc2; stroke: #ffabc2; } .hue { fill: #ffabc2; stroke: #ffabc2; }'); }
        else if (keyword === '8') { svg.style('.color { fill: #e4bdd0; stroke: #e4bdd0; } .hue { fill: #e4bdd0; stroke: #e4bdd0; }'); }
        else if (keyword === '9') { svg.style('.color { fill: #cf8fa4; stroke: #cf8fa4; } .hue { fill: #cf8fa4; stroke: #cf8fa4; }'); }
        else if (keyword === 'A') { svg.style('.color { fill: #dcb6ba; stroke: #dcb6ba; } .hue { fill: #dcb6ba; stroke: #dcb6ba; }'); }
        else if (keyword === 'B') { svg.style('.color { fill: #eebae9; stroke: #eebae9; } .hue { fill: #eebae9; stroke: #eebae9; }'); }
        
        else if (keyword === 'C') { svg.style('.color { fill: #e0cfd6; stroke: #e0cfd6; } .hue { fill: #e0cfd6; stroke: #e0cfd6; }'); }
        else if (keyword === 'D') { svg.style('.color { fill: #cda2d9; stroke: #cda2d9; } .hue { fill: #cda2d9; stroke: #cda2d9; }'); }
        else if (keyword === 'E') { svg.style('.color { fill: #c9b7e8; stroke: #c9b7e8; } .hue { fill: #c9b7e8; stroke: #c9b7e8; }'); }
        else if (keyword === 'F') { svg.style('.color { fill: #aca8c7; stroke: #aca8c7; } .hue { fill: #aca8c7; stroke: #aca8c7; }'); }
        else if (keyword === 'G') { svg.style('.color { fill: #a7b2e8; stroke: #a7b2e8; } .hue { fill: #a7b2e8; stroke: #a7b2e8; }'); }
        else if (keyword === 'H') { svg.style('.color { fill: #7993a5; stroke: #7993a5; } .hue { fill: #7993a5; stroke: #7993a5; }'); }
            
        else if (keyword === 'I') { svg.style('.color { fill: #afc3dc; stroke: #afc3dc; } .hue { fill: #afc3dc; stroke: #afc3dc; }'); }
        else if (keyword === 'J') { svg.style('.color { fill: #a9c8f4; stroke: #a9c8f4; } .hue { fill: #a9c8f4; stroke: #a9c8f4; }'); }
        else if (keyword === 'K') { svg.style('.color { fill: #a7d4ee; stroke: #a7d4ee; } .hue { fill: #a7d4ee; stroke: #a7d4ee; }'); }
        else if (keyword === 'L') { svg.style('.color { fill: #8298bd; stroke: #8298bd; } .hue { fill: #8298bd; stroke: #8298bd; }'); }
        else if (keyword === 'M') { svg.style('.color { fill: #67a5bf; stroke: #67a5bf; } .hue { fill: #67a5bf; stroke: #67a5bf; }'); }
        else if (keyword === 'N') { svg.style('.color { fill: #6eb2bd; stroke: #6eb2bd; } .hue { fill: #6eb2bd; stroke: #6eb2bd; }'); }
        
        else if (keyword === 'O') { svg.style('.color { fill: #6bd9de; stroke: #6bd9de; } .hue { fill: #6bd9de; stroke: #6bd9de; }'); }
        else if (keyword === 'P') { svg.style('.color { fill: #94b7bc; stroke: #94b7bc; } .hue { fill: #94b7bc; stroke: #94b7bc; }'); }
        else if (keyword === 'Q') { svg.style('.color { fill: #6aceb9; stroke: #6aceb9; } .hue { fill: #6aceb9; stroke: #6aceb9; }'); }
        else if (keyword === 'R') { svg.style('.color { fill: #a9bab7; stroke: #a9bab7; } .hue { fill: #a9bab7; stroke: #a9bab7; }'); }
        else if (keyword === 'S') { svg.style('.color { fill: #6bac92; stroke: #6bac92; } .hue { fill: #6bac92; stroke: #6bac92; }'); }
        else if (keyword === 'T') { svg.style('.color { fill: #a7d9bc; stroke: #a7d9bc; } .hue { fill: #a7d9bc; stroke: #a7d9bc; }'); }
            
        else if (keyword === 'U') { svg.style('.color { fill: #b7e394; stroke: #b7e394; } .hue { fill: #b7e394; stroke: #b7e394; }'); }
        else if (keyword === 'V') { svg.style('.color { fill: #c7ca9c; stroke: #c7ca9c; } .hue { fill: #c7ca9c; stroke: #c7ca9c; }'); }
        else if (keyword === 'W') { svg.style('.color { fill: #d4e458; stroke: #d4e458; } .hue { fill: #d4e458; stroke: #d4e458; }'); }
        else if (keyword === 'X') { svg.style('.color { fill: #ebe081; stroke: #ebe081; } .hue { fill: #ebe081; stroke: #ebe081; }'); }
        else if (keyword === 'Y') { svg.style('.color { fill: #cabe96; stroke: #cabe96; } .hue { fill: #cabe96; stroke: #cabe96; }'); }
        else if (keyword === 'Z') { svg.style('.color { fill: #dfa880; stroke: #dfa880; } .hue { fill: #dfa880; stroke: #dfa880; }'); }
            
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
    else if (date >= 221 && date <= 231) { $('#svgObject').svg({ loadURL: 'objects/0221-0231.svg', onLoad: addColor }); }
    
    else if (date >= 301 && date <= 310) { $('#svgObject').svg({ loadURL: 'objects/0301-0310.svg', onLoad: addColor }); }
    else if (date >= 311 && date <= 320) { $('#svgObject').svg({ loadURL: 'objects/0311-0320.svg', onLoad: addColor }); }
    else if (date >= 321 && date <= 331) { $('#svgObject').svg({ loadURL: 'objects/0321-0331.svg', onLoad: addColor }); }
    
    else if (date >= 401 && date <= 410) { $('#svgObject').svg({ loadURL: 'objects/0401-0410.svg', onLoad: addColor }); }
    else if (date >= 411 && date <= 420) { $('#svgObject').svg({ loadURL: 'objects/0411-0420.svg', onLoad: addColor }); }
    else if (date >= 421 && date <= 431) { $('#svgObject').svg({ loadURL: 'objects/0421-0431.svg', onLoad: addColor }); }
    
    else if (date >= 501 && date <= 510) { $('#svgObject').svg({ loadURL: 'objects/0501-0510.svg', onLoad: addColor }); }
    else if (date >= 511 && date <= 520) { $('#svgObject').svg({ loadURL: 'objects/0511-0520.svg', onLoad: addColor }); }
    else if (date >= 521 && date <= 531) { $('#svgObject').svg({ loadURL: 'objects/0521-0531.svg', onLoad: addColor }); }
    
    else if (date >= 601 && date <= 610) { $('#svgObject').svg({ loadURL: 'objects/0601-0610.svg', onLoad: addColor }); }
    else if (date >= 611 && date <= 620) { $('#svgObject').svg({ loadURL: 'objects/0611-0620.svg', onLoad: addColor }); }
    else if (date >= 621 && date <= 631) { $('#svgObject').svg({ loadURL: 'objects/0621-0631.svg', onLoad: addColor }); }
    
    else if (date >= 701 && date <= 710) { $('#svgObject').svg({ loadURL: 'objects/0701-0710.svg', onLoad: addColor }); }
    else if (date >= 711 && date <= 720) { $('#svgObject').svg({ loadURL: 'objects/0711-0720.svg', onLoad: addColor }); }
    else if (date >= 721 && date <= 731) { $('#svgObject').svg({ loadURL: 'objects/0721-0731.svg', onLoad: addColor }); }
    
    else if (date >= 801 && date <= 810) { $('#svgObject').svg({ loadURL: 'objects/0801-0810.svg', onLoad: addColor }); }
    else if (date >= 811 && date <= 820) { $('#svgObject').svg({ loadURL: 'objects/0811-0820.svg', onLoad: addColor }); }
    else if (date >= 821 && date <= 831) { $('#svgObject').svg({ loadURL: 'objects/0821-0831.svg', onLoad: addColor }); }
    
    else if (date >= 901 && date <= 910) { $('#svgObject').svg({ loadURL: 'objects/0901-0910.svg', onLoad: addColor }); }
    else if (date >= 911 && date <= 920) { $('#svgObject').svg({ loadURL: 'objects/0911-0920.svg', onLoad: addColor }); }
    else if (date >= 921 && date <= 931) { $('#svgObject').svg({ loadURL: 'objects/0921-0931.svg', onLoad: addColor }); }

    else if (date >= 1001 && date <= 1010) { $('#svgObject').svg({ loadURL: 'objects/1001-1010.svg', onLoad: addColor }); }
    else if (date >= 1011 && date <= 1020) { $('#svgObject').svg({ loadURL: 'objects/1011-1020.svg', onLoad: addColor }); }
    else if (date >= 1021 && date <= 1031) { $('#svgObject').svg({ loadURL: 'objects/1021-1031.svg', onLoad: addColor }); }
    
    else if (date >= 1101 && date <= 1110) { $('#svgObject').svg({ loadURL: 'objects/1101-1110.svg', onLoad: addColor }); }
    else if (date >= 1111 && date <= 1120) { $('#svgObject').svg({ loadURL: 'objects/1111-1120.svg', onLoad: addColor }); }
    else if (date >= 1121 && date <= 1131) { $('#svgObject').svg({ loadURL: 'objects/1121-1131.svg', onLoad: addColor }); }
    
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