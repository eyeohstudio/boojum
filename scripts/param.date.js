jQuery(document).ready(function ($) {

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

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