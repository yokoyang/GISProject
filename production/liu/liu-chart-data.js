option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['内环内','外环外','外环至中环','中环至内环']
    },
    series: [
        {
            name:'文化创意产业',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:40, name:'内环内'},
                {value:24, name:'外环外'},
                {value:14, name:'外环至中环'},
                {value:22, name:'中环至内环'}
            ]
        }
    ]
};



window.onload = function () {
    var myChart = echarts.init(document.getElementById('pie-chart-dis'));
    var myChart2 = echarts.init(document.getElementById('pie-chart-dis2'));
    myChart.setOption(option);

    myChart2.setOption(option);
};