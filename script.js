analytics.identify('f4ca124298', {
    name: 'Michael Brown',
    email: 'mbrown@example.com'
  });
function clicked() {
    console.log('clicked')
    analytics.track('Button Clicked', {
        data: 'babo'
      });
      
}