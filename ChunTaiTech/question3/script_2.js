for (var i = 0;i<=100;i++){//i初始值設為0，i每loop一次賦值i=i+1
if(i % 2===1)continue //對目前的i求餘數，if 除以2餘數為0 表示i是偶數
    document.write(i);
    document.write("<br>");
}