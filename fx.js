window.addEventListener('load', function() {
  fetchProducts();
});

function fetchProducts() {
  fetch('/api/products')
      .then(response => response.text())
      .then(data => {
          const productList = document.getElementById('productList');
          const products = data.split('\n');
          products.forEach(product => {
              const listItem = document.createElement('li');
              listItem.textContent = product;
              productList.appendChild(listItem);
          });
      })
      .catch(error => {
          console.error('Error fetching products:', error);
      });
}

// Toggle chat popup visibility
function toggleChat() {
  var chatPopup = document.getElementById("chatPopup");
  chatPopup.style.display = chatPopup.style.display === "none" ? "block" : "none";
}

// Send message
function sendMessage() {
  var emailInput = document.getElementById("emailInput");
  var messageInput = document.getElementById("messageInput");

  // Check if the email is provided and valid
  if (!emailInput.checkValidity()) {
      alert("Please enter a valid email address.");
      return;
  }

  var email = emailInput.value;
  var message = messageInput.value;

  // Clear the message input field
  messageInput.value = "";

  // Display the sent message in the chat body
  var chatBody = document.getElementById("chatBody");
  var newMessage = document.createElement("div");
  newMessage.className = "message";
  newMessage.innerHTML = "<span class='user-message'>You: " + message + "</span>";
  chatBody.appendChild(newMessage);
}

// File upload
var fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", handleFileUpload);

function handleFileUpload() {
  var file = fileInput.files[0];
  // Perform necessary actions with the uploaded file (e.g., send to server, display in chat, etc.)
}
// Get the user agent string
var userAgent = navigator.userAgent.toLowerCase();



