const stripe = Stripe('pk_test_51PSvNDP8PEmlUBaKZHF3wB8nEHcPcetUKELTPZdjJ5xQlnlEZ8APWr4vhjgfOeGBwKTrNN3Ve8GEmDRPqpBDmco600KrpD6bcx');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });