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
        text: '数目y, 距离x km'
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


option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['杨浦区其余部分', '同济经济圈']
    },
    series: [
        {
            name: '文化产业个数占比',
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
                {value: 2798, name: '杨浦区其余部分'},
                {value: 519, name: '同济经济圈'}
            ]
        }
    ]
};

option4 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['杨浦区其余部分', '同济经济圈']
    },
    series: [
        {
            name: '文化产业个数产值占比',
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
                {value: 183, name: '杨浦区其余部分'},
                {value: 185, name: '同济经济圈'}
            ]
        }
    ]
};


//环同济经济圈内新文化产业区域的开发选址模型
var dataAxis = ['同济绿园', '恒联新天地花园', '新凤城', '公交新村', '同济新村', '大运省城', '鞍山八村', '鞍山六村', '凤城五村', '鞍山四村第二小区', '凤城三村'];
var data = [-33, -36, -52, -29, 15, -30, -12, 25, 3, -71, 22];


option5 = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['同济绿园', '恒联新天地花园', '新凤城', '公交新村', '同济新村', '大运省城', '鞍山八村', '鞍山六村', '凤城五村', '鞍山四村第二小区', '凤城三村'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '价值',
            type: 'bar',
            barWidth: '60%',
            data: [-33, -36, -52, -29, 15, -30, -12, 25, 3, -71, 22]
        }
    ]
};


window.onload = function () {
    var myChart = echarts.init(document.getElementById('pie-chart-dis'));
    var myChart2 = echarts.init(document.getElementById('pie-chart-dis2'));
    var myChart3 = echarts.init(document.getElementById('pie-chart-dis3'));
    var myChart4 = echarts.init(document.getElementById('pie-chart-dis4'));
    var myChart5 = echarts.init(document.getElementById('pie-chart-dis5'));

    myChart.setOption(option);

    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    myChart5.setOption(option5)
};