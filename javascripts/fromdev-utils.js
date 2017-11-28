var Utils = Utils || {};
Utils.amazon = {
    onlyASINRegex: new RegExp("([a-zA-Z0-9]{10})"),

    extractASIN: function(url) {
        var regex = new RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
        var m = url.match(regex);
        if (m) {
            return m[0].replace(new RegExp('\/|\\?', 'g'), '');
        }
        return '';
    },
    isValidASIN: function(input) {
        return input && input.length == 10  && this.onlyASINRegex.test(input);
    },
    createCleanAffiliateURL: function(url, asin, tag) {
        tag = tag || 'fromdevtools-20';
        return this.getCleanURL(url) + '?tag=' + tag;
    },
    getCleanURL : function(url, asin) {
        var cleanurl = url;
        asin = asin || this.extractASIN(url);
        if (asin) {
            var asinIndex = url.indexOf(asin);
            if (asinIndex > -1) {
                var asinEnd = asinIndex + asin.length;
                cleanurl = url.substring(0, asinEnd);
            }
        }
        return cleanurl;
    }

};
//wrapper around storage to use only if supported
Utils.storage = {
    setItem: function(key, value) {
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem(key, value);
        }
    },

    getItem: function(key) {
        if (typeof(Storage) !== "undefined") {
            return localStorage.getItem(key);
        }
        return '';
    },
    getJSON : function(key) {
      var jsonObject;
      try {
        jsonObject = JSON.parse(StorageUtils.getItem(key)); // this is how you parse a string into JSON
      } catch (ex) {
        console.error(ex);
      }
      return jsonObject;
    }
};

Utils.arrayutil = {
    removeDuplicates : function(arr) {
        var uniques = [];
        if(arr) {
            arr.forEach(function(item) {
                if(uniques.indexOf(item) < 0) {
                    uniques.push(item);
                }
            });
        }
        return uniques;

    },
    shuffle : function(array) {
        var counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            var index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            var temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }
};

Utils.urlutil = {
    extractDomain : function(url) {
        var domain = '';
        if(url) {
            //find & remove protocol (http, ftp, etc.) and get domain
            if (url.indexOf("://") > -1) {
                domain = url.split('/')[2];
            } else {
                domain = url.split('/')[0];
            }
            //find & remove port number
            domain = domain.split(':')[0];
        }
        return domain;
    },
    extractDomainList : function(arr) {
        var domains = [];
        if(arr) {
            arr.forEach(function(item) {
                domains.push(Utils.urlutil.extractDomain(item));
            });
        }
        return domains;
    }
};

Utils.randomutil = {
    getRandomInt : function(min, max) {
        min = min || 0;
        max = max || 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

Utils.logutil = {
    log : function(msg) {
        if (debug) {
            console.log(msg);
        }
    }
};

var AmazonUtils = Utils.amazon;
var StorageUtils = Utils.storage;
var ArrayUtils = Utils.arrayutil;
var UrlUtils = Utils.urlutil;
var RandomUtils = Utils.randomutil;
var LogUtils = Utils.logutil;
