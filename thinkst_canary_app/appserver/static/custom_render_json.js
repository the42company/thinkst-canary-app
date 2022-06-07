require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/tableview',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, TableView) {
    var CustomRangeRenderer = TableView.BaseCellRenderer.extend({
        canRender: function(cell) {
            return _(['eventBlob']).contains(cell.field);
        },
        render: function($td, cell) {
            var value = JSON.stringify(JSON.parse(cell.value), undefined, 2);
            $td.html("<div><pre>" + value + "</pre></div>")
        }
    });
    var sh = mvc.Components.get("tbl_1");
    if (typeof(sh) != "undefined") {
        sh.getVisualization(function(tableView) {
            // Add custom cell renderer and force re-render
            tableView.table.addCellRenderer(new CustomRangeRenderer());
            tableView.table.render();
        });
    }
});
