 let shotsOne = document.querySelector('#teamone-shoot-button')
 let teamOneShots = document.querySelector('#teamone-numshots')

shotsOne.addEventListener('click', function(){

    let teamOneNum = parseInt(teamOneShots.innerText) + 1
    teamOneShots.innerText = teamOneNum

let tmOneGoals = document.querySelector('#teamone-numgoals')
let tmOneScore = parseInt(tmOneGoals.innerText) + Math.floor(Math.random() * 2)
tmOneGoals.innerText = tmOneScore

 
    

})


let shotsTwo = document.querySelector('#teamtwo-shoot-button')
let teamTwoShots = document.querySelector('#teamtwo-numshots')

shotsTwo.addEventListener('click', function(){

   let teamTwoNum = parseInt(teamTwoShots.innerText) + 1
   teamTwoShots.innerText = teamTwoNum

   let tmTwoGoals = document.querySelector('#teamtwo-numgoals')
let tmTwoScore = parseInt(tmTwoGoals.innerText) + Math.floor(Math.random() * 2)
tmTwoGoals.innerText = tmTwoScore

})


let reset = document.querySelector('#reset-button')
let resetNum = document.querySelector('#num-resets')
reset.addEventListener('click', function(){
let startOver = parseInt(resetNum.innerText) + 1
resetNum.innerText = startOver
})







