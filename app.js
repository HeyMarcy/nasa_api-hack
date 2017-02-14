var state = {
    NASA_BASE_URL: 'https://api.nasa.gov/planetary/apod',
    text: "",
    image: "" ,
    date: "",
}


var addPOD = function(state,url,text,date) {
    state.url = url;
    state.text = text;
    state.date = date;
    renderData(state);
}

function getDataFromApi(myDate) {

    var query = {
        date: myDate,
        hd: false,
        api_key: 'eZW6vATkVUO5a2rbju1e9NZyCF88YB7oBr86Sfuc',

    }
    $.getJSON(state.NASA_BASE_URL, query, callback);

}

function renderData(state) {
  $('body').css('background-image', 'url('+state.url+')');
    var listElements = "<p>" + state.date + "</p>" +
        "<p>" + state.text + "</p>" +


    $('main').html(listElements);
}

function callback(data){
  var url = data.url;
  var text = data.explanation;
  var date = data.date;
  addPOD(state,url,text,date);
  console.log(state);
}

$(function eventHandlers() {
    $('.js-search-form').submit(function(event) {
        event.preventDefault();
        var myDate = $(event.currentTarget).find('.js-query').val();
        getDataFromApi(myDate);

    });
})

$(function() {
getDataFromApi();
});
