let playerOneInput = document.querySelector(".playerOneInput")
let playerOneButton = document.querySelector(".playerOneButton")
let playerTwoInput = document.querySelector(".playerTwoInput")
let playerTwoButton = document.querySelector(".playerTwoButton")
let error = document.querySelector(".error")
let heading = document.querySelector(".heading")
let anotherHeading = document.querySelector("h3")
let span = document.querySelector("span")
let winnerImg = document.querySelector(".winnerImg")

let playerOneNumber;
let count = 5;
playerOneButton.addEventListener("click",function(){
      if(playerOneInput.value == ""){
          error.innerHTML = "Please enter a number"
          error.style.color = "red"
      }else{
        if(Number(playerOneInput.value)){

            if(Number(playerOneInput.value) >= 1 && Number(playerOneInput.value) <= 10){

                  playerOneNumber = playerOneInput.value
                  error.innerHTML = ""
                  heading.innerHTML = "Player-2"
                  anotherHeading.style.display = "block"
                  displayControl("p2b&p1n")
                  span.innerHTML = count
            }else{
                  error.innerHTML = "Please enter a number between 1 to 10"  
                  error.style.color = "red" 
            }


        }else{
               error.innerHTML = "Please enter a number"
               error.style.color = "red"
        }
      }
               
     
})


playerTwoButton.addEventListener("click",function(){
    
       if(count > 0){
          

            
      if(playerTwoInput.value == ""){
            error.innerHTML = "Please enter a number"
            error.style.color = "red"
        }else{
          if(Number(playerTwoInput.value)){
                if(Number(playerTwoInput.value) >= 1 && Number(playerTwoInput.value) <= 10){
                  error.innerHTML = ""
                  count--
                  span.innerHTML = count

                if(playerTwoInput.value == playerOneNumber){
                  winnerImg.style.display = "block"
                  displayControl("allNone")
                   heading.innerHTML = "Player 2 winner"

                }else if(count == 0){
                   winnerImg.style.display = "block"
                   displayControl("allNone")
                   heading.innerHTML = "Player 1 winner"
                }



                }else{
                  error.innerHTML = "Please enter a number between 1 to 10"  
                  error.style.color = "red" 
            }


          }else{
                 error.innerHTML = "Please enter a number"
                 error.style.color = "red"
          }
        }
       }



                 
})














function displayControl(type){
   if(type == "p2b&p1n"){
      playerTwoInput.style.display = "inline-block"
      playerTwoButton.style.display = "inline-block"
      playerOneInput.style.display = "none"
      playerOneButton.style.display = "none"
   }else if(type == "allNone"){
      playerTwoInput.style.display = "none"
      playerTwoButton.style.display = "none"
      playerOneInput.style.display = "none"
      playerOneButton.style.display = "none"
      anotherHeading.style.display = "none"
   }
}