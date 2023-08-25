import styles, {
  Container,
  Box,
  TypographyTitle,
  TypographyInfo,
  Card,
  CardText,
  CardTextInfo,
  Button,
} from './styles';
import img from '../../utils/img/Group831.svg';
import formasPag from '../../utils/img/formas_pagamento.svg';

export default function Footer() {
  return (
    <>
      <Container>
        <div style={{ display: 'flex' }}>
          <div style={styles.container}>
            <TypographyTitle>Sobre nós</TypographyTitle>

            <div style={{ marginTop: 20 }}>
              <TypographyInfo>Conheça</TypographyInfo>
              <TypographyInfo>COMO COMPRAR</TypographyInfo>
              <TypographyInfo>Indicação e Desconto</TypographyInfo>
            </div>
          </div>

          <div style={styles.info}>
            <TypographyTitle>FALE CONOSCO</TypographyTitle>
            <div style={{ marginTop: 20 }}>
              <TypographyInfo>DÚVIDAS</TypographyInfo>
              <TypographyInfo>Prazos de Entrega</TypographyInfo>
              <TypographyInfo>Formas de Pagamentox</TypographyInfo>
              <TypographyInfo>Formas de Pagamento</TypographyInfo>
              <TypographyInfo>Política de privacidade</TypographyInfo>
              <TypographyInfo>
                Política de privacidade Trocas e Devoluções
              </TypographyInfo>
            </div>
          </div>

          <div style={styles.pag}>
            <TypographyTitle>FORMAS DE PAGAMENTO</TypographyTitle>
            <img src={formasPag} alt="imagem" style={{ marginTop: 20 }} />
          </div>

          <Card style={styles.cardContainer}>
            <div style={{ marginTop: 40 }}>
              <CardText>Cadastre-se e Receba </CardText>
              <CardText>nossas novidades e promoçõess</CardText>

              <div>
                <CardTextInfo style={{ marginLeft: -20, marginTop: 20 }}>
                  Excepteur sint occaecat cudatat non ent, sunt in
                </CardTextInfo>
                <CardTextInfo>culpa qui officia lorem ipsum </CardTextInfo>
              </div>
              <div style={{ display: 'flex' }}>
                <input
                  type="text"
                  placeholder="SEU E-MAIL"
                  style={styles.input}
                />

                <Button>Ok</Button>
              </div>
            </div>
          </Card>
        </div>

        <Box>
          <div style={{ marginLeft: 100, marginTop: 10 }}>
            <p style={styles.text}>
              Copyright © 2019. Todos os direitos reservados. Todas as marcas e
              suas imagens são de propriedade de seus respectivos donos.
              <p style={{ margin: -0 }}>
                É vedada a reprodução, total ou parcial, de qualquer conteúdo
                sem expressa autorização.
              </p>
            </p>
          </div>

          <img style={styles.img} src={img} alt="imagem" />
        </Box>
      </Container>
    </>
  );
}
