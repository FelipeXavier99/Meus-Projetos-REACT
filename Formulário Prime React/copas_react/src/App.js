import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css'; // Importa o tema padrão do PrimeReact
import 'primereact/resources/primereact.min.css'; // Importa os estilos principais do PrimeReact
import 'primeicons/primeicons.css'; // Importa os ícones do PrimeIcons


import './App.css'; // Importando o arquivo CSS

function FormularioCadastro() {
  const [showDialog, setShowDialog] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleSave = () => {
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
    setShowDialog(false);
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  const dialogFooter = (
    <div className="p-dialog-footer">
      <Button label="Salvar" onClick={handleSave} />
      <Button label="Cancelar" onClick={handleCancel} className="p-button-secondary" />
    </div>
  );

  return (
    <div>
      <Button label="Abrir formulário" onClick={handleClick} />

      <Dialog
        header="Formulário de Cadastro"
        visible={showDialog}
        onHide={handleCancel}
        footer={dialogFooter}
        dismissableMask
      >
        <div className="formulario">
          <div className="p-field">
            <label htmlFor="nome">Nome</label>
            <InputText id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="email">Email</label>
            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default FormularioCadastro;
