const Calculate = {
    factorial(n) {
  
      if (n === 0) {
        return 1;
      }
  
      for (let i = n - 1; i >= 1; i--) {
        n = n * i;
      }
      return n;
    }
  }
  
  module.exports = Calculate;