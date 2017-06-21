/**
 * Created by 13987 on 2017/6/22.
 */
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['黄浦教育科技产业', '黄浦文化创意产业']
    },
    series: [
        {
            name: '占比',
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
                {value: 36.21, name: '黄浦教育科技产业'},
                {value: 63.79, name: '黄浦文化创意产业'}
            ]
        }
    ]
};

option2 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['杨浦教育科技产业', '杨浦文化创意产业']
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
                {value: 70.21, name: '杨浦教育科技产业'},
                {value: 29.79, name: '杨浦文化创意产业'}
            ]
        }
    ]
};

option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['黄浦教育科技产业', '黄浦文化创意产业']
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
                {value: 25.56, name: '黄浦教育科技产业'},
                {value: 74.44, name: '黄浦文化创意产业'}
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
        data: ['杨浦教育科技产业', '杨浦文化创意产业']
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
                {value: 39.01, name: '杨浦教育科技产业'},
                {value: 60.99, name: '杨浦文化创意产业'}
            ]
        }
    ]
};

option5 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['黄浦教育科技产业', '黄浦文化创意产业']
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
                {value: 32.58, name: '黄浦教育科技产业'},
                {value: 67.42, name: '黄浦文化创意产业'}
            ]
        }
    ]
};

option6 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['杨浦教育科技产业', '杨浦文化创意产业']
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
                {value: 44.82, name: '杨浦教育科技产业'},
                {value: 55.18, name: '杨浦文化创意产业'}
            ]
        }
    ]
};

//环同济经济圈内新文化产业区域的开发选址模型
var dataAxis = ['同济绿园', '恒联新天地花园', '新凤城', '公交新村', '同济新村', '大运省城', '鞍山八村', '鞍山六村', '凤城五村', '鞍山四村第二小区', '凤城三村'];
var data = [-33, -36, -52, -29, 15, -30, -12, 25, 3, -71, 22];





window.onload = function () {

    var myChart6 = echarts.init(document.getElementById('pie-chart-dis6'));
    var myChart7 = echarts.init(document.getElementById('pie-chart-dis7'));
    var myChart8 = echarts.init(document.getElementById('pie-chart-dis8'));
    var myChart9 = echarts.init(document.getElementById('pie-chart-dis9'));
    var myChart10 = echarts.init(document.getElementById('pie-chart-dis10'));
    var myChart11 = echarts.init(document.getElementById('pie-chart-dis11'));

    myChart6.setOption(option);
    myChart7.setOption(option2);
    myChart8.setOption(option3);
    myChart9.setOption(option4);
    myChart10.setOption(option5);
    myChart11.setOption(option4);
};