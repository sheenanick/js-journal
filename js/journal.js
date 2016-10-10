function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  return body.split(" ").length;
};

Entry.prototype.countVowels = function(body) {
  return body.match(/[aeiou]/gi).length;
};

Entry.prototype.countConsonants = function(body) {
  return body.match(/[bcdfghjklmnpqrstvxzwy]/ig).length;
};

Entry.prototype.getTeaser = function(body) {
  var sentence = body.match(/^(.*?)[.?!]/);
  if (sentence[0].split(" ").length <= 8) {
    return sentence[0];
  } else {
    return body.split(/\s+/).slice(0,8).join(" ");
  }
}

// exports.entryModule = Entry;
