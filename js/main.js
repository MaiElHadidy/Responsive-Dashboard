$( document ).ready(function() {

//arrow toggle
    $(".collapsed").click(function() {
      $(this).find(".arrow-toggle").toggleClass("fa-angle-down").toggleClass("fa-angle-right")
    });
    
//charts
 google.charts.load('current', {'packages':['corechart']});

      //chart1
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'October 2013', 'November 2013'],
          ['2006',  100, 90],
          ['2007',  75, 65],
          ['2008',  50, 40],
          ['2009',  75, 65],
          ['2010',  50, 40],
          ['2011',  75, 65],
          ['2012',  100, 90]
        ]);

        var options = {
          curveType: 'function',
          pointSize: 5,
          legend: { position: 'none' },
          series: {
                0: { pointShape: 'circle' },
                1: { pointShape: 'circle' },
            },
          chartArea:{left:30,top:30,bottom: 30,width:'90%',height:'90%'},
          colors:['#0064a2','#7796aa'],
          tooltip: { isHtml: true },
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);

      }

      //chart2
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          [ 'x','Download', 'Upload'],
          [0,460, 400],
          [1,540, 460],
          [2,660, 330],
          [3,460, 540],
          [4,540, 400],
          [5,570, 460],
          [6,660, 330],
          [7,570, 540],
          [8,460, 540],
          [9,540, 400],
          [10,570, 460],
          [11,660, 330],
          [12,570, 540],
          [13,460, 400],
          [14,540, 460],
          [15,660, 330],
          [16,460, 540],
          [17,540, 400],
          [18,570, 460],
          [19,660, 330],
          [20,570, 540],
          [21,460, 540],
          [22,540, 400],
          [23,570, 460],
          [24,660, 330],
          [25,570, 540]
        ]);

        var options = {
          legend: { position: 'top' },
          colors:['#ddf3ff','#61c9fc'],
          chartArea:{left:30,top:30,bottom:30,width:'130%',height:'130%'},
          xAxis:{isHtml:true},
          
        };

        var chart2 = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart2.draw(data, options);
      }

      //Geo map
      google.charts.load('current', {
          'packages':['geochart'],
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {
          var data = google.visualization.arrayToDataTable([
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]
          ]);

          var options = {
            region: '155', // Europe
            //chartArea:{width:'100%',height:'130%'},
            backgroundColor: 'black',
            datalessRegionColor: 'white',
            colors:['black','white'],
            defaultColor: 'white',
            magnifyingGlass:{enable: true, zoomFactor: 10},
            colorAxis: {colors: ['black', 'white']}
          };

          var chart3 = new google.visualization.GeoChart(document.getElementById('regions_div'));

          chart3.draw(data, options);
        }

});
       