 function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var data = evt.dataTransfer.getData("text"); // FileList object.
    document.getElementById('INPUT').innerHTML = data;
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.opacity = 1.0;
  }

  // Setup the dnd listeners.
  var dropzone = document.getElementById('dropzone');
  dropzone.addEventListener('dragover', handleDragOver, false);
  dropzone.addEventListener('drop', handleFileSelect, false);