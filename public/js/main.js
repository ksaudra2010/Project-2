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
  if ($('#morePeople').attr("checked", "checked")){
    var people = 'Lots';
  } else {
    var people = 'Fewer';
  }
  if ($('#hard').attr("checked", "checked")){
    var effort = 'Hard';
  } else {
    var effort = 'Easy';
  }
  if ($('#expensive').attr("checked", "checked")){
    var expensive = 'Expensive';
  } else {
    var expensive = 'Reasonable';
  }
  const obj = {
    ruralurban: ruralurban,
    terrain: terrain,
    people: people,
    effort: effort,
    expensive: expensive
  }
  $.post('/api/places', obj)
    .then((res) => {
      const destinations = [];
      res.forEach(location => {
        $.get(`/api/images/${location.latltude}/${location.longitude}`, {
    
        })
          .then((data) => {
            const destination = { name: location.name, images: data};
            destinations.push(destination);
          })
          .catch((err) => {
            console.log(err);
          });
      });
      return destinations;

    })
    .then((dest) => {
      const object = { dest };
      console.log('Send to /api/results/: ', object);
      $.post('/api/results', object)
        .then((res) => {

        });
    })
    .catch((err) => {
      console.log(err);
    });

  return false;
}
function showPreview(img) {
  const src = $(img).data('preview');
  $('#bigPicture').attr('src', src);
}