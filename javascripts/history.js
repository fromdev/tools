var History = History || {};
History.datatable = undefined;
History.collectAndShow = (Page) => {
    try {
        History.collectHistory(Page);
        History.showHistory(Page.context);
    } catch (e) {
        console.log('history error, ignoring to continue main flow');
        console.log(e);
    }
};
History.fetchHistory = (context) => {
    if (!HistoryUtils) {
        console.log('Include fromdev-utils.js for HistoryUtils');
        return;
    }

    let historyTable = HistoryUtils.findAll(context.tableName) || [];
    historyTable = historyTable.sort((a, b) => (b.timestamp - a.timestamp));
    return historyTable;
};
History.showHistory = (context) => {
    const historyTable = History.fetchHistory(context);
    if (!Array.isArray(historyTable)) return;
    if (History.datatable) {
        History.datatable.clear();
        $(context.containerId).empty();
    }
    if (!context.createTableHeader || !context.createRow) {
        console.log('createTableHeader() and createRow() callback required');
        return;
    }
    const rows = [];
    rows.push(context.createTableHeader());
    historyTable.forEach(r => rows.push(context.createRow(r)));
    $(context.containerId).html(`<table class="table table-hover"></table>`);
    const $table = $(`${context.containerId} table`);
    $table.append(rows.join(''));
    History.datatable = $table.DataTable();
};

History.collectHistory = (Page) => {
    HistoryUtils.append(Page.context.tableName, Page.request);
};
