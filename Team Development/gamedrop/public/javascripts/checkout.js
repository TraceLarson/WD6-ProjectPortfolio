// Create instance of the stripe object, passing publishable key to identify website to stripe
const stripe = Stripe('pk_test_RRMBb99tP5CwHTKpcL7aJktW');

// Create instance of elements object to manage UI elements
const elements = stripe.elements();

// Create a single line input to collect all necessary card details
const card = elements.create("card");

// Mount the card element to attach it to DOM
card.mount("#card-element");

// Cache form element
let form = document.getElementById("checkout-form");

/*===============================================================================*/
/* EVENTS
/*===============================================================================*/

// Create a token when checkout form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToken();
});

card.addEventListener("change", (e) => {
    let errorElement = document.getElementById("card-errors");
    errorElement.classList.add("hidden");
    errorElement.textContent = "";
    
    if (e.error) {
        errorElement.classList.remove("hidden");
        errorElement.textContent = e.error.message;
    }
});

/*===============================================================================*/
/* FUNCTIONS
/*===============================================================================*/


function stripeTokenHandler(token) { // Inserts token ID into form and submits form to server
    // Create new hidden input, store token inside it, add input to form
    let hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", "stripeToken");
    hiddenInput.setAttribute("value", token.id);
    form.appendChild(hiddenInput);

    // Submit form
    form.submit();
}

function createToken() { // Tries to create a stripe token and takes action based on result
    let userDetails = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value
    };

    stripe.createToken(card, userDetails).then((result) => {
        if (result.token) {
            // Send token to server
            stripeTokenHandler(result.token);
        }
    });
}