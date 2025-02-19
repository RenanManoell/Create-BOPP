# 🚀 Gerador de Etiquetas de Posição HYUNDAI

Um **AppScript** desenvolvido para automatizar a geração de etiquetas de posição com códigos de barras e QR Codes, a partir de dados em uma planilha do Google Sheets. Ideal para processos de logística, estoque e organização.

---

## 🛠️ Funcionalidades

- **Geração automática de etiquetas:** Cria etiquetas a partir de dados em uma planilha do Google Sheets.
- **Códigos de barras e QR Codes:** Integra códigos de barras (CODE39) e QR Codes nas etiquetas.
- **Layout otimizado para impressão:** Design responsivo e ajustes para impressão direta.
- **Interface simples:** Botões para gerar e imprimir etiquetas facilmente.

---

## ⚙️ Como Usar

1. **Acesse a planilha de dados:**  
   - A planilha utilizada pelo script está disponível.  
   - Certifique-se de que os dados estejam no formato correto (título, posição 1, código 1, posição 2, código 2).

2. **Execute o script:**  
   - Acesse o [Google Apps Script](https://script.google.com/), cole o código e publique como uma aplicação web.

3. **Gere e imprima as etiquetas:**  
   - Na interface gerada, clique em **"Gerar Etiquetas"** para criar as etiquetas.  
   - Use o botão **"Imprimir Etiquetas"** para imprimir diretamente.

---

## 🖥️ Tecnologias Utilizadas

- **Google Apps Script:** Para automação e integração com o Google Sheets.
- **HTML/CSS:** Para a interface do usuário e design das etiquetas.
- **JsBarcode:** Biblioteca para gerar códigos de barras.
- **QRCode.js:** Biblioteca para gerar QR Codes.

---

## 📂 Estrutura do Código

### **Backend (Google Apps Script)**
- **`doGet()`:** Renderiza a interface HTML.
- **`processSpreadsheet()`:** Extrai os dados da planilha e gera o HTML das etiquetas.
- **`generateLabel()`:** Cria o layout HTML de cada etiqueta.

### **Frontend (HTML/JavaScript)**
- **Interface simples:** Com botões para gerar e imprimir etiquetas.
- **Integração com bibliotecas:** Usa JsBarcode e QRCode.js para gerar códigos de barras e QR Codes dinamicamente.
- **Funcionalidade de impressão:** Botão para imprimir as etiquetas diretamente.

---

## 🚨 Requisitos

- **Conta Google:** Para acessar o Google Sheets e o Google Apps Script.
- **Planilha de dados:** No formato especificado (título, posição 1, código 1, posição 2, código 2).
- **Navegador moderno:** Para renderizar a interface e gerar os códigos.

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para usar, modificar e distribuir conforme necessário.

---

## 👤 Autor

**Renan Manoel**  
Desenvolvedor e entusiasta de automação.  

---

## 💡 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir **issues** ou **pull requests** para melhorar o projeto.

---

✨ **Dúvidas ou sugestões?** Entre em contato ou abra uma issue no repositório!

---
