const passwordChecker = require("../passwordChecker");

test("mot de passe valide", () => {
  expect(passwordChecker("Test@1234")).toBe(true);
});

test("moins de 8 caractères", () => {
  expect(passwordChecker("A@1")).toBe(false);
});

test("sans chiffre", () => {
  expect(passwordChecker("Test@abcd")).toBe(false);
});

test("sans caractère spécial", () => {
  expect(passwordChecker("Test1234")).toBe(false);
});

test("contient IPL", () => {
  expect(passwordChecker("Ipl@1234")).toBe(false);
});
