var mappings = [];

var isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatJsonPropMappings = function(jsonparent, k, v, context) {
    var jsonpath = formatJsonPath(jsonparent,k,v, context);
    var mapping = {"json":jsonpath,"value":v};
    const vtype = typeof v;
    if(vtype === "string" || vtype === 'number'){
      if(context.enclose) {
        path = `${enclose}${jsonpath}${enclose}=${enclose}${v}${enclose}`;
      } else {
        mappings.push(`${jsonpath}=${v}`);
      }
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
