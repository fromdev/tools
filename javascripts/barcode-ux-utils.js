var BarcodeUxUtils = BarcodeUxUtils || {};

// checksum calculation for GTIN-8, GTIN-12, GTIN-13, GTIN-14, and SSCC
  // based on http://www.gs1.org/barcodes/support/check_digit_calculator
  BarcodeUxUtils.isValidBarcode = (barcode) => {
    // check length
    if (barcode.length < 8 || barcode.length > 18 ||
      (barcode.length != 8 && barcode.length != 12 &&
        barcode.length != 13 && barcode.length != 14 &&
        barcode.length != 18)) {
      return false;
    }

    var lastDigit = Number(barcode.substring(barcode.length - 1));
    var checkSum = 0;
    if (isNaN(lastDigit)) {
      return false;
    } // not a valid upc/ean

    var arr = barcode.substring(0, barcode.length - 1).split("").reverse();
    var oddTotal = 0,
      evenTotal = 0;

    for (var i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return false;
      } // can't be a valid upc/ean we're checking for

      if (i % 2 == 0) {
        oddTotal += Number(arr[i]) * 3;
      } else {
        evenTotal += Number(arr[i]);
      }
    }
    checkSum = (10 - ((evenTotal + oddTotal) % 10)) % 10;

    // true if they are equal
    return checkSum == lastDigit;
  };
  BarcodeUxUtils.validUPC = (input) => (input && input.length === 12);
  BarcodeUxUtils.BARCODES = {
    UPC: {
      validate: (input) => BarcodeUxUtils.validUPC(input) && BarcodeUxUtils.isValidBarcode(input),
      name: 'UPC'
    },
    DEFAULT: {
      validate: (input) => true,
      name: 'DEFAULT'
    }
  };

  BarcodeUxUtils.detectBarcodeFormat = (input) => {
    const incode = input || '';
    if (incode.length === 12) return 'UPC';
    if (incode.length === 13) return 'EAN13';
    if (incode.length === 2) return 'EAN2';
    if (incode.length === 5) return 'EAN5';
    if (incode.length === 8) return 'EAN8';
    if (incode.length === 14) return 'ITF14';
    $('#error').text('Failed to detect barcode format. Using default');
    return 'CODE128';
  };

  BarcodeUxUtils.prepareOptions = (input) => {
    const barcodeOptions = {};
    const selectedFormat = $('#format option:selected').val();
    const format = (selectedFormat === 'autodetect') ? BarcodeUxUtils.detectBarcodeFormat(input) : 'CODE128';
    barcodeOptions.format = format || 'CODE128';
    return barcodeOptions;
  };

  BarcodeUxUtils.validateBarcode = (input) => {
    try {
      const barcodeOptions = BarcodeUxUtils.prepareOptions(input);
      if (input) {
        const barcode = BarcodeUxUtils.BARCODES[barcodeOptions.format] || BarcodeUxUtils.BARCODES.DEFAULT;
        if (!barcode.validate(input)) {
          $('#error').text(`Invalid ${barcode.name} Code, Can not generate barcode`);
          return false;
        }
      }
    } catch (e) {
      $('#error').text('Failed to generate barcode for input');
      return false;
    }
    return true;
  };
  BarcodeUxUtils.generateBarcode = (input) => {
    try {
      const barcodeOptions = BarcodeUxUtils.prepareOptions(input);
      if (input) {
        const canvas = document.getElementById('barcode');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        JsBarcode("#barcode", input, barcodeOptions);
        $('#error').text('');
        $('#autodetect').text(`Using Format: ${barcodeOptions.format}`);
      }
    } catch (e) {
      // failure - default false is returned
      $('#error').text('Failed to generate barcode for input');
      console.log(e);
    }
  };

  BarcodeUxUtils.download = () => {
    $('#error').text('');
    const input = $("#inputText").val();
    if (BarcodeUxUtils.validateBarcode(input)) {
        BarcodeUxUtils.generateBarcode(input);
      ReImg.fromCanvas($("#result canvas")[0]).downloadPng("Barcode.png");
    }
  };

  BarcodeUxUtils.createAmazonUrl = (input) => {
    $('#amazon-url').attr('href', `https://www.amazon.com/s?k=${input}&tag=fromdevtools-20`);
  };
  BarcodeUxUtils.createEbayUrl = (input) => {
    $('#ebay-url').attr('href', `https://www.ebay.com/sch/i.html?_nkw=${input}&_sacat=0`);
  };

  BarcodeUxUtils.createUrls = (input) => {
    createAmazonUrl(input);
    createEbayUrl(input);
  };