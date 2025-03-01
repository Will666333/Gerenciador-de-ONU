const fs = require('fs');
function parseHuawei(filePath) {
    const data = fs.readFileSync(filePath, 'utf8'); // Lê o arquivo e armazena o conteúdo em 'data'
    const lines = data.split('\n'); // Divide o conteúdo em linhas
    const onus = []; // Array para armazenar as informações das ONUs
  
    for (const line of lines) {
      if (line.trim() === '') continue; // Ignora linhas vazias
  
      const parts = line.split(/\s+/); // Divide a linha em partes usando espaços como separadores
      if (parts.length < 5) continue; // Ignora linhas com menos de 5 partes
  
      const [flameSlotPort, sn, state] = [parts[0], parts[3], parts[4]]; // Extrai as informações relevantes
  
      const [flame, slot, port] = flameSlotPort.split('/'); // Divide flameSlotPort em flame, slot e port
  
      const ont_id = parts[1]; // Extrai o ont_id
  
      onus.push({ slot, port, ont_id, sn, state, olt: 'Huawei' }); // Adiciona as informações ao array 'onus'
    }
  
    return onus; // Retorna o array com as informações das ONUs
  }
  module.exports = {
    parseHuawei,
    parseZTE,
  };
