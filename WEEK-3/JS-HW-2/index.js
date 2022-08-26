
//Input, button,toast dom selection
const input = document.querySelector("#task")
const addButton = document.querySelector("#liveToastBtn")
const toastErrorDom = document.querySelector(".toast.error.hide")
const toastSuccessDom = document.querySelector(".toast.success.hide")

// Get todo's from localstorage
const onLoad = () => {
    var a = window.localStorage.getItem("a")
    if (a != null) {
        for (let i = 1; i < a; i++) {
            var value = window.localStorage.getItem(i);
           if (value!=null) {
            liMaker(value, i)
           }
           
        }
    }
}
//Blank space control and error toast 
const toastShow = () => {
    if (input.value.trim().length === 0) {
        const toast = new bootstrap.Toast(toastErrorDom)
        toast.show();

    } else {
        var a = localStorage.getItem("a")
        if (a === null) {
            a = 1
        }

        //Create li element from localstorage
        liMaker(input.value, a)
        const toast = new bootstrap.Toast(toastSuccessDom)
        toast.show();
        window.localStorage.setItem(a, input.value)
        a++
        window.localStorage.setItem("a", a)
    }
}
//Create li element and add class for li 
function liMaker(task, id) {
    const li = document.createElement("li");
    li.id = id
    li.innerHTML = task;
    li.onclick = () => {
        console.log(li.classList)
        if (li.classList.length == 0) {
            li.classList.add("bg-info")
            li.style.textDecorationLine = "line-through"
        }
        else {
            li.classList.remove("bg-info")
            li.style.textDecorationLine = "none"
        }
    }
//Add xmark end of li
    let imgstr = imageMaker(id)
    li.innerHTML += imgstr
    document.querySelector("#list").appendChild(li);

}

function imageMaker(id){
    let imgStr = `<i style="position: relative; float:right;" id="${id}" class="fa-solid fa-xmark" onclick="deleteFunc(this.id)"></i>`
    return imgStr
}

//Delete li element with xmark
function deleteFunc(iconId){
    document.getElementById(iconId).remove()
    window.localStorage.removeItem(iconId)
}

const newElement = () => {
    toastShow()
    input.value = ""
}



