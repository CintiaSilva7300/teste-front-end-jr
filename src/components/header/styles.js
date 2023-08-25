import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 20px;
`;
export const BoxCategory = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BoxTypography = styled.div`
  width: 1280px;
  height: 32px;
  flex-shrink: 0;
  background-color: white;

  justify-content: center;
  align-items: center;

  display: flex;
  justify-content: space-around;
`;

export const TypographyGray = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-right: 5px;
  color: var(--gray-1, #9f9f9f);
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TypographyRosa = styled.div`
  color: var(--rosa-primario, #f71963);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Text = styled.div`
  display: flex;
`;

const styles = {
  img: { width: 20, height: 20, flexShrink: 0, marginRight: 5, marginTop: -1 },
  hr: { border: 0, height: 1, background: '#F0F0F0', margin: 0 },
  input: {
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
  },
  imgCard: {
    width: 24,
    height: 24,
    marginTop: 25,
    marginRight: 30,
  },
};
export default styles;
