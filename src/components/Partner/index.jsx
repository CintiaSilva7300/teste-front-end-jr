import {
  CardContainer,
  TextOverlay,
  Text2Overlay,
  Button,
  Container,
  Typography,
  CardContainer2,
} from './styles';

export default function Partiner() {
  return (
    <>
      <div style={{ display: 'flex', marginLeft: 105 }}>
        <CardContainer>
          <TextOverlay>Parceiros</TextOverlay>
          <Text2Overlay>Lorem ipsum dolor sit amet, consectetur</Text2Overlay>

          <div style={{ paddingLeft: 50 }}>
            <Button>CONFIRA</Button>
          </div>
        </CardContainer>

        <CardContainer>
          <TextOverlay>Parceiros</TextOverlay>
          <Text2Overlay>Lorem ipsum dolor sit amet, consectetur</Text2Overlay>

          <div style={{ paddingLeft: 50 }}>
            <Button>CONFIRA</Button>
          </div>
        </CardContainer>
      </div>

      <Container>
        <hr
          style={{
            width: 360,
            border: 0,
            height: 1,
            background: '#DEDEDE',
            marginTop: 30,
          }}
        />

        <Typography>Produtos relacionados</Typography>

        <hr
          style={{
            width: 360,
            border: 0,
            height: 1,
            background: '#DEDEDE',
            marginTop: 30,
          }}
        />
      </Container>
      <div
        style={{
          textAlign: 'center',
          color: '#3F3F40',
          fontFamily: 'Poppins',
          fontSize: 15,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
        }}
      >
        <p>Ver todos</p>
      </div>

      <div style={{ display: 'flex', marginLeft: 100 }}>
        <CardContainer2>
          <TextOverlay>Parceiros</TextOverlay>
          <Text2Overlay>Lorem ipsum dolor sit amet, consectetur</Text2Overlay>

          <div style={{ paddingLeft: 50 }}>
            <Button>CONFIRA</Button>
          </div>
        </CardContainer2>

        <CardContainer2>
          <TextOverlay>Parceiros</TextOverlay>
          <Text2Overlay>Lorem ipsum dolor sit amet, consectetur</Text2Overlay>

          <div style={{ paddingLeft: 50 }}>
            <Button>CONFIRA</Button>
          </div>
        </CardContainer2>
      </div>
    </>
  );
}
