
const list=document.getElementById('list');
const addform=document.querySelector('#addform');
const clear=document.getElementById('clear');
const main_list=document.getElementById('main-list');
addform.addEventListener('click',read);
list.addEventListener('click',delete1);
clear.addEventListener('click',delete2);
function read(e){
    e.preventDefault;
    const new_date=document.getElementById('inputdate').value;
    const newN=document.getElementById('inputtext').value;
    if(new_date==='' ){
        alert("enter date!")
        return;
    }
    const li=document.createElement('li');
    const span=document.createElement('span')
    li.className='list-group-item';
    li.id='list-mem'
    span.appendChild(document.createTextNode(new_date));
    li.appendChild(span);
    
    if(newN===''){
       if ( confirm("enter without description?")){
       
    
    const span1=document.createElement('span');
    span1.className='p-5 fs-4';
    span1.appendChild(document.createTextNode(newN));
    li.appendChild(span1);
    const button1=document.createElement('button');
    button1.className='btn btn-danger float-end';
    button1.appendChild(document.createTextNode('Delete'));
    li.appendChild(button1);
    list.appendChild(li);
   
    return;
}
    }
    const span1=document.createElement('span');
    span1.className='p-5 fs-4';
    span1.appendChild(document.createTextNode(newN));
    li.appendChild(span1);
    const button1=document.createElement('button');
    button1.className='btn btn-danger float-end';
    button1.appendChild(document.createTextNode('Delete'));
    li.appendChild(button1);
    list.appendChild(li);
   
}

function delete1(e){
    if(e.target.classList.contains('btn-danger')){
    if(confirm('did u complete that activity?or changed your mind?')){
        const del_ele=e.target.parentElement;
        list.removeChild(del_ele);
    }
}
}
function delete2(e){
    if(confirm('pakka sure?')){
    list.innerHTML=' ';
    }

}
