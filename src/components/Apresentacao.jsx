import Texto from "./Texto";
import CatAPI from "./CatAPI";

function Apresentacao() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          flex: 3,
          marginLeft: "10px",
          minWidth: "350px",
          maxWidth: "100%",
        }}
      >
        <h2>Bem-vindo ao CafeMiau!</h2>
        <Texto>
          O CafeMiau traz para Ponta Grossa o conceito japonês de Cat Café,
          unindo o prazer de um bom café à companhia de nossos gatinhos.
        </Texto>
        <Texto>
          Aqui, criamos um refúgio para quem busca um ambiente tranquilo, seja
          para relaxar ou para trabalhar cercado de carinho.
        </Texto>
        <Texto>
          Nosso cardápio conta com cafés especiais, tortas artesanais e opções
          veganas, tudo preparado com cuidado para acompanhar seu momento de
          descanso. Além da cafeteria, oferecemos visitas guiadas ao nosso gatil
          mediante agendamento, garantindo o bem-estar dos nossos felinos e uma
          experiência única para você.
        </Texto>
        <Texto $destaque> Obs: Não esqueça de visitar o gatil!</Texto>
      </div>
      <div
        style={{
          flex: 2,
          marginLeft: "10px",
          justifyContent: "center",
          minWidth: "300px",
        }}
      >
        <CatAPI />
      </div>
    </div>
  );
}
export default Apresentacao;
