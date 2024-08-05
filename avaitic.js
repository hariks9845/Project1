document.addEventListener('DOMContentLoaded', function() {
    const ticketListDiv = document.getElementById('ticket-list');
  
    // Retrieve tickets from localStorage
    const ticketsList = JSON.parse(localStorage.getItem('ticketsList')) || [];
  
    // Display tickets
    ticketsList.forEach(ticket => {
      const ticketDiv = document.createElement('div');
      ticketDiv.classList.add('ticket');
      ticketDiv.innerHTML = `
        <p><strong>Name:</strong> ${ticket.name}</p>
        <p><strong>Email:</strong> ${ticket.email}</p>
        <p><strong>Date:</strong> ${ticket.date}</p>
        <p><strong>Time:</strong> ${ticket.time}</p>
        <p><strong>Number of Tickets:</strong> ${ticket.tickets}</p>
      `;
      ticketListDiv.appendChild(ticketDiv);
      
    });
  });
  