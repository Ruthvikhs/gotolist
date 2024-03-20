
var list=document.getElementById('list');
var addform=document.querySelector('#addform');
var clear=document.getElementById('clear');
var main_list=document.getElementById('main-list');
addform.addEventListener('click',read);
list.addEventListener('click',delete1);
clear.addEventListener('click',delete2);
function read(e){
    e.preventDefault;
    var new_date=document.getElementById('inputdate').value;
    var newN=document.getElementById('inputtext').value;
    if(new_date==='' ){
        alert("enter date!")
        return;
    }
    var li=document.createElement('li');
    var span=document.createElement('span')
    li.className='list-group-item';
    li.id='list-mem'
    span.appendChild(document.createTextNode(new_date));
    li.appendChild(span);
    count++;
    if(newN===''){
       if ( confirm("enter without description?")){
       
    
    var span1=document.createElement('span');
    span1.className='p-5 fs-4';
    span1.appendChild(document.createTextNode(newN));
    li.appendChild(span1);
    var button1=document.createElement('button');
    button1.className='btn btn-danger float-end';
    button1.appendChild(document.createTextNode('Delete'));
    li.appendChild(button1);
    list.appendChild(li);
   
    return;
}
    }
    var span1=document.createElement('span');
    span1.className='p-5 fs-4';
    span1.appendChild(document.createTextNode(newN));
    li.appendChild(span1);
    var button1=document.createElement('button');
    button1.className='btn btn-danger float-end';
    button1.appendChild(document.createTextNode('Delete'));
    li.appendChild(button1);
    list.appendChild(li);
   
}

function delete1(e){
    if(e.target.classList.contains('btn-danger')){
    if(confirm('did u complete that activity?or changed your mind?')){
        var del_ele=e.target.parentElement;
        list.removeChild(del_ele);
    }
}
}
function delete2(e){
    if(confirm('pakka sure?')){
    list.innerHTML=' ';
    }

}
