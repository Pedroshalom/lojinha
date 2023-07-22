import "./Footer.css";

import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

// import logo from "/media/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* <img className="footer-logo" src={logo} alt="Logo Vivace" /> */}
      <hr className="footer-hr" />
      <div className="footer-info">
        <div className="footer-1">
          <h2>Sobre</h2>
          <p className="para">
            A Arte Crochê Natal é uma loja de artigos em crochê que acredita em valorizar a
            beleza e o estilo das mulheres. Oferecemos uma variedade de estilos
            para que todas as mulheres possam encontrar peças para expressar
            seu estilo. Nossos produtos são de
            qualidade, feitos para durar e criar looks incríveis. Seja moderna,
            casual ou elegante, a Arte Crochê Natal tem a peça certa para você.
          </p>
        </div>
        <div className="footer-2">
          <h2>Contato</h2>
          <div>
            <a href="https://www.instagram.com/artecrochenatal/" target={"_blank"}>
              <BsInstagram size={30} />
            </a>
            <a href="https://wa.me/5584999096035" target={"_blank"}>
              <BsWhatsapp size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100057258977676" target={"_blank"}>
              <BsFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
