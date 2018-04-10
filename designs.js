
// Declare variables to use upon submission from the form
    const inputHeight = $('#inputHeight');
    const inputWidth = $('#inputWidth');
    const color = $('#colorPicker');


// Create the action upon submission of height & width
$('#sizePicker').submit(function makeGrid() {

  // Remove any existing grid data before drawing the new one
  $('table').children().remove();

      // Retrieve the values for height & width
      let rows = inputHeight.val();
      let columns = inputWidth.val();

      // Create the number of rows required
        // Because the column (<td>) is built into each row,
        // this part must come first.
      for(let r = 0; r < rows; r++) {
        $('table').append("<tr></tr>");
        // Create the number of columns required
        for (let i = 0; i < columns; i++) {
          $('tr').last().append("<td></td>")
        }
      }


      $('table').css('box-shadow', '0px 0px 50px');

      $('table').animate({
        opacity: '1.0'
      }, '500');

      // Keep the event from refreshing the page
      event.preventDefault()

      // Hide the input fields & labels once the selections have been made
      $('.label').slideUp();
      $('.canvasLabel').slideDown(700);
      $('#reset').slideDown(700);

      // Change the word on the Button -- submit will clear the grid
      $('#submit').attr('value',"clear");

});

// Click a button to toggle the sizing options.
$('#reset').on('click',function() {
  $('.label').slideDown(700);
  $('.canvasLabel').slideUp();
  $('#reset').slideUp();
  $('#submit').attr('value',"submit");
  // window.location.reload();
});

let mouseButton = false;
// Click a box to set the color as selected
$('table').mousedown(function() {
      mouseButton = true;
      });
$('table').mouseup(function(){
      mouseButton = false;
      });
$('table').on('mouseover','td',function(){
      if(mouseButton) {
        $(this).css('background-color', color.val());
        }
      });
$('table').on('click','td', function() {
      $(this).css('background-color', color.val());
      })
