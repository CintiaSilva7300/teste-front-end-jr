import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 1280px;
  height: 40px;
  flex-shrink: 0;
  background: var(--white, #fff);
  box-shadow: 0px 8px 16px 0px rgba(57, 48, 19, 0.12);
  justify-content: space-around;
`;

export const Text = styled.div`
  font-family: Poppins;
  color: var(--gray-1, #9f9f9f);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const TextOf = styled.div`
  color: var(--rosa-primario, #f71963);
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;
