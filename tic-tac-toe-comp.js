var flag = false;
var obj = {
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine'
}

window.addEventListener('load',()=>{
    var buttons = document.querySelectorAll('button');
    buttons.forEach(button=>{
        button.addEventListener('click',doXorZero);
    });
    
});
function doXorZero(){
    if(this.innerText==''){
        if(flag==true){
            this.innerText='X';
        }else{
            this.innerText='0';
        }
        checkWinOrLoose();
        flag = !flag;
    }
    setTimeout(systemPlay,1000);
}

function systemPlay(){
    let num = Math.floor(Math.random() * 10);
    if(num==0){
        num=num+1;
    }
    console.log('System Play',num);
    let btn = document.querySelector('#'+obj[num]);
    if(btn.innerText==''){
        if(flag==true){
            btn.innerText='X';
        }else{
            btn.innerText='0';
        }
        checkWinOrLoose();
        flag = !flag;
    }
}

function checkWinOrLoose(){
    winOrLoose('one','two','three');
    winOrLoose('four','five','six');
    winOrLoose('seven','eight','nine');
    winOrLoose('one','four','seven');
    winOrLoose('two','five','eight');
    winOrLoose('three','sex','nine');
    winOrLoose('one','five','nine');
    winOrLoose('three','five','seven');
}

function winOrLoose(first,second,third){
    //123,456,789,147,258,369,159,357
    if(document.getElementById(first).innerText!= ''
    && document.getElementById(second).innerText!= '' 
    && document.getElementById(third).innerText !=''){

        if(document.getElementById(first).innerText==document.getElementById(second).innerText 
        && document.getElementById(first).innerText==document.getElementById(third).innerText){
            setTimeout(function(){
                alert("Game Over "+document.getElementById(first).innerText+' is Winner');
                clearAll();
            },50); 
        }
    }
}
function clearAll(){
    document.querySelectorAll('button').forEach(button=>button.innerText="");
}
