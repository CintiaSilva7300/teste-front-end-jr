import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 395px;
  flex-shrink: 0;
`;

export const TypograpyT = styled.div`
  color: #fff;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const TypograpyS = styled.div`
  color: #fff;
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Button = styled.div`
  margin-top: 25px;
  width: 227px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--rosa-primario, #f71963);
  cursor: pointer;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const styles = {
  banner: {
    position: 'relative',
    width: '100%',
    height: 395,
    color: 'white',
    opacity: 0.8,

    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85.04%),
                url('https://s3-alpha-sig.figma.com/img/fa42/e04d/df2675a3ccee6ffcca13d0b0a21dd2f3?Expires=1693785600&Signature=LcxxfKPhGzcBrE7jcELJaCCcskKoZhnCw43hlXsLzjGsikZZgOCeWh8W3olKoNc9XMJCRCRGokcxSX90zsVhLvf6oABqTlh6Nj4q7IbsGww0shsBsUshUNzqFE9egWFj7B-0EYmTwtm3GbfODTDLtNg1vG6Qu3yqdCSjEt6DyUXqXg6KJI9qASk3uk-flvrSKRX~Eayokp~nFgZ7OF5MPvB8q5A3oZ6kspSNXLFGrNdfZurXEjbNjThd-bCto-5lTXUTDp~2vNTSrZFfYa~hIKQL5juTPyolkktA6tE~gd9l22INp9wQqV~1NIkC0gC~gaNvHwAHAxCgK3BpuFULxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  text: {
    marginTop: 20,
    position: 'absolute',
    marginLeft: 300,
    marginTop: 52,
  },
};
export default styles;
