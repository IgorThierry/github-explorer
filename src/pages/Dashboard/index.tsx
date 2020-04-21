import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/16635562?s=460&v=4"
            alt="Igor Thierry"
          />
          <div>
            <strong>IgorThierry/github-explorer</strong>
            <p>
              Aplicação em ReactJS e TypeScript para explorar os repositórios do
              GitHub através de sua API pública ;)
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/16635562?s=460&v=4"
            alt="Igor Thierry"
          />
          <div>
            <strong>IgorThierry/github-explorer</strong>
            <p>
              Aplicação em ReactJS e TypeScript para explorar os repositórios do
              GitHub através de sua API pública ;)
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/16635562?s=460&v=4"
            alt="Igor Thierry"
          />
          <div>
            <strong>IgorThierry/github-explorer</strong>
            <p>
              Aplicação em ReactJS e TypeScript para explorar os repositórios do
              GitHub através de sua API pública ;)
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/16635562?s=460&v=4"
            alt="Igor Thierry"
          />
          <div>
            <strong>IgorThierry/github-explorer</strong>
            <p>
              Aplicação em ReactJS e TypeScript para explorar os repositórios do
              GitHub através de sua API pública ;)
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
