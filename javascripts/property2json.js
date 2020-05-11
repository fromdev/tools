const property2json = function(propkeyarr, value, json) {
    if(!json) json = {};
    if(!propkeyarr) return json;
    if(!value) return json;
    let parent = json;
    for(let i = 0; i < propkeyarr.length; i++ ) {
        let name = cleanse(propkeyarr[i]);
        if(i === propkeyarr.length-1) {
            parent[name] = value;
        } else {
            parent[name] = parent[name] || {};
            parent = parent[name];
        }
    }
    return json;
};

const cleanse = function(name) {
    try {
        return name.split(' ').join('');
    } catch(e) {
        return name;
    }
   
}