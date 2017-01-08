var Utils = Utils || {};
Utils.amazon = {
    onlyASINRegex: new RegExp("([a-zA-Z0-9]{10})"),

    extractASIN: function(url) {
        var regex = new RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
        var m = url.match(regex);
        if (m) {
            return m[0].replace(new RegExp('\/', 'g'), '');
        }
        return '';
    },
    isValidASIN: function(input) {
        return onlyASINRegex.test(input);
    },
    createCleanAffiliateURL : function(url, asin, tag) {
        var asinEnd = url.indexOf(asin) + asin.length;
        var cleanurl = url.substring(0, asinEnd) + '?tag=' + tag;
        return cleanurl;

    }

};
