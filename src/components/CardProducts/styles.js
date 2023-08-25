import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;

  width: 1280px;
  height: 40px;
  flex-shrink: 0;
  justify-content: space-around;
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Typography = styled.div`
  color: var(--rosa-primario, #f71963);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TypographyDesc = styled.div`
  color: var(--preto, #3f3f40);
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const TypographyDesconto = styled.div`
  margin-top: 10px;
  width: 245px;
  color: #808080;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: line-through;
`;

export const TypographyPrice = styled.div`
  margin-top: 10px;
  color: var(--preto, #3f3f40);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const TypographyP = styled.div`
  margin-top: 10px;
  margin-left: -10px;
  width: 100%;
  color: var(--preto, #3f3f40);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const TypographyInfo = styled.div`
  width: 100%;
  margin-left: -10px;
  margin-top: 10px;
  color: var(--rosa-primario, #f71963);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Button = styled.div`
  width: 245px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--rosa-primario, #f71963);

  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
export const Table = styled.div`
  display: flex;
  height: 40px;
  padding: 12px 58px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  background: #fff;
`;
export const TableP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex: 1;
  border: 1px solid #bdbdbd;
  background: #fff;
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;
export const Card = styled.div`
  width: 270px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
export const Img = styled.div`
  width: 247px;
  height: 228px;
  flex-shrink: 0;
`;
export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 20%;
  top: 30%;
  width: 769px;
  height: 299.257px;
  background: #fff;
`;

export const modalContent = styled.div`
  background-color: #fff;
  width: 769px;
  height: 299.257px;
  padding: 20px;
  border: 1px solid #888;
  position: relative;
`;

export const Close = styled.div`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`;

export const Titulo = styled.div`
  margin-top: 35px;
  color: var(--primria, #041e50);
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20px */
  letter-spacing: 1px;
`;

export const TextPrice = styled.div`
  margin-top: 20px;
  color: var(--primria, #041e50);
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 20px */
  letter-spacing: 1px;
`;

export const TextDesc = styled.div`
  margin-top: 20px;
  color: #222;
  font-family: Lato;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.5%; /* 15.05px */
  letter-spacing: 0.5px;
`;

export const TextInfo = styled.div`
  margin-top: 10px;
  color: #041e50;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
  letter-spacing: 0.6px;
`;

export const ButtonModal = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: var(--rosa-primario, #f71963);
  width: 245px;
  height: 44px;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const Box = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #041e50;
  background: #fff;
`;

const styles = {
  hrStyle: {
    width: 360,
    border: 0,
    height: 1,
    background: '#dedede',
    marginTop: 30,
  },
  img: {
    marginTop: 50,
    marginLeft: 80,
    width: 247,
    height: 190,
  },
};
export default styles;
