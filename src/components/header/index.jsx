import {
  Container,
  TypographyGray,
  TypographyRosa,
  BoxTypography,
  Text,
  Div,
  BoxCategory,
} from './styles';
import styles from './styles';
import Category from '../Category';
import img from '../../utils/img/Group35.svg';
import Truck from '../../utils/img/Truck.svg';
import Group from '../../utils/img/Group.svg';
import Heart from '../../utils/img/Heart.svg';
import CreditCard from '../../utils/img/CreditCard.svg';
import UserCircle from '../../utils/img/UserCircle.svg';
import ShoppingCart from '../../utils/img/ShoppingCart.svg';
import imgShieldCheck from '../../utils/img/ShieldCheck.svg';
import MagnifyingGlass from '../../utils/img/MagnifyingGlass.svg';

export default function Header() {
  return (
    <>
      <Div>
        <BoxTypography>
          <Text>
            <TypographyGray>
              <img src={imgShieldCheck} alt="" srcset="" style={styles.img} />
              Comprar
            </TypographyGray>
            <TypographyRosa>100% segura</TypographyRosa>
          </Text>

          <Text>
            <TypographyGray>
              <img src={Truck} alt="" srcset="" style={styles.img} />
              Frete grátis
            </TypographyGray>
            <TypographyRosa>acima de R$ 200</TypographyRosa>
          </Text>

          <Text>
            <TypographyGray>
              <img src={CreditCard} alt="" srcset="" style={styles.img} />
              Parcele
            </TypographyGray>
            <TypographyRosa> suas compras</TypographyRosa>
          </Text>
        </BoxTypography>

        <hr style={styles.hr} />
      </Div>

      <Container>
        <img src={img} alt="imagem" style={{ padding: 10, marginLeft: 100 }} />

        <input
          style={styles.input}
          type="text"
          placeholder="O que você está buscando?"
          name="search"
        ></input>

        <img
          src={MagnifyingGlass}
          style={{ transform: 'translateX(-200%)' }}
          alt="imagem"
        />

        <img src={Group} style={styles.imgCard} alt="imagem" />
        <img src={Heart} style={styles.imgCard} alt="imagem" />
        <img src={UserCircle} style={styles.imgCard} alt="imagem" />
        <img src={ShoppingCart} style={styles.imgCard} alt="imagem" />

        <hr style={styles.hr} />
      </Container>
      <BoxCategory>
        <Category />
      </BoxCategory>
    </>
  );
}
