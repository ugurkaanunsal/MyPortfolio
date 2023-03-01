const panels= document.querySelectorAll('.panel');

panels.forEach(a=>{
    a.addEventListener('click',()=>{
        removeActiveClasses()
       a.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(a=>{
        a.classList.remove('active')
    })
}