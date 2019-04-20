const gu="グーを出しました<br>";
const choki="チョキを出しました<br>";
const pa="パーを出しました<br>";
const computer="<br>コンピュータは<br>";
const you="<br>あなたは<br>";

let user=-99;

function janken_gu(){
    user=0;
    janken_program();
}
function janken_choki(){
    user=1;
    janken_program();
}
function janken_pa(){
    user=2;
    janken_program();
}

function janken_program(){
    let cp= new Date();
    cp=cp.getSeconds();
    cp%=3;
    //let user=document.janken.j_number.value;
  //  document.write("hello");
    //document.write(html_message);
    if(cp==0){
        document.write(computer+gu);
        //document.wirte("<img src='/gu.jpg' alt='グー' title='グー'>");
    }
    if(cp==1){
        document.write(computer+choki); 
    }
    if(cp==2){
        document.write(computer+pa);
    }
    if(user==0){
        document.write(you+gu);
        //document.wirte("<img src='/gu.jpg' alt='グー' title='グー'>");
    }
    if(user==1){
        document.write(you+choki);
    }
    if(user==2){
        document.write(you+pa);
    }
    if(cp==user){
        document.write("<br><h3>あいこです。</h3><br>");
    }
    if(cp-user==1||cp-user==-2){
        document.write("<br><h3>あなたの勝ちです</h3><br>");
    }
    if(user-cp==1||user-cp==-2){
        document.write("<br><h3>コンピュータの勝ちです</h3><br>");
    }
    document.write('<br><br><a href="hello.html">次のゲーム</a>');
}