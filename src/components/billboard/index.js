import Movie from './../movie/index';
import { BillboardWrapper } from './billboardStyles';

function Billboard() {
  return (
    <BillboardWrapper>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
    </BillboardWrapper>
  );
}

export default Billboard;