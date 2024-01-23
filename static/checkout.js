// checkout.js

// Function to confirm checkout (clears the cart and shows confirmation)
function confirmCheckout() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    if (firstName && lastName && email) {
        alert(`Thank you, ${firstName} ${lastName}, for your purchase! An email confirmation has been sent to ${email}.`);
        cart = [];
        updateCart();
    } else {
        alert('Please fill in all the required fields.');
    }

    const custom_attributes = {
        'email': email,
        'first_name': firstName,
        'last_name': lastName
      }
      
    appier('identify', custom_attributes);
}
