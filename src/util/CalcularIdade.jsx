export function calcularIdade(nascimento) {
  // Função para calcular a idade do gato a partir da data de nascimento, incluindo meses
  if (!nascimento) return "?";
  const hoje = new Date();
  const nasc = new Date(nascimento);
  let meses = (hoje.getFullYear() - nasc.getFullYear()) * 12;
  meses += hoje.getMonth() - nasc.getMonth();
  if (hoje.getDate() < nasc.getDate()) meses--;
  if (meses < 1) return "Menos de 1 mês";
  if (meses < 12) return `${meses} ${meses === 1 ? "mês" : "meses"}`;
  const idade = Math.floor(meses / 12);
  return `${idade} ${idade === 1 ? "ano" : "anos"}`;
}
