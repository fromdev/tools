var Utils = Utils || {};
Utils.amazon = {
    onlyASINRegex: new RegExp("([a-zA-Z0-9]{10})"),

    extractASIN: function (url) {
        var regex = new RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
        var m = url.match(regex);
        if (m) {
            return m[0].replace(new RegExp('\/|\\?', 'g'), '');
        }
        return '';
    },
    isValidASIN: function (input) {
        return input && input.length == 10 && this.onlyASINRegex.test(input);
    },
    createCleanAffiliateURL: function (url, tag) {
        const cleanurl = AmazonUtils.getCleanURL(url);
        return AmazonUtils.addAffiliateTag(cleanurl, tag);
    },
    getCleanURL: function (url, asin) {
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
    },
    addAffiliateTag: (url, tag) => {
        const affiliateTag = tag || 'fromdevtools-20';
        const params = UrlUtils.getUrlVars(url);
        const tagVal = params['tag'];
        let updatedUrl = url;
        if (tagVal) {
            updatedUrl = url.replace('tag=' + tagVal, 'tag=' + affiliateTag);
        } else if (url.indexOf('?') === -1) {
            updatedUrl = url + '?tag=' + affiliateTag;
        } else {
            updatedUrl = url.replace('?', '?tag=' + affiliateTag + '&');
        }
        return updatedUrl;
    }
};
//wrapper around storage to use only if supported
Utils.storage = {
    setItem: function (key, value) {
        if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem(key, value);
        }
    },

    getItem: function (key) {
        if (typeof (Storage) !== "undefined") {
            return localStorage.getItem(key);
        }
        return '';
    },
    getJSON: function (key) {
        var jsonObject;
        try {
            jsonObject = JSON.parse(StorageUtils.getItem(key)); // this is how you parse a string into JSON
        } catch (ex) {
            console.error(ex);
        }
        return jsonObject;
    }
};

Utils.history = {
    MAX: 1000,
    append: (historyTableName, row) => {
        if(!historyTableName || !row) return;
        const historyTable = StorageUtils.getJSON(historyTableName) || [];
        row.timestamp = Date.now();
        historyTable.unshift(row);
        //limit max history to avoid too large array
        if(historyTable.length > HistoryUtils.MAX) {
            historyTable.length = HistoryUtils.MAX;
        }
        StorageUtils.setItem(historyTableName, JSON.stringify(historyTable));
    },
    findAll: (historyTableName) => {
        if(!historyTableName) return [];
        return StorageUtils.getJSON(historyTableName) || [];
    }
};

Utils.arrayutil = {
    removeDuplicates: function (arr) {
        var uniques = [];
        if (arr) {
            arr.forEach(function (item) {
                if (uniques.indexOf(item) < 0) {
                    uniques.push(item);
                }
            });
        }
        return uniques;

    },
    shuffle: function (array) {
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
    },
    nextRandomItem: (array) => {
        return (!array) ? undefined : array[Utils.randomutil.getRandomInt(0,array.length)];
    }
};

Utils.urlutil = {
    extractDomain: function (url) {
        var domain = '';
        if (url) {
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
    extractDomainList: function (arr) {
        var domains = [];
        if (arr) {
            arr.forEach(function (item) {
                domains.push(Utils.urlutil.extractDomain(item));
            });
        }
        return domains;
    },
    getUrlParam: (paramName) => {
      try {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const paramValue = (urlParams) ? urlParams.get(paramName) : '';
          return paramValue || '';
      } catch (e) {
          return JSON.stringify(e);
      }
    },
    isValidURL: (s) => {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
    },
    getUrlVars: () => {
        var vars = [],
          hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
        }
        return vars;
      }
};

Utils.randomutil = {
    getRandomInt: function (min, max) {
        min = min || 0;
        max = max || 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

Utils.logutil = {
    log: function (msg) {
        if (debug) {
            console.log(msg);
        }
    }
};

Utils.mathutil = {
    standardDeviation: function (values) {
        const average = function (data) {
            const sum = data.reduce((s, value) => s + value, 0);
            const avg = sum / data.length;
            return avg;
        };
        const avg = average(values);
        const squareDiffs = values.map((value) => {
            const diff = value - avg;
            const sqrDiff = diff * diff;
            return sqrDiff;
        });

        const avgSquareDiff = average(squareDiffs);

        const stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    }
};

Utils.textutil = {
    guessSeparator: (inVal) => {
        const newlineSeparator = {
            name: 'Newline',
            value: '\n',
            displayValue: '\\n'
        };
        const supportedSeparators = [
            newlineSeparator,
            {
                name: 'Comma',
                value: ','
            },
            {
                name: 'Colon',
                value: ':'
            },
            {
                name: 'Semicolor',
                value: ';'
            },
            {
                name: 'Tab',
                value: '\t',
                displayValue: '\\t'
            },
            {
                name: 'PIpe',
                value: '|'
            }
        ];
        const separator = (inVal) ? supportedSeparators.find(v => inVal.indexOf(v.value) > -1) : newlineSeparator;
        return separator || newlineSeparator;
    }
};
Utils.wordutil = {
    wordCount: (val) => {
        var wom = val.match(/\S+/g);
        const uniques = new Set((wom || []).filter(a => a).map(a=>a.toLowerCase()));
        return {
            charactersNoSpaces: val.replace(/\s+/g, '').length,
            characters: val.length,
            words: wom ? wom.length : 0,
            lines: val.split(/\r*\n/).length,
            uniques: uniques.size
        };
    }

};

const AmazonUtils = Utils.amazon;
const StorageUtils = Utils.storage;
const ArrayUtils = Utils.arrayutil;
const UrlUtils = Utils.urlutil;
const RandomUtils = Utils.randomutil;
const LogUtils = Utils.logutil;
const MathUtils = Utils.mathutil;
const TextUtils = Utils.textutil;
const WordUtils = Utils.wordutil;
const HistoryUtils = Utils.history;
