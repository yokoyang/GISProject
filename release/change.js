/**
 * Created by 13987 on 2017/6/17.
 */
function hello() {

    var place = $('.esriImpedanceCost').empty();
    //
    //
    // $("<b>花费时间：</b>").appendTo(".esriResultsSummary");
    var t = getKM().toString();
    t = t.split('.')[0];
    place.text(t + "分钟");
    // console.log(getKM().toString());
}
var lenth;
function getKM() {
    var text = $('.esriOtherCosts').text();
    t = text.split(' ')[0];
    lenth = parseFloat(t.substr(5));
    return lenth * 1.7;
}
function startLoop() {
    //重复执行某个方法
    var t1 = window.setInterval(hello, 100);

}
