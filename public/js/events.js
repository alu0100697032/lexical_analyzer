 $(document).ready(function() {
    /*DRAG & DROP*/
     function handleDrop(evt) {
         evt.stopPropagation();
         evt.preventDefault();
         var files = evt.dataTransfer.files[0]; // FileList object.
         var reader = new FileReader();
         reader.onload = function(event) {
             $("#INPUT").val(event.target.result);
         };
         reader.readAsText(files);
         evt.target.style.opacity = "0.7";
     }

     function handleDrag(evt) {
             evt.stopPropagation();
             evt.preventDefault();
             evt.target.style.opacity = "1.0";
         }
         // Setup the dnd listeners.
     var dropZone = document.getElementById('dropzone');
     dropZone.addEventListener('dragover', handleDrag, false);
     dropZone.addEventListener('drop', handleDrop, false);
    
    /*FILE READER*/
    
     function handleFileSelect(evt) {
         var files = evt.target.files[0]; // FileList object
         var reader = new FileReader();
         reader.onload = function(event) {
             $("#INPUT").val(event.target.result);
         };
         reader.readAsText(files);
     }

     document.getElementById('load_file').addEventListener('change',
         handleFileSelect, false);
         
    /*BUTTONS*/
    
    $("#e1").click(function(){
       $("#INPUT").val("var a = 3;");
    });
    $("#e2").click(function(){
       $("#INPUT").val("var b = function(x) { \n\tvar c = 3; \n\treturn x+c; \n};"); 
    });
    $("#e3").click(function(){
       $("#INPUT").val("var a = 3;\nvar b = function(x) { \n\tvar c = 3; \n\treturn x+c; \n};");
    });
 });
