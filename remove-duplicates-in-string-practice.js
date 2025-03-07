
// https://www.tryexponent.com/courses/software-engineering/swe-practice/remove-duplicates-in-string-practice


const identifyAdjacent = (s, k) => {
  const re = new RegExp(`(\\w)\\1{${k-1}}`, 'g');
  let last;
  while (last !== s) {
    last = s;
    s = s.replace(re, '');
  }
  return s;
};


identifyAdjacent('abcd', 2);
// output: 'abcd'

identifyAdjacent('deeedbbcccbdaa', 3);
// output: 'aa'

identifyAdjacent('pbbcggttciiippooaais', 2);
// output: 'ps'

identifyAdjacent('aaabbbacd', 3);
// output: 'acd'
