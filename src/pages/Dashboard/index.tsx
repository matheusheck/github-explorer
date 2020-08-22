import React from 'react';
import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/39709032?s=460&u=ca18bc9085f2c61d79aabe9a17c42db219c46162&v=4"
            alt="Matheus Heck"
          />
        </a>
        <div>
          <strong>matheusheck/challenges</strong>
          <p>Um apanhado de desafios que realizei</p>
        </div>
      </Repositories>
    </>
  );
};

export default Dashboard;
