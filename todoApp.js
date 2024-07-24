let input=document.getElementById('inp')
let button=document.getElementById('btn')
let lists=document.getElementById('list')

const add = ()=>{
   let li = document.createElement('li')
   let butn = document.createElement('button')
    li.innerText = input.value
    butn.innerText = 'x'
    butn.style.borderRadius='3px'
    butn.style.border='2px solid white'
    butn.style.float='right'
    lists.append(li)
    li.append(butn)
    input.value = ''

    butn.addEventListener('click',()=>{
        li.remove()
    })
}

button.addEventListener('click',()=>{
   add()
})
