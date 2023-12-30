const input_task = document.querySelector('.input_task')
const input_week = document.querySelector('.input_week')
const input_btn = document.querySelector('.input_btn')
const taskdane = document.querySelector('.taskdane')
const taskall = document.querySelector('.taskall')
const tasknotCompleted= document.querySelector('.notCompleted')
const contentTask = document.querySelector('.content-task')
const main__right_inner = document.querySelector('.main__right_inner')

let countdane = 0
let countall = 0
let notCompleted = 0





input_btn.addEventListener('click',()=>{

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    
    let inputTask = input_task.value
    input_task.value = ""

    const divConreiner = document.createElement('div')
    divConreiner.classList.add('divConreiner')

    const taskConreiner = document.createElement('div')
    taskConreiner.classList.add('divConreiner')


    const task = document.createElement("div")
    task.classList.add('task')

    const time = document.createElement("p")
    time.classList.add('time')


    const btn = document.createElement("div")
    btn.innerHTML =`<i class="fa-solid fa-trash"></i>`
    btn.classList.add('btn-trash-box')

    

    const dane = document.createElement("input")
    dane.type = "checkbox";
    dane.classList.add('dane')


    taskConreiner.appendChild(task)
    
// ++++++++++++++++++++++++++++++++++++
    const timebtn = document.createElement('div')
    timebtn.classList.add('timebtn')
    timebtn.appendChild(dane)
    timebtn.appendChild(time)
    timebtn.appendChild(btn)
    
    const addtask =document.createElement('button')
    addtask.classList.add('addtask')
    addtask.textContent = '+'

    const addnewTask = document.createElement('input')
    let daneaddnewTask = addnewTask.value

    addtask.addEventListener('click',()=>{
        divConreiner.appendChild(addnewTask) 
    })

    addnewTask.addEventListener('keydown',(e)=>{
        if (e.key === "Enter"){
            const divandertask = document.createElement("div")
            divandertask.classList.add('divInPForPandTrash')
            const andertask = document.createElement("p")
            andertask.classList.add('pAndertask')


            const btnInInP = document.createElement("div")
            btnInInP.innerHTML =`<i class="fa-solid fa-trash"></i>`
            btnInInP.classList.add('andertask-box')

            btnInInP.addEventListener('click',()=>{
                divandertask.remove()
               
            })

            const divForP = document.createElement("div")
            divForP.classList.add('divForP')
            divForP.append(andertask)


            divandertask.append(divForP)
            divandertask.append(btnInInP)
            andertask.innerText = addnewTask.value;
            addnewTask.value = "";
            addnewTask.remove();
            andertask.classList.add('taskll')
            taskConreiner.append(divandertask)
            console.log(daneaddnewTask);

            //  daneaddnewTask.innerText = andertask
            // console.log("5");
        }
    })
   

    
    timebtn.appendChild(btn)
    timebtn.appendChild(addtask)
    divConreiner.appendChild(taskConreiner)
    divConreiner.appendChild(timebtn)
    
    
    task.innerText = inputTask
    time.innerText = formattedTime

    function ff (){
        if(inputTask == ""){
            
        }else{
            contentTask.append(divConreiner)
            countall++
            notCompleted++
        }
    }
    ff()

    btn.addEventListener('click',()=>{
        divConreiner.remove()
        countall--
        // countdane --
        yfgfggfg()
        fff()
    })

    dane.addEventListener('change',()=>{
        if (dane.checked) {
            task.style.setProperty("text-decoration", " line-through");
            time.style.setProperty("color", "green");
            time.innerText = formattedTime
            countdane ++
            fff()
            yfgfggfg()
            main__right_inner.append(divConreiner)
            
        }
        else {
            task.style.setProperty("text-decoration", "none");
            time.style.setProperty("color", "white");
            countdane --
            fff()
            yfgfggfg()
            contentTask.append(divConreiner)
            
        }
    })
    function fff(){
        notCompleted = countall - countdane
        yfgfggfg()
    }
    yfgfggfg()
    fff()

})



function yfgfggfg (){
    taskall.innerHTML = ` все :${countall}`
    taskdane.innerHTML = `выполнено :${countdane} `
    tasknotCompleted.innerHTML = `не выполнено :${notCompleted} `
}

yfgfggfg()

