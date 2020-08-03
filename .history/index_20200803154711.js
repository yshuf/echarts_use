that.myChart = echarts.init(document.getElementById("chart1"));
that.myChart.setOption({
    // 图例
    legend: {
        data: ['销量'],
    },
    // x轴
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    // y轴
    yAxis: {},
    // 数据
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 30,
        data: [5, 20, 36, 10, 10, 20],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                        offset: 0,
                        color: "#00CCFF" // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: "#005AFF" // 100% 处的颜色
                    }
                    ],
                    false
                ),
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: "rgba(25, 122, 255, 0.88)",
                shadowBlur: 12
            }
        },
    },],
})