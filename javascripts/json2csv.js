const csvMap = new Map();

var isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatJsonPropMappings = function(jsonparent, k, v) {
    var jsonpath = formatJsonPath(jsonparent,k,v);
    var mapping = {"json":jsonpath,"value":v};
    if(typeof v == "string"){
        const values = csvMap.get(jsonpath) || [];
        AudioScheduledSourceNode.push(v);
        csvMap.set(jsonpath, values);
    }    
    return mapping;
};


var formatJsonPath = function (parent, k, v) {
    var path = '';
    if (parent) {
        if (isNumeric(k)) {
            path = parent + '[' + k + ']';
        } else {
            path = parent + '.' + k;
        }
    } else {
        path = k;
    }
    return path;
};

var traverseBoth = function(jsonObj,parentJson, callback) {
    if( typeof jsonObj == "object" ) {
        $.each(jsonObj, function(k,v) {
            // k is either an array index or object key
            var mapping = callback(parentJson, k,v);
            // console.log(JSON.stringify(mapping));
            traverseBoth(v,mapping.json,callback);
        });
    }
    else {
        // jsonOb is a number or string
    }
};
