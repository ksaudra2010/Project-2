$(document).ready(() => {
  $("#preview").dialog({
    autoOpen: false,
    modal: true,
    height: "auto",
    width: "auto",
    resizable: false,
  });
});
function submitInput(){
  
  $('#results').empty();
  console.log("HERE");
  const ruralurban = $('#locale').val();
  const terrain = $('#attribute').val();
  if ($("input[name='privacy']:checked").prop('id') === 'morePeople'){
    var people = 'Lots';
  } else {
    var people = 'Fewer';
  }
  if ($("input[name='effort']:checked").prop('id') === 'hard'){
    var effort = 'Hard';
  } else {
    var effort = 'Easy';
  }
  if ($("input[name='price']:checked").prop('id') === 'expensive'){
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
      const destinations = res.map(location => {
        // console.log(location.latitude,location.longitude);
        return $.get(`/api/images/${location.latitude}/${location.longitude}`)
          .then((data) => {
            return { name: location.name, images: data};
          })
      });
      return destinations;
    })
    .then((dest) => {
      Promise.all( dest ).then(results => {
        console.log('Send to /api/results/: ', results);
        results.forEach( location => {
          $('#results').append($('<h2 class="subtitle">').text(location.name));
          for (let x = 0; x < location.images.length; x++) {
            const el = location.images[x];
            $('#results').append($(`<img class="thumb" src="${el.image.daylight.thumbnail}" data-preview="${el.image.daylight.preview}" title="${el.title}" onclick="showPreview(this)">`));
          }
        });
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
  $('#preview').dialog('open');
}