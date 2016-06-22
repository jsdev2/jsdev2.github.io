  $('#message-form').submit(function(event) {
    // to prevent the form element's default behavior: page refresh
    event.preventDefault()

    // grab user message input
    var message = $('#message').val()

    // clear message input (for UX purposes)
    $('#message').val('')

    // create a section for messages data in your db
    var messagesInFirebase = firebaseDB.ref('messages');

    // use the set method to save data to the messages
    messagesInFirebase.push({
      message: message,
      votes: 0
    });
  });
