const sum = require('../public/javascripts/sum.js');
     test(
          'adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3); }
     );
     test(
          'adds 1 + (-1) to equal 0', () => { expect(sum(1, -1)).toBe(0); }
     );
     test(
          'adds 0.4 + 0.6 to equal 1', () => { expect(sum(0.4, 0.6)).toBe(1); }
     );
     test(
          'adds 1 + 2 to not equal \'e\'', () => { expect(sum(1, 2)).not.toBe('e'); }
     );
     test(
          'adds a + d to not equal \'e\'', () => { expect(sum('a', 'd')).not.toBe('e'); }
     );
