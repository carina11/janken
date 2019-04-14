const gu="グーを出しました<br>";
const choki="チョキを出しました<br>";
const pa="パーを出しました<br>";
const computer="コンピュータは<br>";
const you="あなたは<br>";

function janken_program(){
    let cp= new Date();
    cp=cp.getSeconds();
    cp%=3;
    let user=document.janken.j_number.value;
  //  document.write("hello");
    if(cp==0){
        document.write(computer+gu);
    }
    if(cp==1){
        document.write(computer+choki); 
    }
    if(cp==2){
        document.wirte(computer+pa);
    }
    if(user==0){
        document.wirte(you+gu);
    }
    if(user==1){
        document.write(you+choki);
    }
    if(user==2){
        document.write(you+pa);
    }
    if(cp==user){
        document.wirte("あいこです。<br>");
    }
    if(cp-user==1||cp-user==-2){
        document.write("あなたの勝ちです<br>");
    }
    if(user-cp==1||user-cp==-2){
        document.write("コンピュータの勝ちです<br>");
    }
}