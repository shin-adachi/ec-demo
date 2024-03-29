// checkout.js

// Function to confirm checkout (clears the cart and shows confirmation)
function confirmCheckout() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const birthday = document.getElementById('birthday').value;

    if (firstName && lastName && email && birthday) {
        const custom_attributes = {
            'email': email,
            'first_name': firstName,
            'last_name': lastName,
            'birthday': birthday
        };
        appier('identify', custom_attributes);
        
        alert(`Thank you, ${firstName} ${lastName}, for your purchase! An email confirmation has been sent to ${email}.`);
        appier('event', 'checkout_completed');
        appier('event', 'product_purchased');
    } else {
        alert('Please fill in all the required fields.');
    }

    
      
    
}
