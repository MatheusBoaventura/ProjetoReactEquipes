import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Cargo from './componentes/Cargo/Index'
import Rodape from './componentes/Rodape/Index';

function App() {

  const cargos = [
    //Lista de objetos
    {
      nome: 'Capitão',
      corPrimaria: '#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome: 'Imediato',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Atirador',
      corPrimaria: '#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome: 'Navegador',
      corPrimaria: '#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'Timoneiro',
      corPrimaria: '#D86EBF',
      corSecundaria:'#FAE5F5'
    },
    {
      nome: 'Médico',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },    
    {
      nome: 'Carpinteiro',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario cargos={cargos.map(cargo => cargo.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {/*{ para cada cargo da nossa lista de cargos cria-se um componente chamado cargo com esse nome) 
        A key é usada para controlar a renderização*/ }
      {cargos.map(cargo => <Cargo 
      key={cargo.nome} 
      nome={cargo.nome} 
      corPrimaria={cargo.corPrimaria} 
      corSecundaria={cargo.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.cargo === cargo.nome)}/>)}
      <Rodape />
    </div>
  );
}

export default App;