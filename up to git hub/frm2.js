//let list = document.querySelector('ul.collection');
//var li = document.createElement ('li')
//li.className='collection-item';
//li.textContent= 'List Item';
//document.querySelector('ul.collection').append(li);
//const link = document.createElement('a');
//link.className= 'delete-item secondary-content';
//link.innerHTML= '<i class="fa fa-remove"></i>';
//li.appendChild(link);

const form = document.querySelector('#task-form');
const tasklist = document.querySelector('ul.collection');
const taskinput = document.querySelector('#task');
const clrtsk = document.querySelector('.clear-tasks');

// Load events

loadEventListeners();

function loadEventListeners(){ 
    form.addEventListener('submit',(e)=>{
        if(taskinput.value === ''){
            alert('Add a task')
        } 
        else{
        const li = document.createElement ('li')
        li.className='collection-item'; 
        document.querySelector('ul.collection').append(li);
        li.appendChild(document.createTextNode(taskinput.value))
        const link = document.createElement('a');
        link.className= 'delete-item secondary-content';
        link.innerHTML= '<i class="fa fa-remove"></i>';
        taskinput.value = ' ';
        li.appendChild(link); 

        e.preventDefault();
    }
        
    })
  tasklist.addEventListener('click',(e)=>{
      if(e.target.parentElement.classList.contains('delete-item'))
    {
      if(confirm('Are You Sure?'))
      {
        e.target.parentElement.parentElement.remove();
      }
    }
      console.log(e.target);

  })  

  clrtsk.addEventListener('click',(e)=>{
    if(confirm('Are You Sure?')){
        tasklist.innerHTML=' ';
    }
     

  })
}