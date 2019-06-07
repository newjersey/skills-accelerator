function getRadioVal(form, name) {
  var val;
  var radios = form.elements[name];
  
  for (var i=0, len=radios.length; i<len; i++) {
      if ( radios[i].checked ) {
          val = radios[i].value;
          break;
      }
  }
  return val;
}



var answer_correct = document.querySelectorAll('.answer-correct');
var answer_wrong = document.querySelectorAll('.answer-wrong');
var questions = document.querySelectorAll('.questions-form');
var submit_index = document.querySelectorAll('.getVal');
var buttonsCount = submit_index.length;
var index = 0;
var items=document.getElementsByName('questions-all-correct');
var selectedItems=0;
var buttons = document.getElementsByName("getVal");
var buttonsCount = buttons.length;

for (var i = 0; i <= buttonsCount; i += 1) {
  buttons[i].onclick = function() {
    index = parseInt(this.id)-1;
  
  if(getRadioVal(this.form, 'questions') == "correct")
  {
  
  answer_wrong[index].classList.replace('show','hide');
  answer_correct[index].classList.replace('hide','show');
  
  }

  else{
  
  answer_correct[index].classList.replace('show','hide');
  answer_wrong[index].classList.replace('hide','show');
  
  }
  };
}
function printChecked(id, req_corr){
 
  var flag = 0;
  var index = id-1;
  var selectedItems=0;
  var total_items = 0;
  var items=document.getElementsByName('questions-all-correct');
  var items_id = id;

  for(var i=0; i<items.length; i++){
  
    
    if(items[i].id > id)
    {
    break;
    }
    total_items+=1;
    if(items_id != items[i].id)
    {
      if(items[i].type=='checkbox' && items[i].checked==true)
      selectedItems = 1;
      else if(items[i].type=='checkbox' && items[i].checked==false)
      selectedItems = 0;
      total_items = 1;
      items_id = items[i].id;
    }
    else
    {
    if(items[i].type=='checkbox' && items[i].checked==true)
    {
      
      if (items[i].value=="correct")
      {
        selectedItems+=1;
      }
      else
      flag = 1;
    }
    }
  }
 
  if((selectedItems == req_corr) && flag == 0){
    answer_wrong[index].classList.replace('show','hide');
    answer_correct[index].classList.replace('hide','show');
    
    }
  
    else {
    
    answer_correct[index].classList.replace('show','hide');
    answer_wrong[index].classList.replace('hide','show');
    
    }
  
  
}			


    
  
 
  
    
    


// disable submission of all forms on this page
for (var i=0, len=document.forms.length; i<len; i++) {
  document.forms[i].onsubmit = function() { return false; };
}

