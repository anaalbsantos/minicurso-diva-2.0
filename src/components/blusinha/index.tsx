import "./style.css";

interface BlusinhaProps {
  title: string;
  price: string;
  image: string;
}

const Blusinha = (props: BlusinhaProps) => {
  return (
    <div className="blusinha-box">
      <img src={props.image} alt="kit-4-blusinhas" className="image" />
      <div className="blusinha-info">
        <h1>{props.title}</h1>
        <p>R$ {props.price}</p>
      </div>
    </div>
  );
};

export default Blusinha;
