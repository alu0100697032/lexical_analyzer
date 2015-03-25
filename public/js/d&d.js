 /*function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object.
    
    document.getElementById('INPUT').innerHTML = files.length;
    evt.target.style.background = "black";
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.background = "white";
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('dropzone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);*/
  
$(document).ready(function(){
  $("#e1").click(function(){
    $("#INPUT").val('var a = "hello"; // initialize a'
       +'\n var b = function(x) {'
       +'\nvar c = 3;'
       +'\nreturn x+c;'
       +'\n};');
    });
});