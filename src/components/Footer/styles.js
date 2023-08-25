import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 370px;
  background-color: #333;
  color: #fff;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;
export const Box = styled.div`
  display: flex;
  margin-top: 0px;
  width: '100%';
  height: 70px;
  width: 100%;
  border: 1px solid #7a7a7a;
  text-align: start;
`;
export const TypographyTitle = styled.div`
  color: #fff;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const TypographyInfo = styled.div`
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  text-transform: uppercase;
`;

export const Card = styled.div`
  border-radius: 10px;
  background: #fff;
  width: 380px;
  height: 260px;
  margin-left: 40px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: var(--rosa-primario, #f71963);
  width: 62px;
  height: 45px;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  border: none;
  cursor: pointer;
  /* margin-top: 5px; */
  margin: 12px;
`;

export const CardText = styled.div`
  color: var(--preto, #3f3f40);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  text-transform: uppercase;
  margin-left: 40px;
`;
export const CardTextInfo = styled.div`
  color: var(--preto, #3f3f40);
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px; /* 158.333% */
`;
export const Input = styled.div``;

const styles = {
  container: {
    display: 'block',
    flexWrap: 'wrap',
    justifyContent: 'scenter',
    flexDirection: 'colum',
    marginLeft: 100,
    marginTop: 30,
  },
  info: {
    display: 'block',
    flexWrap: 'wrap',
    justifyContent: 'scenter',
    flexDirection: 'colum',
    marginLeft: 100,
    marginTop: 30,
  },
  pag: {
    display: 'block',
    flexWrap: 'wrap',
    justifyContent: 'scenter',
    flexDirection: 'colum',
    marginLeft: 100,
    marginTop: 30,
  },
  cardContainer: {
    marginBottom: 20,
    marginTop: 20,
    color: '#000',
  },
  input: {
    marginTop: 10,
    marginLeft: 40,
    borderRadius: 4,
    border: ' 1px solid #2a2a2a',
    background: '#fff',
    width: 230,
    height: 45,
  },
  text: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'starts',
    textTransform: 'uppercase',
  },
  img: {
    marginLeft: 250,
    width: 226.084,
    height: 32,
    marginTop: 20,
  },
};
export default styles;
