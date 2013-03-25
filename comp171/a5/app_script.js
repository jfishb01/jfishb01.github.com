window_stack = new Array();
window_stack.push("index.html");

function openWindow(file)
{
  window_stack.push(file);
  window.open(file, '_self', 'width=xxx,height=xxx,scrollbars=yes');
}

function back()
{
  for(var i in window_stack)
  {
     console.log(window_stack[i]);
  }
  window_stack.pop();
  file = window_stack.pop();
  console.log(file);
  window.open(file, '_self', 'width=xxx,height=xxx,scrollbars=yes');
}  
  
function openSaved(file)
{ 
  var Index = document.getElementById("savedSelection").selectedIndex;
  window.open(file, '_self', 'width=xxx,height=xxx,scrollbars=yes');
} 

function saveList()
{
  alert("List Saved");
}