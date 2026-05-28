const sumar = require('./index');

// Definimos nuestra prueba
test('La función sumar debe dar 4 cuando sumamos 2 + 2', () => {
    expect(sumar(2, 2)).toBe(4);
});