document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const tickets = document.getElementById('tickets').value;
  
    // Create a ticket object
    const ticket = {
      name,
      email,
      date,
      time,
      tickets
    };
  
    // Store the ticket object in localStorage
    let ticketsList = JSON.parse(localStorage.getItem('ticketsList')) || [];
    ticketsList.push(ticket);
    localStorage.setItem('ticketsList', JSON.stringify(ticketsList));
  
    // Redirect to the available tickets page
    window.location.href = 'avaitic.html';
  });
  
  