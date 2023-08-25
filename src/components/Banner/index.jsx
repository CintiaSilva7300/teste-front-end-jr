import { Box, TypograpyT, TypograpyS, Button } from './styles';
import styles from './styles';

export default function Banner() {
  return (
    <>
      <Box>
        <div style={styles.banner}>
          <div style={styles.text}>
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
