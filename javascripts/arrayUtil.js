var removeDuplicates = function(arr) {
    var uniques = [];
    $.each(arr, function(i, el) {
        if ($.inArray(el, uniques) === -1) uniques.push(el);
    });
    return uniques;
};
