
    function fibonacci(n) {
        if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
          throw new Error("O argumento deve ser um número inteiro não negativo.");
        }
      
        
        if (n === 0) return 0;
        if (n === 1) return 1;
      
        let a = 0;
        let b = 1;
      
        for (let i = 2; i <= n; i++) {
          const temp = a + b;
          a = b;
          b = temp;
        }
      
        return b;
      }
      

      module.exports = fibonacci;

    