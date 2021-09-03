var History = History || {};
History.datatable = undefined;
History.collectAndShow = (context) => {
    try {
        History.collectHistory(context);
        History.showHistory(context);
    } catch (e) {
        console.log('history error, ignoring to continue main flow');
        console.log(e);
    }
};
History.showHistory = (context) => {
    if (!HistoryUtils) {
        console.log('Include fromdev-utils.js for HistoryUtils');
        return;
    }
    const history = HistoryUtils.findAll(context.tableName) || [];
    if (!Array.isArray(history)) return;
    if (History.datatable) {
        datatable.clear();
        $(context.containerId).empty();
    }
    const rows = [];
    if(!context.createTableHeader || !context.createRow) {
        console.log('createTableHeader() and createRow() callback required');
        return;
    }
    rows.push(context.createTableHeader());
    history.forEach(r => rows.push(context.createRow(r)));
    $(context.containerId).html(`<table class="table table-hover"></table>`);
    const $table = $(`${context.containerId} table`);
    $table.append(rows.join(''));
    History.datatable = $table.DataTable();
};
History.collectHistory = (context) => {
    HistoryUtils.append(context.tableName, context);
};
