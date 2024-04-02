document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.querySelector('.textArea');
    const wordCountDisplay = document.getElementById('wordCount');
    const wordspace = document.querySelector('#passiveSentences');
    const charCount = document.querySelector('#charCount');
    const spchar = document.querySelector('#spchar')
    const digit = document.querySelector('#digit')
  
    inputText.addEventListener('input', function(){
        const text = inputText.value.trim();
        const words = text.split(/\s+/).filter(function(word) {
            return word.length > 0;
        } );

        const char = text.split('').filter(function(chars){
                return chars.length > 0;
        });

       var otherchar = 0;
       var digit2 = 0;
       for (var i = 0 ; i<text.length ; i++){

            if(text[i] >= "A" && text[i] <="Z"){
                 otherchar++;}
            else if(text[i] >= "a" && text[i] <="z"){
                 otherchar++;}
            else if(text[i] >= "0" && text[i] <="9"){
                 digit2++;}
       }
       
     
    
        var btn1 = document.querySelector('#btn1');
        btn1.addEventListener("click",function(){
            
        const wordCount = words.length;
        wordCountDisplay.textContent = `${wordCount}`;

        
        })

        var btn2 = document.querySelector('#btn2');
        btn2.addEventListener("click",function(){
            
        const wordCount = words.length;    
        const characters = char.length;
        wordspace.textContent = `${otherchar} `;
        
        
        })

        var btn3 = document.querySelector('#btn3');
        btn3.addEventListener("click",function(){
        
        const wordCount = words.length; 
        charCount.textContent = `${wordCount-1} `;

    
    })
        var btn4 = document.querySelector('#btn4');
        btn4.addEventListener("click",function(){


         
           digit.innerText = digit2;

        })

        var btn5 = document.querySelector('#btn5');
        btn5.addEventListener("click",function(){
          
           const charlen = char.length; 
           const wordCount = words.length; 

           spchar.textContent = charlen-digit2-otherchar-wordCount+1;

        })
        
    });
    
  });

