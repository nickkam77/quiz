function init(){
    const element = document.getElementById("init");
    element.style.display = "none";
    const audio = document.getElementById("som");
    element.addEventListener('click', () => {
        audio.play();
      });

    const element1 = document.getElementById("esc");
    element1.style.display  = "flex";
  
    const element2 = document.getElementsByClassName("esc1");
    element2.style.flex-direction; "column";
    element2.style.align-items; "center";
    element2.style.justify-content; "center";
    
    
}
const quiz1 = document.getElementById("qz1");
const quiz11 = document.getElementById("qz1.1");
const quiz12 = document.getElementById("qz1.2");
const quiz13 = document.getElementById("quiz1.3");

function btp(){
    const element3 = document.getElementById("esc");
    element3.style.display = "none";


    quiz1.style.display = "flex";

    const box = document.getElementById("box");
    box.style.display = "flex";

   
    const buttons1 = document.getElementsByClassName("a");

    for (const button1 of buttons1) {
    button1.addEventListener("click", function() {
    
    if (this.value === "5") {
      alert("acertou");
      const quiz11 = document.getElementById("qz1.1");
      quiz11.style.display = "none";

      const quiz12 = document.getElementById("qz1.2");
      quiz12.style.display = "flex";



    }

    else{
        alert("errou!")
        
         quiz12.style.display = "flex";
    }
  });

            const buttons2 = document.getElementsByClassName("b");

            for (const button2 of buttons2){
            button2.addEventListener("click", function(){

            if(this.value === "2"){
            alert("acertou");
            quiz12.style.display = "none";
                  
            quiz13.style.display = "flex";
            }
                else{
                    alert("errou!")
                    quiz12.style.display = "none";
                    quiz13.style.display = "flex";
                }
            })
           
        }

        

  


} 
}

