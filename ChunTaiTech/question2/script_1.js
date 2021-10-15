var x = parseInt(prompt("請告訴我x數值多少"));
var y = parseInt(prompt("請告訴我y數值多少"));

if (x>y){
    var max = x;
    document.write("將 max 賦值為 x, 數值是" + max);
}else if(x<y){
    var max = y;
    document.write("將 max 賦值為 y, 數值是" + max);
}else{
    document.write("x 等於 y")
};