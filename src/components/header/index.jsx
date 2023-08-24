import {
  Container,
  TypographyGray,
  TypographyRosa,
  BoxTypography,
  Text,
  Div,
} from './styles';
import img from '../../utils/img/Group35.svg';
import imgShieldCheck from '../../utils/img/ShieldCheck.svg';
import Truck from '../../utils/img/Truck.svg';
import MagnifyingGlass from '../../utils/img/MagnifyingGlass.svg';
import CreditCard from '../../utils/img/CreditCard.svg';
import Group from '../../utils/img/Group.svg';
import Heart from '../../utils/img/Heart.svg';
import UserCircle from '../../utils/img/UserCircle.svg';
import ShoppingCart from '../../utils/img/ShoppingCart.svg';

export default function Header() {
  return (
    <>
      <Div>
        <BoxTypography>
          <Text>
            <TypographyGray>
              <img
                src={imgShieldCheck}
                alt=""
                srcset=""
                style={{
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  marginRight: 5,
                  marginTop: -1,
                }}
              />
              Comprar
              <TypographyRosa>100% segura</TypographyRosa>
            </TypographyGray>
          </Text>

          <Text>
            <TypographyGray>
              <img
                src={Truck}
                alt=""
                srcset=""
                style={{
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  marginRight: 5,
                  marginTop: -1,
                }}
              />
              Frete grátis
              <TypographyRosa>acima de R$ 200</TypographyRosa>
            </TypographyGray>
          </Text>

          <Text>
            <TypographyGray>
              <img
                src={CreditCard}
                alt=""
                srcset=""
                style={{
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  marginRight: 5,
                  marginTop: -1,
                }}
              />
              Parcele
              <TypographyRosa>suas compras</TypographyRosa>
            </TypographyGray>
          </Text>
        </BoxTypography>

        <hr
          style={{
            border: 0,
            height: 1,
            background: '#F0F0F0',
            margin: 0,
          }}
        />
      </Div>

      <Container>
        <img src={img} alt="imagem" style={{ padding: 10 }} />

        <input
          style={{
            width: 657,
            height: 48,
            margin: 10,
            borderRadius: 10,
            background: '#F6F5F2',

            color: '--gray-1,#9F9F9F',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
          type="text"
          placeholder="O que você está buscando?"
          name="search"
        ></input>

        <img
          src={MagnifyingGlass}
          style={{ transform: 'translateX(-200%)' }}
          alt="imagem"
        />

        <img
          src={Group}
          style={{ width: 24, height: 24, marginTop: 25, marginRight: 10 }}
          alt="imagem"
        />
        <img
          src={Heart}
          style={{ width: 24, height: 24, marginTop: 25, marginRight: 10 }}
          alt="imagem"
        />
        <img
          src={UserCircle}
          style={{ width: 24, height: 24, marginTop: 25, marginRight: 10 }}
          alt="imagem"
        />
        <img
          src={ShoppingCart}
          style={{ width: 24, height: 24, marginTop: 25, marginRight: 10 }}
          alt="imagem"
        />

        <hr
          style={{
            border: 0,
            height: 1,
            background: '#F0F0F0',
            margin: 0,
          }}
        />
      </Container>
    </>
  );
}
