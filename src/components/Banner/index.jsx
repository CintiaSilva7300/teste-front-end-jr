import { Box, Imagem } from './styles';
import BannerImg from '../../utils/img/Rectangle 250.png';

export default function Banner() {
  return (
    <>
      <Box>
        <img src={BannerImg} alt="" srcset="" width={'100%'} height={395} />
      </Box>
    </>
  );
}
