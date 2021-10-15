var array = [40, 100, 1, 5, 25, 10];
array.sort(function(a, b){//直接使用sort排序會依照unicode排序，使用比較函式兩兩代入比較可排出數字順序
    return a - b;
});
document.write(array); 