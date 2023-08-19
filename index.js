for(let i=1;i<=17;i++){
    var tap=document.querySelector(".key"+i);
    tap.addEventListener("click",
    function(){
        var sound=new Audio("key"+i+".wav");
        sound.play();
    })
}

document.addEventListener("keydown",function(e){
    var press=e.key;
    playsound(press);
    highlight(press);
})
function playsound(lol){
    switch(lol){
        case 'a':{
            var sound=new Audio("key1.wav");
        sound.play();
        }break;
        case 's':{
            var sound=new Audio("key2.wav");
        sound.play();
        }break;
        case 'w':{
            var sound=new Audio("key3.wav");
        sound.play();
        }break;
        case 'd':{
            var sound=new Audio("key4.wav");
        sound.play();
        }break;
        case 'e':{
            var sound=new Audio("key5.wav");
        sound.play();
        }break;
        case 'f':{
            var sound=new Audio("key6.wav");
        sound.play();
        }break;
        case 't':{
            var sound=new Audio("key7.wav");
        sound.play();
        }break;
        case 'g':{
            var sound=new Audio("key8.wav");
        sound.play();
        }break;
        case 'y':{
            var sound=new Audio("key9.wav");
        sound.play();
        }break;
        case 'h':{
            var sound=new Audio("key10.wav");
        sound.play();
        }break;
        case 'u':{
            var sound=new Audio("key11.wav");
        sound.play();
        }break;
        case 'j':{
            var sound=new Audio("key12.wav");
        sound.play();
        }break;
        case 'o':{
            var sound=new Audio("key13.wav");
        sound.play();
        }break;
        case 'k':{
            var sound=new Audio("key14.wav");
        sound.play();
        }break;
        case 'p':{
            var sound=new Audio("key15.wav");
        sound.play();
        }break;
        case 'l':{
            var sound=new Audio("key16.wav");
        sound.play();
        }break;
        case ';':{
            var sound=new Audio("key17.wav");
        sound.play();
        }break;
    }
}
function highlight(lel){
    var high =document.querySelector("."+lel);
    if(lel=='a'||lel=='s'||lel=='d'||lel=='f'||lel=='g'||lel=='h'||lel=='j'||lel=='k'||lel=='l'||lel==';'){
        high.classList.toggle("highlight1");
    }else{
        high.classList.toggle("highlight2");
    }

    setTimeout(function(){
        if(lel=='a'||lel=='s'||lel=='d'||lel=='f'||lel=='g'||lel=='h'||lel=='j'||lel=='k'||lel=='l'||lel==';'){
            high.classList.toggle("highlight1");
        }else{
            high.classList.toggle("highlight2");
        }  
    },200)
   
}

document.querySelector(".slider").addEventListener("click",function(){
    
    for(let j=0;j<7;j++){
        c=document.querySelectorAll(".black")[j].classList.toggle("hide2");
    }
    for(let j=0;j<10;j++){
        c=document.querySelectorAll(".white")[j].classList.toggle("hide1");
    }

})
