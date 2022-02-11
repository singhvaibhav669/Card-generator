const inpKey = document.getElementById('inpName')
const inpCourse = document.getElementById('inpCourse')
const inpAuthor = document.getElementById('inpAuthor')
const btnInsert = document.getElementById('btnInsert')
const lsOutput = document.getElementById('lsOutput')



function hide() {
    document.getElementById("myDiv").style.display="none";
}

btnInsert.onclick = function(){
    const key = inpKey.value;
    const value = {"course":inpCourse.value,"author":inpAuthor.value};

    if(key && inpCourse.value && inpAuthor.value){
        localStorage.setItem(key,JSON.stringify(value))
        document.getElementById("myDiv").style.display="block";
        setTimeout("hide()", 4000);
        setTimeout(function(){
            location.reload();
        }, 3000);
        
    }
};


for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    var value = JSON.parse(localStorage.getItem(key));
    var image = "./1.jpg"
    if (i%2==0) {
        image = "./2.jpg"
    }

    lsOutput.innerHTML += `<div class="col">
    <div class="card h-100">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h6 class="card-title">Customer Name : ${key}</h6>
            <h6 class="card-title">Course : ${value.course}</h6>
            <h6 class="card-title">Author : ${value.author}</h6>
            
        </div>
    </div>
</div>`
    
}
