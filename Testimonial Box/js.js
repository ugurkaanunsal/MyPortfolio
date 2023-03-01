const testimonialsContainer= document.querySelector('.testimonials-container')
const testimonial= document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username= document.querySelector('.username')
const role= document.querySelector('.role')


const testimonials=[
    {
        name:'Julius Caesar',
        position:'Leader',
        photo:'https://randomuser.me/api/portraits/men/3.jpg',
        text:"I came, I saw, I conquered.",
    },
    {
        name:'Lady Gaga',
        position:'Singer',
        photo:'https://randomuser.me/api/portraits/men/43.jpg',
        text:"I'm not here to be perfect, I'm here to be real.",
    },

    {
        name:'Walt Disney',
        position:'Director',
        photo:'https://randomuser.me/api/portraits/women/23.jpg',
        text:"If you can dream it, you can do it.",
    },

    {
        name:'Albert Einstein',
        position:'Scientist',
        photo:'https://randomuser.me/api/portraits/men/23.jpg',
        text:"If you want to live a happy life, tie it to a goal, not to people or things.",
    },
    {
        name:'Martin Luther King Jr',
        position:'People',
        photo:'https://randomuser.me/api/portraits/men/32.jpg',
        text:"I have a dream",
    }



]


let idx=0

function updateTestimonial() {
     const {name, position,photo,text} =testimonials[idx]

     testimonial.innerHTML=text
     userImage.src=photo
     username.innerHTML=name
     role.innerHTML=position


     idx++
    if(idx>testimonials.length-1){
        idx=0

    }
}
setInterval(updateTestimonial,5000)