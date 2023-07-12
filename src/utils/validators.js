export const checkCPF = (strCPF) => {
  if (!strCPF) {
    return false;
  }
  strCPF = strCPF.replace(/\.|-/g, "");
  let Soma;
  let Resto;
  Soma = 0;
  if (
    [
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
      "00000000000",
    ].includes(strCPF)
  ) {
    return false;
  }
  let i = 0;
  for (i = 1; i <= 9; i++) {
    Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) {
    Resto = 0;
  }
  if (Resto !== parseInt(strCPF.substring(9, 10))) {
    return false;
  }

  Soma = 0;
  for (i = 1; i <= 10; i++) {
    Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) {
    Resto = 0;
  }
  if (Resto !== parseInt(strCPF.substring(10, 11))) {
    return false;
  }

  return true;
};

export const isValidPhone = (phone) => {
  if (!phone) {
    return false;
  }
  const currentPhone = phone.replace(/\D/g, "");
  const invalidPhones = [
    "111111111",
    "911111111",
    "11111111",
    "222222222",
    "922222222",
    "22222222",
    "333333333",
    "933333333",
    "33333333",
    "444444444",
    "944444444",
    "44444444",
    "555555555",
    "955555555",
    "55555555",
    "666666666",
    "966666666",
    "66666666",
    "777777777",
    "977777777",
    "77777777",
    "888888888",
    "988888888",
    "88888888",
    "999999999",
    "999999999",
    "99999999",
    "000000000",
    "900000000",
    "00000000",
  ];
  const withoutDDD = String(currentPhone).substr(2, 9);
  const find = invalidPhones.indexOf(withoutDDD);

  return find === -1 && currentPhone?.length === 11;
};
