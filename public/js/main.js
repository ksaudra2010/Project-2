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
function submitInput(){
  const ruralurban = $('#locale').val();
  const terrain = $('#attribute').val();
  if ($('#morePeople').isChecked()){
    var people = 'Lots';
  } else {
    var people = 'Fewer';
  }
  if ($('#hard').isChecked()){
    var culture = 'Hard';
  } else {
    var culture = 'Easy';
  }
  if ($('#expensive').isChecked()){
    var expensive = 'Expensive';
  } else {
    var expensive = 'Reasonable';
  }
  const obj = {
    ruralurban: ruralurban,
    terrain: terrain,
    people: people,
    culture: culture,
    expensive: expensive
  }
  $.post('/api/places', obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return false;
}