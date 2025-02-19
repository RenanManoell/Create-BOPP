function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').setTitle('Gerador de etiqueta BOPP HYUNDAI');
}

function processSpreadsheet() {
  const url = "https://docs.google.com/spreadsheets/d/1FKG2b4pvQnMqVaf9htNCfleSVVtjUgJ1TOzbMHjSuCM/edit?usp=sharing";
  const spreadsheet = SpreadsheetApp.openByUrl(url);
  const sheet = spreadsheet.getSheets()[0];
  const range = sheet.getDataRange();
  const values = range.getValues();
  
  let labelsHtml = '';

  for (let i = 1; i < values.length; i++) {
    const titulo = values[i][0];
    const position1 = values[i][1];
    const code1 = values[i][2];
    const position2 = values[i][3];
    const code2 = values[i][4];

    labelsHtml += `
      <div id="label">
        <br>
        ${generateLabel(titulo, position1, code1)}
        <br>
        <br>
        ${generateLabel(titulo, position2, code2)}
      </div>
    `;
    
  }

  return labelsHtml;
}

function generateLabel(titulo, position, code) {
  return `
    <div style=width: 8cm; height: 11cm; flex-direction: column; ">
      <!-- Texto "Etiqueta de Posição" no topo, centralizado -->
      <div style="text-align: center; color: black; font-size: 20px; width: 100%;">
        <strong>${titulo}</strong>
      </div>
      <!-- Texto da posição no final, centralizado e com fundo preto -->
      <div style="text-align: center; background-color: black; color: white; font-size: 1.3cm; width: 100%;;">
        <strong>${position}</strong>
      </div>
      <!-- Div com QR Codes dos dois lados e código de barras no meio -->
      <div style="display: flex; justify-content: center; width: 100%;">
        <!-- QR Code no lado esquerdo -->
        <div style="text-align: center;">
          <div class="qrcode" style="margin: 10px" data-code="${code}"></div>
            </div><!-- Contêiner para código de barras e QR Code -->
              <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">                
              <svg class="barcode"data-code="${code}" ></svg>
              <div class="qrcodeMenor"  data-code="${code}" ></div>
            </div>

          <div class="qrcode" style="margin: 10px" data-code="${code}"></div>

        </div>
      </div>
  `;
}
