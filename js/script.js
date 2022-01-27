const input=document.querySelector('#input-text');
const display=document.querySelector('#display');

let totalCorrect=0;

let bindWord=function(displayWord, inputWord){
    if(displayWord==inputWord){
        return true;
    }
}
let changeColor=function(){
    
}

let inputWord;
let displayIndex=0;

let displayWord=display.innerHTML;
displayWord=displayWord.split(' ');
    input.addEventListener('keyup', function(e){
        if(e.key=='a' || e.key=='b' || e.key=='c' || e.key=='d' || e.key=='e' || e.key=='f' || e.key=='g' || e.key=='h' || e.key=='i' || e.key=='j' || e.key=='k' || e.key=='l' || e.key=='m' || e.key=='n' || e.key=='o' || e.key=='p' || e.key=='q' || e.key=='r' || e.key=='s' || e.key=='t' || e.key=='u' || e.key=='v' || e.key=='w' || e.key=='x' || e.key=='y' || e.key=='z'){
            inputWord=input.value.replace(' ', '');
            // console.log(displayWord);
                    
                    // if(!bindChar(displayWord[i][j], inputWord)){
                        
                    // }
                    
        }
    }
            
        
    );
    input.addEventListener('keydown', function(e){
        if(e.code=='Space'){
            // bindWord()
            // console.log(display.innerHTML);
            
            // console.log(inputWord);
            // if(bindWord(displayWord[i]), inputWord){

            // }
            console.log(inputWord);
            console.log(displayWord[displayIndex]);
            if(bindWord(displayWord[displayIndex], inputWord)){
                if(!input.classList.contains('wrong')){
                    input.classList.add('wrong');
                }
                input.classList.replace('wrong', 'correct');
                totalCorrect++;
            }else{
                if(!input.classList.contains('correct')){
                    input.classList.add('correct');
                }
                input.classList.replace('correct', 'wrong');
            }
            input.value='';
            inputWord='';
            displayIndex++;
        }
        if(displayIndex==displayWord.length){
            alert('betul '+totalCorrect);
            input.setAttribute('disabled', '');
        }
    });
