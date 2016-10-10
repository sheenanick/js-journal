// var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title,body);
    $("#newtitle").text(entry.title);
    $("#newbody").text(entry.body);
    $("#newword").text(entry.wordCount(body));
    $("#newvowel").text(entry.countVowels(body));
    $("#newconsonant").text(entry.countConsonants(body));
    $("#newteaser").text(entry.getTeaser(body));
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
