/**
 * Created by 13987 on 2017/6/17.
 */
option = {
    title: {
        text: '杨浦区文化产业比重',
        subtext: '文化产业',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['文化创意产业', '非文化创意产业']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 7, name: '文化创意产业'},
                {value: 93, name: '非文化创意产业'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
option2 = {
    title: {
        text: '嘉定区文化产业比重',
        subtext: '文化产业',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['文化创意产业', '非文化创意产业']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 4, name: '文化创意产业'},
                {value: 96, name: '非文化创意产业'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

option3 = {
    title: {
        text: '杨浦区各类型文化创意产业',
        subtext: '文化产业',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['书店', '文化艺术', "汽车检修", "其他"]
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 15, name: '书店'},
                {value: 51, name: '文化艺术'},
                {value: 9, name: '汽车检修'},
                {value: 25, name: '其他'}

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

option4 = {
    title: {
        text: '嘉定区各类型文化创意产业',
        subtext: '文化产业',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['书店', '文化艺术', "汽车检修", "其他"]
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 7, name: '书店'},
                {value: 52, name: '文化艺术'},
                {value: 22, name: '汽车检修'},
                {value: 19, name: '其他'}

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
window.onload = function () {
    var myChart = echarts.init(document.getElementById('pie-chart-dis'));
    var myChart2 = echarts.init(document.getElementById('pie-chart-dis2'));
    var myChart3 = echarts.init(document.getElementById('pie-chart-dis3'));
    var myChart4 = echarts.init(document.getElementById('pie-chart-dis4'));

    myChart.setOption(option);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);

};