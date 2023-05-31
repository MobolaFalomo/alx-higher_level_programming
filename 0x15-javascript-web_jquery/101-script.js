<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function() {
    // Add event listener for adding a new item
    $('#add_item').click(function() {
      // Create a new <li> element
      var newItem = $('<li>').text('Item');

      // Add the new item to the UL with class "my_list"
      $('ul.my_list').append(newItem);
    });

    // Add event listener for removing the last item
    $('#remove_item').click(function() {
      // Select the last <li> element in the UL with class "my_list"
      var lastItem = $('ul.my_list li:last-child');

      // Remove the last item from the list
      lastItem.remove();
    });

    // Add event listener for clearing the list
    $('#clear_list').click(function() {
      // Select all <li> elements in the UL with class "my_list"
      var allItems = $('ul.my_list li');

      // Remove all items from the list
      allItems.remove();
    });
  });
</script>

