import { MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLaptopHouse } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./Slide.css";

function CustomArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        margin: "0 2rem",
        display: "block",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 100,
    adaptiveHeight: true,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  const imgSlides = [
    { name: "novidades", img: "/media/slide/j.avif" },
    { name: "queridinhos", img: "/media/slide/banner.webp" },
  ];

  const infos = [
    {
      title: "Pagamentos",
      sub: "Pix, Débito e Crédito (débito e crédito com acréscimo).",
      icon: <MdOutlinePayments size={50} className="icon" />,
    },
    {
      title: "Entregamos em todo o Brasil",
      sub: "Encaminhamos a sua encomenda até você.",
      icon: <TbTruckDelivery size={50} className="icon" />,
    },
    {
      title: "Frete",
      sub: "O valor varia conforme a região.",
      icon: <FaLaptopHouse size={50} className="icon" />,
    },
  ];

  return (
    <div className="slide">
      <Slider {...settings} className="slider">
        {imgSlides.map((item) => {
          const { name, img } = item;
          return (
            <div className="div-slide" key={name}>
              <Link to={name}>
                <img src={img} alt={name} />
              </Link>
            </div>
          );
        })}
      </Slider>

      <section className="info">
        {infos.map((info) => {
          const { title, sub, icon } = info;
          return (
            <div className="infoDiv" key={title}>
              <div className="iconInfo">{icon}</div>
              <div>
                <h3>{title}</h3>
                <span className="infoSub">{sub}</span>
              </div>
            </div>
          );
        })}
      </section>
      <h1 className="t" >𝐒𝐞𝐣𝐚𝐦 𝐛𝐞𝐦 𝐯𝐢𝐧𝐝𝐨𝐬 !</h1>
    </div>
  );
};

export default Slide;
