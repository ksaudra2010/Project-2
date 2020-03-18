$(document).ready(() => {
  $('.clickMe').click(() => {
    $.get('/api/images/21/-157', {
    
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
