function passwordChecker(password) {
  // Condition 1: Minimum 8 caractères
  if (password.length < 8) return false;

  // Condition 2: Minimum un caractère spécial
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;

  // Condition 3: Minimum un chiffre
  if (!/[0-9]/.test(password)) return false;

  // Condition 4: Pas de "IPL" (peu importe la casse)
  if (/ipl/i.test(password)) return false;

  return true;
}

module.exports = passwordChecker;