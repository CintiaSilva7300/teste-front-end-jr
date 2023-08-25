import { Container, Text, TextOf } from './styles';
import CrownSimple from '../../utils/img/CrownSimple.svg';

export default function Category() {
  return (
    <>
      <Container>
        <Text style={{ marginTop: 12 }}>TODAS CATEGORIAS</Text>
        <Text style={{ marginTop: 12 }}>SUPERMERCADOS</Text>
        <Text style={{ marginTop: 12 }}>LIVROS</Text>
        <Text style={{ marginTop: 12 }}>MODA</Text>
        <Text style={{ marginTop: 12 }}>LANÇAMENTOS</Text>
        <TextOf style={{ marginTop: 12 }}>OFERTAS DO DIA</TextOf>

        <div style={{ display: 'flex' }}>
          <img
            src={CrownSimple}
            alt="imagem"
            style={{ marginTop: 10, width: 20, height: 20, margin: 9 }}
          />
          <Text style={{ marginTop: 12 }}>ASSINATURA</Text>
        </div>
      </Container>
    </>
  );
}