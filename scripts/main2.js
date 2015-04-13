document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
window.addEventListener("load", pageFullyLoaded, false);

function theDomHasLoaded(e) {

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
  var dateNow = new Date();
  var dateToday = ( '0' + (dateNow.getMonth()+1) ).slice( -2 ) + ( '0' + dateNow.getDate()).slice(-2);
  var dateCurrent = getUrlParameter('date') || dateToday;
  var date = parseInt(dateCurrent, 10);

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

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

  //
  var objectInfo0 = 'Pantone U: 2003<br>Pantone C: 2003<br>CMYK U: 0/2/70/0<br>CMYK C: 0/1/70/0<br>RGB: 255/232/117<br>HEX: ffe875';
  var objectInfo1 = 'Pantone U: 134<br>Pantone C: 7403<br>CMYK U: 0/13/58/0<br>CMYK C: 1/11/58/2<br>RGB: 255/211/120<br>HEX: ffd378';
  var objectInfo2 = 'Pantone U: 2016<br>Pantone C: 149<br>CMYK U: 0/24/50/0<br>CMYK C: 0/24/51/0<br>RGB: 255/193/135<br>HEX: ffc187';
  var objectInfo3 = 'Pantone U: 169<br>Pantone C: 7415<br>CMYK U: 0/29/23/0<br>CMYK C: 0/28/26/1<br>RGB: 255/183/174<br>HEX: ffb7ae';
  var objectInfo4 = 'Pantone U: 163<br>Pantone C: 1565<br>CMYK U:0/38/54/0<br>CMYK C: 0/39/51/0<br>RGB: 255/156/118<br>HEX: ff9c76';
  var objectInfo5 = 'Pantone U: 7605<br>Pantone C: 503<br>CMYK U: 0/18/10/0<br>CMYK C: 0/20/6/1<br>RGB: 234/196/190<br>HEX: eac4be';

  var objectInfo6 = 'Pantone U: 196<br>Pantone C: 502<br>CMYK U: 0/25/10/0<br>CMYK C: 0/26/9/1<br>RGB: 244/195/203<br>HEX: f4c3cb';
  var objectInfo7 = 'Pantone U: 189<br>Pantone C: 707<br>CMYK U: 0/38/7/0<br>CMYK C: 0/36/8/0<br>RGB: 255/171/194<br>HEX: ffabc2';
  var objectInfo8 = 'Pantone U: 685<br>Pantone C: 517<br>CMYK U: 0/24/0/2<br>CMYK C: 2/25/0/0<br>RGB: 228/189/208<br>HEX: e4bdd0';
  var objectInfo9 = 'Pantone U: 507<br>Pantone C: 507<br>CMYK U:13/51/16<br>CMYK C: 4/51/7/6<br>RGB: 207/143/164<br>HEX: cf8fa4';
  var objectInfoA = 'Pantone U: 5025<br>Pantone C: 692<br>CMYK U: 4/22/16/4<br>CMYK C: 2/26/7/2<br>RGB: 220/182/186<br>HEX: dcb6ba';
  var objectInfoB = 'Pantone U: 250<br>Pantone C: 250<br>CMYK U: 6/29/0/0<br>CMYK C: 7/28/0/0<br>RGB: 238/186/233<br>HEX: eebae9';

  var objectInfoC = 'Pantone U: 5245<br>Pantone C: 2050<br>CMYK U: 2/10/3/4<br>CMYK C: 3/15/3/0<br>RGB: 224/207/214<br>HEX: e0cfd6';
  var objectInfoD = 'Pantone U: 2563<br>Pantone C: 2562<br>CMYK U: 18/34/0/0<br>CMYK C: 19/35/0/0<br>RGB: 205/162/217<br>HEX: cda2d9';
  var objectInfoE = 'Pantone U: 2635<br>Pantone C: 5305<br>CMYK U: 20/24/0/0<br>CMYK C: 18/15/2/6<br>RGB: 201/183/232<br>HEX: c9b7e8';
  var objectInfoF = 'Pantone U: 7445<br>Pantone C: 270<br>CMYK U: 26/23/0/3<br>CMYK C: 29/25/0/0<br>RGB: 172/168/199<br>HEX: aca8c7';
  var objectInfoG = 'Pantone U: 2113<br>Pantone C: 7681<br>CMYK U: 41/24/0/0<br>CMYK C: 42/23/2/0<br>RGB: 167/178/232<br>HEX: a7b2e8';
  var objectInfoH = 'Pantone U: 5425<br>Pantone C: 5425<br>CMYK U: 54/28/22/2<br>CMYK C: 45/16/9/24<br>RGB: 121/147/165<br>HEX: 7993a5';

  var objectInfoI = 'Pantone U: 651<br>Pantone C: 277<br>CMYK U: 34/11/1/0<br>CMYK C: 35/9/0/0<br>RGB: 175/195/220<br>HEX: afc3dc';
  var objectInfoJ = 'Pantone U: 2717<br>Pantone C: 651<br>CMYK U: 33/9/0/0<br>CMYK C: 38/14/1/2<br>RGB: 169/200/244<br>HEX: a9c8f4';
  var objectInfoK = 'Pantone U: 290<br>Pantone C: 2975<br>CMYK U: 32/1/2/0<br>CMYK C: 34/0/5/0<br>RGB: 167/212/238<br>HEX: a7d4ee';
  var objectInfoL = 'Pantone U: 7695<br>Pantone C: 7695<br>CMYK U: 38/0/0/20<br>CMYK C: 43/9/8/8<br>RGB: 130/168/189<br>HEX: 8298bd';
  var objectInfoM = 'Pantone U: 7458<br>Pantone C: 7709<br>CMYK U: 65/7/12/2<br>CMYK C: 62/0/8/6<br>RGB: 103/165/191<br>HEX: 67a5bf';
  var objectInfoN = 'Pantone U: 7709<br>Pantone C: 325<br>CMYK U: 54/0/16/4<br>CMYK C: 53/0/23/0<br>RGB: 110/178/189<br>HEX: 6eb2bd';

  var objectInfoO = 'Pantone U: 318<br>Pantone C: 3248<br>CMYK U: 48/0/18/0<br>CMYK C: 48/0/22/0<br>RGB: 107/217/222<br>HEX: 6bd9de';
  var objectInfoP = 'Pantone U: 5503<br>Pantone C: 7471<br>CMYK U: 36/4/14/0<br>CMYK C: 37/0/17/0<br>RGB: 148/183/188<br>HEX: 94b7bc';
  var objectInfoQ = 'Pantone U: 3248<br>Pantone C: 333<br>CMYK U: 49/0/28/0<br>CMYK C: 49/0/28/0<br>RGB: 106/206/185<br>HEX: 6aceb9';
  var objectInfoR = 'Pantone U: 5517<br>Pantone C: 2176<br>CMYK U: 33/12/22/0<br>CMYK C: 33/12/17/0<br>RGB: 169/186/183<br>HEX: a9bab7';
  var objectInfoS = 'Pantone U: 7723<br>Pantone C: 570<br>CMYK U: 54/0/38/4<br>CMYK C: 57/0/36/0<br>RGB: 107/172/146<br>HEX: 6bac92';
  var objectInfoT = 'Pantone U: 2246<br>Pantone C: 352<br>CMYK U: 37/0/31/0<br>CMYK C: 37/0/31/0<br>RGB: 167/217/188<br>HEX: a7d9bc';

  var objectInfoU = 'Pantone U: 7486<br>Pantone C: 366<br>CMYK U: 26/0/40/0<br>CMYK C: 31/0/51/0<br>RGB: 183/227/148<br>HEX: b7e394';
  var objectInfoV = 'Pantone U: 5797<br>Pantone C: 5875<br>CMYK U: 15/6/32/1<br>CMYK C: 9/4/31/5<br>RGB: 199/202/156<br>HEX: c7ca9c';
  var objectInfoW = 'Pantone U: 380<br>Pantone C: 379<br>CMYK U: 15/0/63/0<br>CMYK C: 13/0/61/0<br>RGB: 212/228/88<br>HEX: d4e458';
  var objectInfoX = 'Pantone U: 609<br>Pantone C: 461<br>CMYK U: 2/0/47/3<br>CMYK C: 2/1/45/2<br>RGB: 235/224/129<br>HEX: ebe081';
  var objectInfoY = 'Pantone U: 4535<br>Pantone C: 5865<br>CMYK U: 4/6/32/10<br>CMYK C: 9/3/37/10<br>RGB: 202/190/150<br>HEX: cabe96';
  var objectInfoZ = 'Pantone U: 721<br>Pantone C: 473<br>CMYK U: 4/20/34/0<br>CMYK C: 0/32/42/0<br>RGB: 223/168/123<br>HEX: dfa880';

  //
  var commonStyles = '* { stroke-width: 0; } .hue { opacity: .4; }';

  //
  function addColor(svg) {

         if (keyword === '0') { svg.style('.color, .hue { fill: #ffe875; } ' + commonStyles) && $('.info').append( objectInfo0 ); }
    else if (keyword === '1') { svg.style('.color, .hue { fill: #ffd378; } ' + commonStyles) && $('.info').append( objectInfo1 ); }
    else if (keyword === '2') { svg.style('.color, .hue { fill: #ffc187; } ' + commonStyles) && $('.info').append( objectInfo2 ); }
    else if (keyword === '3') { svg.style('.color, .hue { fill: #ffb7ae; } ' + commonStyles) && $('.info').append( objectInfo3 ); }
    else if (keyword === '4') { svg.style('.color, .hue { fill: #ff9c76; } ' + commonStyles) && $('.info').append( objectInfo4 ); }
    else if (keyword === '5') { svg.style('.color, .hue { fill: #eac4be; } ' + commonStyles) && $('.info').append( objectInfo5 ); }

    else if (keyword === '6') { svg.style('.color, .hue { fill: #f4c3cb; } ' + commonStyles) && $('.info').append( objectInfo6 ); }
    else if (keyword === '7') { svg.style('.color, .hue { fill: #ffabc2; } ' + commonStyles) && $('.info').append( objectInfo7 ); }
    else if (keyword === '8') { svg.style('.color, .hue { fill: #e4bdd0; } ' + commonStyles) && $('.info').append( objectInfo8 ); }
    else if (keyword === '9') { svg.style('.color, .hue { fill: #cf8fa4; } ' + commonStyles) && $('.info').append( objectInfo9 ); }
    else if (keyword === 'A') { svg.style('.color, .hue { fill: #dcb6ba; } ' + commonStyles) && $('.info').append( objectInfoA ); }
    else if (keyword === 'B') { svg.style('.color, .hue { fill: #eebae9; } ' + commonStyles) && $('.info').append( objectInfoB ); }

    else if (keyword === 'C') { svg.style('.color, .hue { fill: #e0cfd6; } ' + commonStyles) && $('.info').append( objectInfoC ); }
    else if (keyword === 'D') { svg.style('.color, .hue { fill: #cda2d9; } ' + commonStyles) && $('.info').append( objectInfoD ); }
    else if (keyword === 'E') { svg.style('.color, .hue { fill: #c9b7e8; } ' + commonStyles) && $('.info').append( objectInfoE ); }
    else if (keyword === 'F') { svg.style('.color, .hue { fill: #aca8c7; } ' + commonStyles) && $('.info').append( objectInfoF ); }
    else if (keyword === 'G') { svg.style('.color, .hue { fill: #a7b2e8; } ' + commonStyles) && $('.info').append( objectInfoG ); }
    else if (keyword === 'H') { svg.style('.color, .hue { fill: #7993a5; } ' + commonStyles) && $('.info').append( objectInfoH ); }

    else if (keyword === 'I') { svg.style('.color, .hue { fill: #afc3dc; } ' + commonStyles) && $('.info').append( objectInfoI ); }
    else if (keyword === 'J') { svg.style('.color, .hue { fill: #a9c8f4; } ' + commonStyles) && $('.info').append( objectInfoJ ); }
    else if (keyword === 'K') { svg.style('.color, .hue { fill: #a7d4ee; } ' + commonStyles) && $('.info').append( objectInfoK ); }
    else if (keyword === 'L') { svg.style('.color, .hue { fill: #8298bd; } ' + commonStyles) && $('.info').append( objectInfoL ); }
    else if (keyword === 'M') { svg.style('.color, .hue { fill: #67a5bf; } ' + commonStyles) && $('.info').append( objectInfoM ); }
    else if (keyword === 'N') { svg.style('.color, .hue { fill: #6eb2bd; } ' + commonStyles) && $('.info').append( objectInfoN ); }

    else if (keyword === 'O') { svg.style('.color, .hue { fill: #6bd9de; } ' + commonStyles) && $('.info').append( objectInfoO ); }
    else if (keyword === 'P') { svg.style('.color, .hue { fill: #94b7bc; } ' + commonStyles) && $('.info').append( objectInfoP ); }
    else if (keyword === 'Q') { svg.style('.color, .hue { fill: #6aceb9; } ' + commonStyles) && $('.info').append( objectInfoQ ); }
    else if (keyword === 'R') { svg.style('.color, .hue { fill: #a9bab7; } ' + commonStyles) && $('.info').append( objectInfoR ); }
    else if (keyword === 'S') { svg.style('.color, .hue { fill: #6bac92; } ' + commonStyles) && $('.info').append( objectInfoS ); }
    else if (keyword === 'T') { svg.style('.color, .hue { fill: #a7d9bc; } ' + commonStyles) && $('.info').append( objectInfoT ); }

    else if (keyword === 'U') { svg.style('.color, .hue { fill: #b7e394; } ' + commonStyles) && $('.info').append( objectInfoU ); }
    else if (keyword === 'V') { svg.style('.color, .hue { fill: #c7ca9c; } ' + commonStyles) && $('.info').append( objectInfoV ); }
    else if (keyword === 'W') { svg.style('.color, .hue { fill: #d4e458; } ' + commonStyles) && $('.info').append( objectInfoW ); }
    else if (keyword === 'X') { svg.style('.color, .hue { fill: #ebe081; } ' + commonStyles) && $('.info').append( objectInfoX ); }
    else if (keyword === 'Y') { svg.style('.color, .hue { fill: #cabe96; } ' + commonStyles) && $('.info').append( objectInfoY ); }
    else if (keyword === 'Z') { svg.style('.color, .hue { fill: #dfa880; } ' + commonStyles) && $('.info').append( objectInfoZ ); }

    else {
      $('body').append(
        $('<div class="error"><strong>ERROR!</strong> Please, make sure it is (i) a word formed by characters from A to Z and/or numbers from 9 to 0; and (ii) all letters are in uppercase.</div>')
      );
    }
  }

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

}

function pageFullyLoaded(e) {

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  //
  var svgObjectId = $('svg').attr('id');

  //
  document.title = svgObjectId.slice(7);
  $('body').addClass( svgObjectId );

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  $('body'). removeClass('hidden').addClass('fadeIn');

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

}