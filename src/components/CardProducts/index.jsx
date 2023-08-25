import {
  Container,
  Typography,
  Table,
  TableP,
  Card,
  ContainerCard,
  TypographyDesc,
  TypographyDesconto,
  TypographyPrice,
  TypographyP,
  TypographyInfo,
  Button,
  Modal,
  Close,
  Titulo,
  TextPrice,
  TextDesc,
  TextInfo,
  ButtonModal,
  Box,
} from './styles';
import axios from 'axios';
import styles from './styles';
import celular from '../../utils/img/celular.png';
import React, { useState, useEffect } from 'react';
import vectorRigth from '../../utils/img/vectorRigth.svg';
import lefthVector from '../../utils/img/lefthVector.svg';
import { API_TESTE_FRONT } from '../../utils/environments';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CardProducts() {
  const [products, setProducts] = useState([]);
  const [visibleCards, setVisibleCards] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    axios.get(`${API_TESTE_FRONT}`).then((res) => {
      setProducts(res.data.products);
      console.log('resposta ->-> ', res.data.products);
    });
  }, [0]);

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + visibleCards);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - visibleCards, 0));
  };

  const visibleCardList = products.slice(startIndex, startIndex + visibleCards);

  return (
    <>
      <Container>
        <hr style={styles.hrStyle} />
        <Typography>Produtos relacionados</Typography>

        <hr style={styles.hrStyle} />
      </Container>

      <Container>
        <Table style={{ display: 'flex' }}>
          <TableP>CELULAR</TableP>
          <TableP>ACESSÒRIOS</TableP>
          <TableP>TABLETS</TableP>
          <TableP>NOTEBOOKS</TableP>
          <TableP>TVs</TableP>
          <TableP>VER TODOS</TableP>
        </Table>
      </Container>

      <ContainerCard>
        {/* Carrosel */}

        <img
          style={{ cursor: 'pointer', margin: 10 }}
          onClick={handlePrevious}
          disabled={startIndex === 0}
          src={lefthVector}
          alt="imagem"
        />

        <div style={styles.container}>
          {visibleCardList.map((p) => (
            <div key={p.id}>
              <Card style={{ marginRight: 20 }}>
                <img src={p.photo} alt="" srcset="" />
                <div style={{ marginTop: 20 }}>
                  <TypographyDesc>{p.productName}</TypographyDesc>
                  <TypographyDesc>{p.descriptionShort}</TypographyDesc>
                  <div style={{ width: '100%' }}>
                    <TypographyDesconto>R$ 30,90</TypographyDesconto>
                  </div>
                  <TypographyPrice>R$ {p.price}</TypographyPrice>
                </div>
                <TypographyP>ou 2x de R$ 49,95 sem juros</TypographyP>
                <TypographyInfo>Frete grátis</TypographyInfo>
                <Button onClick={openModal}>COMPRAR</Button>
              </Card>
            </div>
          ))}

          {modalOpen && (
            <Modal>
              <modalContent>
                <Close onClick={closeModal}>&times;</Close>
                <div style={{ display: 'flex' }}>
                  <img style={styles.img} src={celular} alt="" />

                  <div style={{ display: 'block' }}>
                    <Titulo>LOREM IPSUM DOLOR SIT AMET</Titulo>
                    <TextPrice>R$ 1.499,90</TextPrice>
                    <TextDesc style={{ width: 290 }}>
                      Many desktop publishing packages and web page editors now
                      many desktop publishing
                    </TextDesc>
                    <TextInfo>Veja mais detalhes do produto ></TextInfo>

                    <Box>- 1 +</Box>
                    <ButtonModal>COMPRAR</ButtonModal>
                  </div>
                </div>
              </modalContent>
            </Modal>
          )}
        </div>

        <img
          style={{ cursor: 'pointer', margin: 10 }}
          onClick={handleNext}
          disabled={startIndex + visibleCards >= products.length}
          src={vectorRigth}
          alt=""
          srcset=""
        />
      </ContainerCard>
    </>
  );
}
