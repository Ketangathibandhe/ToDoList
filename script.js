let input = document.querySelector('.inputtask');
let addbutton = document.querySelector('.addbutton')
let todaysTask = document.querySelector('.todaysTask')
addbutton.addEventListener('click',function(){
    if(input.value==""){
        alert("Enter task")
    }else{
        let newElement = document.createElement('ul')
        newElement.innerHTML=`${input.value} <i class="ri-delete-bin-5-line"></i>`
        todaysTask.appendChild(newElement)
        input.value=""
        newElement.querySelector('i').addEventListener('click',function(){
            newElement.remove()
        })
    }
})