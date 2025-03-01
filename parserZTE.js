const fs = require('fs');

function parseZTE(snFilePath, stateFilePath) {
  try {
    const snData = fs.readFileSync(snFilePath, 'utf8').split('\n').filter(line => line.trim() !== '');
    const stateData = fs.readFileSync(stateFilePath, 'utf8').split('\n').filter(line => line.trim() !== '');

    if (snData.length !== stateData.length) {
      console.error('Erro: Os arquivos SNs e States têm tamanhos diferentes.');
      return [];
    }

    const onus = [];
    for (let i = 0; i < snData.length; i++) {
      const sn = snData[i].trim();
      const state = stateData[i].trim();

      // Aqui você precisará de uma maneira de descobrir o slot e porta.
      // Assumindo que você tem alguma lógica para isso, ou que essa informação
      // esteja em algum lugar, ou que você queira colocar dados padrões.
      const slot = "1"; // exemplo
      const port = "1"; // exemplo
      const ont_id = "1"; // exemplo

      onus.push({ slot, port, ont_id, sn, state, olt: 'ZTE' });
    }

    return onus;
  } catch (err) {
    console.error('Erro ao processar arquivos ZTE:', err);
    return [];
  }
}

module.exports = {
  parseZTE,
};