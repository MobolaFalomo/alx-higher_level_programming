$(document).ready(function() {
  // Fetch the translation from the API
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function(data) {
    // Extract the hello translation from the fetched data
    var helloTranslation = data.hello;

    // Update the text content of the <div> element with ID "hello"
    $('#hello').text(helloTranslation);
  });
});
