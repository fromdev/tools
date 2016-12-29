var extractDomain = function(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    } else {
        domain = url.split('/')[0];
    }
    //find & remove port number
    domain = domain.split(':')[0];
    return domain;
};
var extractDomainList = function(arr) {
    var domains = [];
    $.each(arr, function(i, el) {
        domains.push(extractDomain(el));
    });
    return domains;
};
