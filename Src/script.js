document
  .getElementById("musicForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = document.getElementById("name").value;
    var song = document.getElementById("song").value;

    let responseMessage =
      "Thanks " + firstName + "! You listened to " + song + " last.";

    document.getElementById("responseMessage").innerHTML = responseMessage;

    // Reset the form fields
    document.getElementById("musicForm").reset();
  });
