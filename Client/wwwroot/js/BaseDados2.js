function CriarGraficoBase(bseDados2) {
    am4core.options.autoDispose = true;
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart
        var chart = am4core.create("chartdiv3", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0;
        chart.data = bseDados2;
        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.radiusValue = "value";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 6;
        series.colors.step = 3;
        series.hiddenState.properties.endAngle = -90;
        chart.legend = new am4charts.Legend();
    });
}