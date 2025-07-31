// Sample ticket data (can be replaced with data from an API)
const tickets = [
    {
      id: 1,
      title: "Flight to New York",
      departure: "10:00 AM",
      price: "$200",
    },
    {
      id: 2,
      title: "Flight to London",
      departure: "2:00 PM",
      price: "$300",
    },
    {
      id: 3,
      title: "Flight to Paris",
      departure: "6:00 PM",
      price: "$250",
    },
  ];
  
  // Function to display tickets
  function displayTickets() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results
  
    tickets.forEach((ticket) => {
      const ticketCard = document.createElement("div");
      ticketCard.classList.add("ticket-card");
  
      ticketCard.innerHTML = `
        <h3>${ticket.title}</h3>
        <p>Departure: ${ticket.departure}</p>
        <p>Price: ${ticket.price}</p>
        <button class="book-button" data-id="${ticket.id}">Book Now</button>
      `;
  
      resultsDiv.appendChild(ticketCard);
    });
  
    // Add event listeners to "Book Now" buttons
    const bookButtons = document.querySelectorAll(".book-button");
    bookButtons.forEach((button) => {
      button.addEventListener("click", handleBooking);
    });
  }
  
  // Function to handle booking
  function handleBooking(event) {
    const ticketId = event.target.getAttribute("data-id");
    const ticket = tickets.find((t) => t.id == ticketId);
  
    if (ticket) {
      alert(`Booking confirmed for ${ticket.title} at ${ticket.price}`);
      // Redirect to a payment page (replace with your payment page URL)
      window.location.href = "payment.html";
    }
  }
  
  // Display tickets when the page loads
  window.onload = displayTickets;
  