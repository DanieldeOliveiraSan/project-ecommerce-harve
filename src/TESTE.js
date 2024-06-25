import "./App.css";
import TestComponent from "./componentes/TestComponent";
import { RouteApp } from "./route";
import { DadosNome } from "./componentes/atividadeCasa/DadosNome";
import { DadosEndereco } from "./componentes/atividadeCasa/DadosEndereco";
import { DadosInstitucao } from "./componentes/atividadeCasa/DadosInstituicao";
import { DadosQualidade } from "./componentes/atividadeCasa/DadosQualidade";
import { DadosNomeDescricao } from "./componentes/atividadeCasa/DadosNomeDescricao";
function App() {
  return (
    <div className="App">
      <DadosNome
        nome="Daniel"
        idade="27 anos"
        telefone="41 9990011-25"
      ></DadosNome>
      <DadosEndereco
        rua="Camões"
        bairro="Hugo Lange "
        numero="000"
        complemento="Casa esquina"
      ></DadosEndereco>
      <DadosEndereco
        rua="Camões"
        bairro="Hugo Lange "
        numero="000"
        complemento="Casa esquina"
      ></DadosEndereco>
      <DadosInstitucao instituicao="Universidade" curso="Ti"></DadosInstitucao>
      <DadosQualidade>
        <DadosNomeDescricao></DadosNomeDescricao>
      </DadosQualidade>
    </div>
  );
}

export default App;
