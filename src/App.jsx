import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import Alert from "@mui/material/Alert";
import Hamburger from "hamburger-react";
import * as Popover from "@radix-ui/react-popover";

import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./App.css";

/* Todos os produtos */
const products = [
  {
    id: 19,
    name: "Bolsa Aurora",
    price: 160.00,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "novidades"],
    image: [
      "media/produtos/bolsa.png",
    ],
    description: "👜 Quem aguenta essas duas Maravilhosas juntinhas? 😱💚, Disponível também nas cores vermelho e Preto.",
  },
  {
    id: 15,
    name: "Mini bag Maria(Yellow)",
    price: 59.90,
    quant: 1,
    size: ["Único"],
    categories: ["infantil"],
    image: [
      "media/produtos/1.png",
    ],
    description: "👜 Linda bolsa Maria saindo do ateliê! agora na versão amarela da cor do sol.🌞 ",
  },
  {
    id: 27,
    name: "Mini bag Maria(Pink)",
    price: 59.90,
    quant: 1,
    size: ["Único"],
    categories: ["infantil"],
    image: [
      "media/produtos/2.png",
    ],
    description: "👜 Bolsa Maria, 🌸 feita com muito carinho especialmente para minha pequena! O que acharam?.",
  },
  {
    id: 22,
    name: "Mini cactos ",
    price: 16.00,
    quant: 1,
    size: ["Único"],
    categories: ["lembrancinhas"],
    image: ["media/produtos/cacto.jpg"],
    description: "🌵  Mini cactos naturais para cultivar amor, paz e harmonia na sua casa.",
  },
  // {
  //   id: 13,
  //   name: "Bolsa Isabel",
  //   price: 79.90,
  //   quant: 1,
  //   size: ["Único"],
  //   categories: ["lembrancinhas", "queridinhos"],
  //   image: ["media/produtos/bolsaverde.jpeg"],
  //   description:
  //     "👜 Bolsa de Crochê em Fio de malha de alto requinte disponível na cor verde.",
  // },
  // {
  //   id: 1,
  //   name: "Bolsa infantil redonda",
  //   price: 120.00,
  //   quant: 1,
  //   size: ["Único"],
  //   categories: ["infantil"],
  //   image: ["media/produtos/crianca4.jpg"],
  //   description:
  //     "👜 Bolsa de Crochê em Fio de malha redonda verde.",
  // },
  {
    id: 5,
    name: "Bolsa Vitória",
    price: 149.90,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped"],
    image: ["media/produtos/14.png"],
    description:
      "👜 Bolsa vitória, toda cheia de charme para todas as ocasiões!",
  },
  {
    id: 8,
    name: "Bolsa Vitória Lílas",
    price: 149.90,
    quant: 2,
    size: ["Único"],
    categories: ["bodyCropped"],
    image: ["media/produtos/13.png"],
    description:
      "👜 Bolsa vitória, toda cheia de charme para todas as ocasiões! na versão lilás",
  },
  {
    id: 9,
    name: "Bolsa Lívia",
    price: 180.00,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped"],
    image: ["media/produtos/15.png"],
    description:
      "👜 Bolsa Lívia, confeccionanda com fio de malha Premium! Essa cor verde limão está super em alta, a cara do verão.",
  },
  {
    id: 10,
    name: "Bolsa Aurora Black 🖤",
    price: 160.00,
    quant: 2,
    size: ["Único"],
    categories: ["bodyCropped"],
    image: ["media/produtos/bo.jpg"],
    description: "👜 Bolsa Aurora na cor Black", 
  },
  {
    id: 11,
    name: "Chaveiro coração verde",
    price: " A partir de 50uni R$5.9",
    quant: 1,
    size: ["Único"],
    categories: ["lembrancinhas"],
    image: ["media/produtos/3.png"],
    description:
      "❤️ Chaveirinhos prontos para as boas vindas do bêbê.",
  },
  {
    id: 18,
    name: "Bolsa Sharon azul",
    price: 119.90,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "novidades"],
    image: ["media/produtos/azul.png"],
    description: "👜 Bolsa quadrada de mão, na cor azul, Feita com fio de malha Premium.",
  },
  {
    id: 23,
    name: "Bolsa Vitória Black",
    price: 149.90,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "novidades"],
    image: ["media/produtos/bo2.jpg"],
    description: "👜 Bolsa vitória, toda cheia de charme para todas as ocasiões! na versão Black",
  },
  {
    id: 31,
    name: "Bolsa Pérola Negra",
    price: 220.00,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "novidades"],
    image: ["media/produtos/6.png"],
    description: "👜 Maravilhosa bolsa bag em crochê fio de malha, cor preta com detalhes em dourado.",
  },
  {
    id: 20,
    name: "Cestinhos de crochê",
    price: "kit com 4 - R$99.90",
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "novidades"],
    image: [
      "media/produtos/11.png",
    ],
    description: "🧶 Uma caixinha cheia de amor chegando para a pessoa mais importante do mundo! ❣️",
  },
  {
    id: 16,
    name: "Mini Bag Ana",
    price: 89.90,
    quant: 1,
    size: ["Único"],
    categories: ["vestido", "novidades"],
    image: [
      "media/produtos/bo1.jpg",
    ],
    description: "👜 Vem conferir mais um lançamento dessa coleção que tá cada dia mais linda!",
  },
  {
    id: 21,
    name: "Chaveiro coração vermelho",
    price: "A partir de 50uni R$5.9",
    quant: 1,
    size: ["Único"],
    categories: ["lembrancinhas"],
    image: ["media/produtos/4.png"],
    description:
      "❤️ Chaveirinhos coração personalizados ❣️",
  },
  // {
  //   id: 2,
  //   name: "Bolsa Cecília",
  //   price: 130.00,
  //   quant: 1,
  //   size: ["Único"],
  //   categories: ["bodyCropped", "queridinhos"],
  //   image: ["media/produtos/cecilia.jpg"],
  //   description:
  //     "👜 Bolsa Cecíla, super charmosa, feita com fio de malha Premium na cor azul.",
  // },
  {
    id: 3,
    name: "Bolsa de mão",
    price: 149.90,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "queridinhos"],
    image: ["media/produtos/bo3.jpg"],
    description:
      "👜 Bolsa de mão, super charmosa, feita com fio de malha Premium na cor preta.",
  },
  {
    id: 4,
    name: "Bolsa tranversal Rosa",
    price: 120.00,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "queridinhos"],
    image: ["media/produtos/bo4.jpg"],
    description:
      "👜 Bolsa tranversal Rosa pink, feita com fio de malha premium com detalhes em prata.",
  },
  {
    id: 6,
    name: "Bolsa Paz",
    price: 120.00,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped"],
    image: ["media/produtos/bo5.jpg"],
    description:
      "👜 Linda bolsa em crochê com fio de malha, na cor branca com detalhes dourados.",
  },
  {
    id: 7,
    name: "Bolsa Isadora",
    price: 179.90,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "queridinhos"],
    image: ["media/produtos/bo6.jpg"],
    description: "👜 Bolsa Isadora, toda cheia de charme, feita com fio de malha premium 100% artesanal, nas cores azul e rosa, fechamento em zíper.",
  },
  {
    id: 29,
    name: "Bolsa Isadora com necessaire",
    price: 199.00,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "queridinhos"],
    image: ["media/produtos/bag.jpg"],
    description: "👜 Bolsa Isadora com necessaire, toda cheia de charme, feita com fio de malha premium 100% artesanal, nas cores azul e rosa, fechamento em zíper.",
  },
  // {
  //   id: 12,
  //   name: "Bolsa Anitta",
  //   price: 120.00,
  //   quant: 1,
  //   size: ["Único"],
  //   categories: ["vestido"],
  //   image: ["media/produtos/bolsapreta.webp"],
  //   description:
  //     "👜 Bolsa Anitta, toda cheia de charme, feita com fio de malha premium 100% artesanal",
  // },
  {
    id: 13,
    name: " Bag Aurora",
    price: 160.00,
    quant: 1,
    size: ["Único"],
    categories: ["lembrancinhas", "queridinhos"],
    image: ["media/produtos/bo8.jpg"],
    description:
      "👜 Essa é a maravilhosa Bag Aurora,Na cor vibrante do Rosa shok, para aquelas que querem chegar chegando no rolê",
  },
  {
    id: 14,
    name: "Bag Lívia",
    price: 160.00,
    quant: 1,
    size: ["Único"],
    categories: ["lembrancinhas"],
    image: ["media/produtos/livia.jpg"],
    description:
      "👜 A Bag Lívia chegou, cheia de charme e requinte. Aquele glamour que faltava no seu look!",
  },

  {
    id: 24,
    name: "Lembrancinha chá bêbê",
    price: "A partir de 50uni R$12.90",
    quant: 1,
    size: ["Único"],
    categories: ["lembrancinhas"],
    image: ["media/produtos/bo7.jpg"],
    description: "❤️ O toque de delicadeza que faltava! Chaveirinhos coração personalizados.",
  },
];

/* Body / Cropped */
const bodyCropped = products.filter((product) =>
  product.categories.includes("infantil")
);

/* Calça / Saia */
const lembrancinhas = products.filter((product) =>
  product.categories.includes("lembrancinhas")
);



function App() {
  const [cartShop, setCartShop] = useState([]);
  const countCart = cartShop.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [error, setError] = useState(false);
  const [prod, setProd] = useState();
  const [prods, setProds] = useState(products);
  const [isOpenHamb, setOpenHamb] = useState(false);
  const [name, setName] = useState("");

  /* Adiciona item no carrinho de compras */
  function addItem(item, numSize) {
    let carrinhoLocalStorage = [];
    if(localStorage.getItem('carrinho')) { 
      carrinhoLocalStorage = JSON.parse(localStorage.getItem('carrinho'));
    };
    carrinhoLocalStorage.push(item);
    console.log(carrinhoLocalStorage);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoLocalStorage));
    
    if (numSize == "") {
      const nArray = [...cartShop];
      const nIndex = nArray.findIndex(
        (product) => product.id == item.id && product.size == numSize
      );
      if (nIndex >= 0) {
        nArray[nIndex].price += nArray[nIndex].price / nArray[nIndex].count;
        nArray[nIndex].count += 1;
        setCartShop(nArray);
      } else {
        setCartShop([
          ...nArray,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            size: numSize,
            image: item.image,
            count: 1,
          },
        ]);
      }
    }
  }

  /* Remove item no carrinho de compras */
  function removeItem(item, numSize) {
    const nArray = [...cartShop];
    const nIndex = nArray.findIndex(
      (product) => product.id == item.id && product.size == numSize
    );
    if (nIndex >= 0) {
      nArray[nIndex].price -= nArray[nIndex].price / nArray[nIndex].count;
      nArray[nIndex].count -= 1;
    }
    if (item.count === 0) {
      nArray.splice(nIndex, 1);
    }
    setCartShop(nArray);
  }

  /* Alerta de adição de itens no carrinho */
  const showAlert = (numSize) => {
    if (numSize == "") {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const handleClickOpen = (item) => {
    setOpen1(true);
    setProd(item);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  /* SEARCH */

  // function searchFilter(valueSearch) {
  //   setProds(
  //     products.filter((prod) => prod.name.toLowerCase().includes(valueSearch))
  //   );
  //   setName(valueSearch);
  // }
  

  return (
    <div className="App">
      <NavBar
        cartShop={cartShop}
        quantidade={countCart}
        removeItem={removeItem}
        addItem={addItem}
      />
      <BrowserRouter>
        <div className="filter">
          <Link className="filterLink" to="/">
            Todos os produtos
          </Link>
          <Link className="filterLink" to="/infantil">
            Artigos infantis
          </Link>
          <Link className="filterLink" to="/lembrancinhas">
            Lembrancinhas
          </Link>
        </div>

        <Popover.Root>
          <Popover.Trigger className="hamburguer">
            <Hamburger toggled={isOpenHamb} toggle={setOpenHamb} color="#fff" />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent">
              <Popover.Close className="filterClose" aria-label="Close">
                <h3 className="filterTitle">Categorias</h3>
                <div className="filter1">
                  <Link to="/" className="filterEsc">
                    ● Todos os produtos
                  </Link>
                  <Link to="/infantil" className="filterEsc">
                    ● Artigos infantis
                  </Link>
                  <Link to="/lembrancinhas" className="filterEsc">
                    ● Lembrancinhas
                  </Link>
                </div>
              </Popover.Close>

              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {prods.length === products.length && <Slide />}
                {name === "" ? (
                  <Product
                    products={prods}
                    addItem={addItem}
                    showAlert={showAlert}
                    handleClickOpen={handleClickOpen}
                    title="Todos os Produtos"
                  />
                ) : (
                  <Product
                    products={prods}
                    addItem={addItem}
                    showAlert={showAlert}
                    handleClickOpen={handleClickOpen}
                    title={"Resultado de busca para '" + name + "'"}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/infantil"
            element={
              <Product
                products={bodyCropped}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Infantil"
              />
            }
          ></Route>
          <Route
            path="/lembrancinhas"
            element={
              <Product
                products={lembrancinhas}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Lembrancinhas"
              />
            }
          ></Route>
        </Routes>

        {open && (
          <Alert className="alertAdd" variant="filled" severity="success">
            Produto adicionado no carrinho
          </Alert>
        )}

        <Footer />

        {open1 && (
          <Modal
            item={prod}
            open={open1}
            handleClose={handleClose}
            addItem={addItem}
            showAlert={showAlert}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;



// Função para adicionar um item ao carrinho 
// function adicionarItemAoCarrinho(item)
//  { let cartItems = JSON.parse(localStorage .getItem('cartItems')) || [];
//   cartItems.push(item); localStorage.setItem('cartItems', JSON.stringify(cartItems));
//    exibirItensNoCarrinho(); }

   // Função para limpar o carrinho 
  //  function limparCarrinho() { localStorage. removeItem('cartItems');
  //   exibirItensNoCarrinho(); }

    // Função para exibir os itens do carrinho na página
    //  function displayItensNoCarrinho() { let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    //   let cartList = document.getElementById('cart-list'); cartList.innerHTML = '';
    //    cartItems.forEach(item => { let listItem = document.createElement('li');
    //     listItem.textContent = item; cartList.appendChild(listItem); });
    //    }

       // Ao carregar a página, exibe os itens do carrinho salvos no localStorage
        // displayItensNoCarrinho();