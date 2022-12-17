const cursor = document.querySelector('.cursor')
// make holes an array to create random hole population 
const holes = [...document.querySelectorAll('.hole')]
// adjusts score
const scoreE1 = document.querySelector('.score span')
let score = 0
// function to run game
function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'images/mole.png'

    img.addEventListener('click', () => {
        score += 1
        scoreE1.textContent = score
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}
run()

// mouse interactions for cursor
window.addEventListener('mousemove', e =>{
  cursor.style.top = e.pageY + 'px'
  cursor.style.left = e.pageX + 'px'
})

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})