import "./modal.css";
import { FiX } from "react-icons/fi";

export default function Modal() {
  return (
    <div className="modal">

      <div className="container">

        <button className="close">

          <FiX size={25} color="#FFF" />
          Voltar

        </button>

        <main>
          <h2>Detalhes do Chamados</h2>

          <div className="row">

            <span>
              Cliente: <i>Fulano</i>
            </span>

          </div>

          <div className="row">

            <span>
              Assunto: <i>Suporte</i>
            </span>

            <span>
              Cadastrado em: <i>22/05/2023</i>
            </span>

          </div>

          <div className="row">

            <span>
              Status: <i>Aberto</i>
            </span>

          </div>

          <>
            <h3>Complemento</h3>
            <p>
                Aqui vai todo o complemento do chamadoAqui vai todo o complemento do chamadoAqui vai todo o complemento do chamadoAqui vai todo o complemento do chamadoAqui vai todo o complemento do chamadoAqui vai todo o complemento do chamado
            </p>
          </>

        </main>

      </div>

    </div>

  );
}
