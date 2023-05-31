<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function() {
    // Add event listener for fetching the translation
    $('#btn_translate').click(fetchTranslation);
    $('#language_code').keydown(function(event) {
      if (event.which === 13) {
        fetchTranslation();
      }
    });

    function fetchTranslation() {
      // Get the language code entered by the user
      var languageCode = $('#language_code').val();

      // Fetch the translation from the API
      $.ajax({
        url: 'https://www.fourtonfish.com/hellosalut/hello/',
        data: { lang: languageCode },
        type: 'GET',
        success: function(data) {
          // Extract the translation from the fetched data
          var translation = data.hello;

          // Update the text content of the <div> element with ID "hello"
          $('#hello').text(translation);
        },
        error: function() {
          console.log('An error occurred while fetching the translation.');
        }
      });
    }
  });
</script>

