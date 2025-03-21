// assets/script.js

$(document).ready(function() {
  let dragging = false;
  let offsetX, offsetY;
  let currentModal = null;

  $(".modal-header.draggable").mousedown(function(e) {
      dragging = true;
      currentModal = $(this).closest('.modal');  // Find the modal

      offsetX = e.clientX - currentModal.offset().left;
      offsetY = e.clientY - currentModal.offset().top;

      currentModal.css('cursor','move');  // Update the cursor when dragging.

      // Prevent default behaviour that might interfere
      e.preventDefault();
  });

  $(document).mouseup(function() {
      dragging = false;
      if(currentModal) {
          currentModal.css('cursor','default');  // Reset to Default

          //reset for each up event. Important in cases with iframes in your modals
          currentModal = null;
      }

  });

  $(document).mousemove(function(e) {
      if (dragging && currentModal) {

          let left = e.clientX - offsetX;
          let top = e.clientY - offsetY;

          currentModal.css({
              'left': left + 'px',
              'top': top + 'px'
          });
      }
  });
});