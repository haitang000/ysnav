// 定义一个函数，用于计算网站运行时间
function siteTime(){
    // 每隔1秒调用一次siteTime函数
    window.setTimeout("siteTime()", 1000);
    // 定义一些时间单位
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    // 获取当前时间
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth()+1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();

    // 定义一个时间点，这里以2024年8月15日13时19分17秒为例
    var t1 = Date.UTC(2025,0o1,5,13,19,17);
    // 获取当前时间的时间戳
    var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
    // 计算两个时间点之间的差值
    var diff = t2-t1;
    // 计算差值中的年、天、时、分、秒
    var diffYears = Math.floor(diff/years);
    var diffDays = Math.floor((diff/days)-diffYears*365);
    var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
    var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
    var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
    // 将计算结果显示在页面上
    document.getElementById("sitetime").innerHTML="本站已运行"+diffYears+"年"+diffDays+"天"+diffHours+"时"+diffMinutes+"分钟"+diffSeconds+"秒";
}

// 调用siteTime函数
siteTime();