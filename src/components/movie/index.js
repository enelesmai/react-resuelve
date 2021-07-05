import { MovieWrapper } from "./movieStyles";
import { Poster } from "./movieStyles";
import { Title } from "./movieStyles";

function Movie() {
  return (
    <MovieWrapper>
      <Poster></Poster>
      <Title>
        <h3>Viaje de Chihiro</h3>
      </Title>
    </MovieWrapper>
  );
}

export default Movie;