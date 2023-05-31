<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function() {
    // Add event listener for fetching the translation
    $('#btn_translate').click(function() {
      // Get the language code entered by the user
      var languageCode = $('#language_code').val();

      // Fetch the translation from the API
      $.get('https://www.fourtonfish.com/hellosalut/hello/', { lang: languageCode }, function(data) {
        // Extract the translation from the fetched data
        var translation = data.hello;

        // Update the text content of the <div> element with ID "hello"
        $('#hello').text(translation);
      });
    });
  });
</script>

