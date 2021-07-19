var mappings = [];

var isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatJsonPropMappings = function(jsonparent, k, v, context) {
    var jsonpath = formatJsonPath(jsonparent,k,v, context);
    var mapping = {"json":jsonpath,"value":v};
    const vtype = typeof v;
    if(vtype === "string" || vtype === 'number') {
      const path = (context.enclose) ?
        `${context.enclose}${jsonpath}${context.enclose}=${context.enclose}${v}${context.enclose}`
        : `${jsonpath}=${v}`;
      mappings.push(path);
    }
    return mapping;
};


var formatJsonPath = function (parent, k, v, context) {
    var path = '';
    const separator = ((context && context.separator) ? context.separator : '.') || '.';
    if (parent) {
        if (isNumeric(k)) {
            path = parent + '[' + k + ']';
        } else {
            path = parent + separator + k;
        }
    } else {
        path = k;
    }

    return path;
};

var traverseBoth = function(jsonObj,parentJson, callback, context) {
    if( typeof jsonObj == "object" ) {
        $.each(jsonObj, function(k,v) {
            // k is either an array index or object key
            var mapping = callback(parentJson, k,v, context);
            // console.log(JSON.stringify(mapping));
            traverseBoth(v,mapping.json,callback, context);
        });
    }
    else {
        // jsonOb is a number or string
    }
};
