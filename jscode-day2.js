var str = 'dhananjay';
undefined
str
'dhananjay'
str.length
9
str.toUpperCase();
'DHANANJAY'
var capName = str.toUpperCase();
undefined
capName
'DHANANJAY'
capName.toLowerCase();
'dhananjay'
str
'dhananjay'
str.charAt()
'd'
str.charAt(0)
'd'
str.charAt(8)
'y'
str.charAt(9)
''
str.charAt(90)
''
str.substr(2,5)
'ananj'
str.substring(2,5)
'ana'
str.reverse();
VM530:1 Uncaught TypeError: str.reverse is not a function
    at <anonymous>:1:5
(anonymous) @ VM530:1
str.substring(2,5+1)
'anan'
var str2 = 'my name is Dhananjay';
undefined
str2.length;
20
str2.split()
['my name is Dhananjay']0: "my name is Dhananjay"length: 1[[Prototype]]: Array(0)
str2.split(' ');
(4) ['my', 'name', 'is', 'Dhananjay']
