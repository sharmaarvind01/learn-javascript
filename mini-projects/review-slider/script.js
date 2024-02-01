// Review slider script
const reviews = [{
    image: "./profile-1.jpg",
    name: "Laila",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde amet architecto. Tempore fugiat maxime sunt distinctio blanditiis exercitationem voluptatum?"
},
{
    image: "./profile-2.jpg",
    name: "Romio One",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde amet architecto. Tempore fugiat maxime sunt distinctio blanditiis exercitationem voluptatum?"
},
{
    image: "./profile-3.jpg",
    name: "Romio Two",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde amet architecto. Tempore fugiat maxime sunt distinctio blanditiis exercitationem voluptatum?"
},
{
    image: "./profile-4.jpg",
    name: "Romio Three",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde amet architecto. Tempore fugiat maxime sunt distinctio blanditiis exercitationem voluptatum?"
}
]
let slider = (function(){
    let nextButton = document.querySelector('#next')
    let prevButton = document.querySelector('#prev')
    let current = 0

    nextButton.addEventListener('click',(e)=>{
        
        if(current < reviews.length - 1){
            current++
            updateReview(current)
        }else{
            current = 0
            updateReview(current)
        }
    })
    prevButton.addEventListener('click',(e)=>{
        
        if(current > 0){
            current--
            updateReview(current)
        }else{
            current = reviews.length-1
            updateReview(current)
        }
    })

    setInterval(()=>{
        if(current < reviews.length - 1){
            current++
            updateReview(current)
        }else{
            current = 0
            updateReview(current)
        }
    },3000)

}())

function updateReview(id){
    let reviewImage = document.querySelector('#profile-image')
    let reviewName = document.querySelector('#name')
    let reviewContent = document.querySelector('#content')

    reviewImage.setAttribute('src',reviews[id].image)
    reviewName.innerText = reviews[id].name
    reviewContent.innerText = reviews[id].content
}