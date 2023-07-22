import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LongestWordService {

  constructor() { }

findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
  }
}
