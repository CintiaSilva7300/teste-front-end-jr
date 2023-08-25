import { Box, TypograpyT, TypograpyS, Button } from './styles';
import './Banner.css';
import BannerImg from '../../utils/img/Rectangle 250.png';

export default function Banner() {
  return (
    <>
      <Box>
        <div className="banner">
          <div className="text">
            <TypograpyT>Venha conhecer nossas</TypograpyT>
            <TypograpyT> promoções </TypograpyT>
            <TypograpyS>50% Off nos produtos</TypograpyS>
            <Button>Ver produto</Button>
          </div>
        </div>
      </Box>
    </>
  );
}
