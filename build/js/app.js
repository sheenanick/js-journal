!function t(n,e,o){function r(i,a){if(!e[i]){if(!n[i]){var s="function"==typeof require&&require;if(!a&&s)return s(i,!0);if(u)return u(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=e[i]={exports:{}};n[i][0].call(c.exports,function(t){var e=n[i][1][t];return r(e?e:t)},c,c.exports,t,n,e,o)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(t,n,e){function o(t,n){this.title=t,this.body=n}o.prototype.wordCount=function(t){return t.split(" ").length},o.prototype.countVowels=function(t){return t.match(/[aeiou]/gi).length},o.prototype.countConsonants=function(t){return t.match(/[bcdfghjklmnpqrstvxzwy]/gi).length},o.prototype.getTeaser=function(t){var n=t.match(/^(.*?)[.?!]/);return n[0].split(" ").length<=8?n[0]:t.split(/\s+/).slice(0,8).join(" ")},e.entryModule=o},{}],2:[function(t,n,e){var o=t("./../js/journal.js").entryModule;$(document).ready(function(){$("form").submit(function(t){t.preventDefault();var n=$("#title").val(),e=$("#body").val(),r=new o(n,e);$("#newtitle").text(r.title),$("#newbody").text(r.body),$("#newword").text(r.wordCount(e)),$("#newvowel").text(r.countVowels(e)),$("#newconsonant").text(r.countConsonants(e)),$("#newteaser").text(r.getTeaser(e))})}),$(document).ready(function(){$("#signup").submit(function(t){t.preventDefault();var n=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+n+" has been added to our list!</p>")})})},{"./../js/journal.js":1}]},{},[2]);