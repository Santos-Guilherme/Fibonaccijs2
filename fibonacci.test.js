
const fibonacci = require("./fibonacci");

describe("Função fibonacci()", () => {
  test("deve retornar 0 para n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  test("deve retornar 1 para n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  test("deve retornar 1 para n = 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  test("deve retornar 5 para n = 5", () => {
    expect(fibonacci(5)).toBe(5);
  });

  test("deve retornar 55 para n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  test("deve lançar erro para número negativo", () => {
    expect(() => fibonacci(-1)).toThrow();
  });

  test("deve lançar erro para valores não inteiros", () => {
    expect(() => fibonacci(2.5)).toThrow();
  });

  test("deve lançar erro para tipos inválidos", () => {
    expect(() => fibonacci("abc")).toThrow();
    expect(() => fibonacci(null)).toThrow();
    expect(() => fibonacci(undefined)).toThrow();
  });
});