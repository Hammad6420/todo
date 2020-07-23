
var newWrite  = 0;listplus = 0;i=0;
function addNew(){
  newWrite = document.getElementById('write-new').value

  list = `
  <div class="container-box">
  <div class="list-item">
    <div  class="number"></div>

 <div class="words"> ${newWrite} </div>

 <button class='btn' ondblclick="done(this)" onclick="edit(this)" style="border: none;" ><i class="icon fas fa-edit"></i></button>

 <button class='btn' onclick="deleteList(this)" style="border: none;" >
 <i class="icon fas fa-trash-alt"></i></button>

   </div>

   <div class="line"></div>
   </div>
  `

listplus = document.getElementById('list');
listplus.innerHTML += list;
number = document.getElementById('list').childElementCount
numList()
document.getElementById('write-new').value = '';
}

function edit(e){
        addInp = e.previousSibling.previousSibling;
        old = addInp;
        eOld=e;
        newInput = document.createElement('input');
        newInput.setAttribute('type','text');
        newInput.id = 'newInp';
        newInput.className = 'inp';
        newInput.value =  e.previousSibling.previousSibling.innerHTML;
        addInp.replaceWith(newInput);


        eNew = document.createElement('button');
        eNew.setAttribute('onclick','done(this)');
        eNew.className = 'btn';
        eNew.innerHTML = 'DONE'
e.replaceWith(eNew)
}


function done(e){

    addInp = e.previousSibling.previousSibling;
    old.innerHTML = newInput.value
    addInp.replaceWith(old);    
    e.replaceWith(eOld)

}


function deleteList(e){
 e.parentNode.parentNode.remove();
 number--
numList()
}


function numList(){
    for (let index = 0; index < number; index++) {
        document.getElementById('list').children[index].childNodes[1].childNodes[1].innerHTML = index+1;
    }
}

function delAll(){
    document.getElementById('list').innerHTML = '';
}



