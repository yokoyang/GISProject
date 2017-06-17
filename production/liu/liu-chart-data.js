option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['内环内', '外环外', '外环至中环', '中环至内环']
    },
    series: [
        {
            name: '文化创意产业',
            type: 'pie',
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
            data: [
                {value: 40, name: '内环内'},
                {value: 24, name: '外环外'},
                {value: 14, name: '外环至中环'},
                {value: 22, name: '中环至内环'}
            ]
        }
    ]
};

var xAxisData = [];
var data1 = [];
for (var i = 1; i < 60; i++) {
    xAxisData.push(i);
    var a = Math.pow(i, 0.2);
    var b = 593.5;
    var c = 224.7;
    var density = b / a - c;
    data1.push(density);
}
option2 = {
    title: {
        text: '文化产业数目与距离市中心直线距离',
    },
    legend: {
        data: ['bar', 'bar2'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {},
    series: [{
        name: '距离',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};
//环同济经济圈文化产业链的分析数据
//杨浦区文化产业个数为3317个
//同济文化产业个数为519
//杨浦区文化创意产业总产值为368亿元
//同济文化创意产业产值为185亿元


window.onload = function () {
    var myChart = echarts.init(document.getElementById('pie-chart-dis'));
    var myChart2 = echarts.init(document.getElementById('pie-chart-dis2'));
    myChart.setOption(option);

    myChart2.setOption(option2);
};