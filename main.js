// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
//  https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929
//see notes
const uglifyWord = s => [...s].reduce((a,c,i) => a.concat(/[A-Z]/.test(a[i-1])?c.toLowerCase():c.toUpperCase()),[]).join('');

console.log(uglifyWord("aaa-bbb-ccc"));
console.log(uglifyWord("eeee-ffff-gggg"));
console.log(uglifyWord("qwe123asdf456zxc"));
console.log(uglifyWord("Hello World"));

// KATA 2 7kyu
// https://www.codewars.com/kata/5892595f190ca40ad0000095
const mispelled = (word1, word2) => {
  if(Math.abs(word1.length - word2.length) >= 2) {
    return false;
  }
    
  if(Math.abs(word1.length - word2.length) == 1) {
    return (word1.includes(word2) || word2.includes(word1)); 
  }  
 
 let notM = 0;
  for(let i = 0; i < word1.length; i++) {  
    if(word1[i] !== word2[i]) {
      notM += 1;
    }  
  }
  return notM <= 1 ? true : false;
}

console.log(mispelled('versed', 'aversed')); 
console.log(mispelled('aaversed', 'versed')); 
console.log(mispelled('versed', 'aaversed')); 

// KATA 3 7kyu
// https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript
const missingWord = (nums, str) => {
  const arr = str.replace(/ /g, '').toLowerCase().split('');
  if (Math.max(...nums) > arr.length) return `No mission today`;
  return nums.sort((a,b) => a - b).map(cur => arr[cur]).join('');
}

console.log(missingWord([5, 0, 3], "I love you"));
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"));

// KATA 4 7kyu
// https://www.codewars.com/kata/63a2928176157931b3945090/train/javascript
const madShout = sidewalk => 'Oi' + 'i'.repeat((sidewalk.indexOf('F') - sidewalk.indexOf('Y') - 1) / 2) + ' F!';

console.log(madShout('----------YF---------')); 
console.log(madShout('------------Y-------------F---------------'));
console.log(madShout('--------Y----------------F-------'));

// KATA 5 7kyu
// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
const dontGiveMeFive= (start,end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) {
      arr.push(i);
    } 
  }
  return arr.length;
}
 
console.log(dontGiveMeFive(1,9));
console.log(dontGiveMeFive(4,17));
