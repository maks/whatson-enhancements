<div id="calendar"></div>

<script src="%globals_asset_href:110430%"></script>
<script src="%globals_asset_href:551895%"></script>

<script>
    var weekRange = function(dateText) {
      var d = Date.parseExact(dateText, "yyyy-M-d");
      return d.last().monday().toString("yyyy-M-d")+","+d.next().sunday().next().sunday().toString("yyyy-M-d");
    }

    $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        minDate: new Date(),
        hideIfNoPrevNext: true,
        dateFormat: "yy-mm-dd",
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        onSelect: function(dateText, inst) {
            window.location.search = "period="+weekRange(dateText);
        }
    });
    var startDateParam = window.location.search.match(/(\d\d\d\d-\d+-\d+),/)[1];
    var endDateParam = window.location.search.match(/,(\d\d\d\d-\d+-\d+)$/)[1];

    console.log("str:"+startDateParam+" end:"+endDateParam);

    if (startDateParam && startDateParam[1]) {
       $('#calendar').datepicker("setDate", startDateParam[1]);
    }

</script>