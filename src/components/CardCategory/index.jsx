import moda from '../../utils/img/moda.png';
import saude from '../../utils/img/saude.png';
import whiskey from '../../utils/img/whiskey.png';
import corrida from '../../utils/img/corrida.png';
import { Card, Div, Text, TextRosa } from './styles';
import ferramentas from '../../utils/img/ferramentas.png';
import supermercados from '../../utils/img/supermercados1.png';
import monitorarTabletESmartohone1 from '../../utils/img/monitorar-tablet-e-smartohone1.png';

export default function CardCategory() {
  return (
    <Div>
      <div>
        <Card>
          <img src={monitorarTabletESmartohone1} alt="" srcset="" />
        </Card>
        <TextRosa style={{ marginLeft: 50 }}>Tecnologia</TextRosa>
      </div>

      <div>
        <Card>
          <img src={supermercados} alt="" srcset="" />
        </Card>
        <Text style={{ marginLeft: 50 }}>Mercado</Text>
      </div>

      <div>
        <Card>
          <img src={whiskey} alt="" srcset="" />
        </Card>

        <Text style={{ marginLeft: 50 }}>Bebidas</Text>
      </div>

      <div>
        <Card>
          <img src={ferramentas} alt="" srcset="" />
        </Card>
        <Text style={{ marginLeft: 50 }}>Ferramentas</Text>
      </div>

      <div>
        <Card>
          <img src={saude} alt="" srcset="" />
        </Card>
        <Text style={{ marginLeft: 50 }}>Saúde</Text>
      </div>

      <div>
        <Card>
          <img src={corrida} alt="" srcset="" />
        </Card>
        <Text>Esportes e Fitness</Text>
      </div>

      <div>
        <Card>
          <img src={moda} alt="" srcset="" />
        </Card>
        <Text style={{ marginLeft: 50 }}>Moda</Text>
      </div>
    </Div>
  );
}
