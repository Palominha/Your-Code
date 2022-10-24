// import logo from './logo.svg';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import './App.css';

function App() {

  // Criação da constante que vai manipular o valor do meu QrCode
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');


  // Função para baixar o Qrcode
  function baixarQrCode(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  // Função para gerar o Qrcode
  function trocarQRcode(e) {
    setLink(e.target.value);
    baixarQrCode(e.target.value);

  }
  return (
    <div
      className="container">

      <div className="conteudo">

        <h1>Crie um  <span>Qcode Exclusivo</span> do seu site!!</h1>

        {/* Inicio QrCode */}
        <QRCode
          className="qrcode"
          value={link}
        />

        {/* Fim QrCode */}

        {/* Incio Input  */}
        <input
          className="input"
          placeholder="Coloque seu link aqui..."
          value={link}
          onChange={(e) => trocarQRcode(e)}

        />
        {/* Fim Input  */}

        {/* Incio Botão */}
        <a href={qrcodeLink} download={'qrcode.png'}>
          <button>Baixe seu QrCode!!</button>
        </a>
        {/* Fim Botão */}

      </div>
    </div>
  );
}

export default App;
