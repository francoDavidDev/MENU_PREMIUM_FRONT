import espresso from "../assets/img/coffees/espresso.jpg";
import americano from "../assets/img/coffees/americano.jpg";
import cappuccino from "../assets/img/coffees/cappuccino.jpg";
import latte from "../assets/img/coffees/latte.jpg";
import machiatto from "../assets/img/coffees/machiato.jpg";
import mocha from "../assets/img/coffees/mocha.jpg";

import tartaChocolate from "../assets/img/sugar/tarta-chocolate.jpg";
import brownie from "../assets/img/sugar/brownie.jpg";
import cheesecake from "../assets/img/sugar/cheesecake-de-fresa.jpg";
import donuts from "../assets/img/sugar/donuts.jpg";
import tiramisu from "../assets/img/sugar/tiramisu.jpg";
import croissantChocolate from "../assets/img/sugar/croissant-de-chocolate.jpg";

import avocadoToast from "../assets/img/salty/avocado-toast.jpg";
import croissantJamonQueso from "../assets/img/salty/croissant-jamon&queso.jpg";
import panini from "../assets/img/salty/panini.jpg";
import tostadoJamonQueso from "../assets/img/salty/tostado-jamon&queso.jpg";

export const PRODUCTS = [
  {
    title: "Espresso",
    description: "Concentrado y fuerte.",
    delay: 0.3,
    image: espresso,
    price: "$950",
    tag: "coffees",
    description2:
      "30 ml de Espresso elaborado con granos de café de alta calidad, tostado perfecto para resaltar sus sabores robustos.",
    sizes: {
      small: "$800",
      medium: "$950",
      large: "$1100",
    },
    popular: true,
  },
  {
    title: "Café Americano",
    description: "Espresso diluido con agua.",
    delay: 0.4,
    image: americano,
    price: "$700",
    tag: "coffees",
    description2:
      "Americano suave compuesto por un solo Espresso (30 ml) combinado con agua purificada para obtener una mezcla equilibrada.",
    sizes: null,
    popular: true,
  },
  {
    title: "Café Latte",
    description: "Espresso con leche vaporizada y espuma.",
    delay: 0.6,
    image: cappuccino,
    price: "$850",
    tag: "coffees",
    description2:
      "Café Latte cremoso con Espresso (30 ml), leche vaporizada y capa suave de espuma.",
    sizes: {
      small: "$680",
      medium: "$850",
      large: "$1000",
    },
    popular: false,
  },
  {
    title: "Cappuccino",
    description: "Espresso con espuma de leche.",
    delay: 0.6,
    image: latte,
    price: "$700",
    tag: "coffees",
    description2:
      "Cappuccino delicioso con Espresso (30 ml) y generosa espuma de leche para una textura suave y un sabor inconfundible.",
    sizes: {
      small: "$600",
      medium: "$700",
      large: "$800",
    },
    popular: true,
  },
  {
    title: "Mocha",
    description: "Espresso con leche, chocolate y crema.",
    delay: 0.6,
    image: mocha,
    price: "$950",
    tag: "coffees",
    description2:
      "Mocha indulgente con Espresso (30 ml), leche fresca,  chocolate de alta calidad y crema para una experiencia decadente y deliciosa.",
    sizes: {
      small: "$800",
      medium: "$950",
      large: "$1100",
    },
    popular: false,
  },
  {
    title: "Macchiato",
    description: "Espresso con toque de leche o espuma.",
    delay: 0.6,
    image: machiatto,
    price: "$1200",
    tag: "coffees",
    description2:
      "Macchiato auténtico con Espresso (30 ml) realzado con un sutil toque de leche o espuma para un equilibrio perfecto de sabores.",
    sizes: {
      small: "$1000",
      medium: "$1200",
      large: "$1400",
    },
    popular: false,
  },
  // ... (otros elementos del menú)
  {
    title: "Tostado de J&Q",
    description: "Tostado con jamón y queso derretido.",
    delay: 0.3,
    image: tostadoJamonQueso,
    price: "$950",
    tag: "salty",
    description2:
      "Tostado de Jamón y Queso con pan crujiente, jamón premium y queso derretido. Combinación salada y satisfactoria para tu paladar.",
    popular: true,
  },
  {
    title: "Croissant con J&Q",
    description: "Croissant con jamón y queso derretido.",
    delay: 0.4,
    image: croissantJamonQueso,
    price: "$700",
    tag: "salty",
    description2:
      "Croissant relleno de jamón jugoso y queso derretido. Clásico y reconfortante, perfecta fusión de sabores y texturas.",
    popular: true,
  },
  {
    title: "Avocado Toast",
    description: "Tostada con aguacate y tomate cherry.",
    delay: 0.6,
    image: avocadoToast,
    price: "$850",
    tag: "salty",
    description2:
      "Tostada con aguacate fresco y tomate cherry. Explosión de sabores frescos y texturas irresistibles.",
    popular: true,
  },
  {
    title: "Panini",
    description: "Panini tostado con ingredientes frescos.",
    delay: 0.6,
    image: panini,
    price: "$700",
    tag: "salty",
    description2:
      "Panini tostado con mezcla irresistible de ingredientes frescos. Opción sabrosa y reconfortante para satisfacer tus antojos en cualquier momento.",
    popular: false,
  },

  //sweets DULCES
  {
    title: "Tarta de Chocolate",
    description: "Tarta de chocolate.",
    delay: 0.3,
    image: tartaChocolate,
    price: "$950",
    tag: "sweets",
    description2:
      "Deliciosa tarta de chocolate para satisfacer tus antojos más dulces.",
    popular: false,
  },
  {
    title: "Brownie",
    description: "Brownie de chocolate con nueces.",
    delay: 0.4,
    image: brownie,
    price: "$700",
    tag: "sweets",
    description2:
      "Brownie rico y suave, elaborado con chocolate y nueces para una experiencia indulgente.",
    popular: false,
  },
  {
    title: "Cheesecake de Fresa",
    description: "Cheesecake con fresas.",
    delay: 0.6,
    image: cheesecake,
    price: "$850",
    tag: "sweets",
    description2:
      "Cheesecake cremoso con fresas frescas para un postre deliciosamente equilibrado.",
    popular: true,
  },
  {
    title: "Donuts Glaseados",
    description: "Donuts con glaseado.",
    delay: 0.6,
    image: donuts,
    price: "$700",
    tag: "sweets",
    description2:
      "Donuts esponjosos y cubiertos con glaseado para una deliciosa indulgencia.",
    popular: true,
  },
  {
    title: "Tiramisú",
    description: "Tiramisú italiano.",
    delay: 0.6,
    image: tiramisu,
    price: "$950",
    tag: "sweets",
    description2:
      "Clásico Tiramisú italiano con capas de bizcocho y crema de mascarpone.",
    popular: false,
  },
  {
    title: "Croissant",
    description: "Croissant relleno de chocolate.",
    delay: 0.6,
    image: croissantChocolate,
    price: "$1200",
    tag: "sweets",
    description2:
      "Croissant esponjoso relleno de irresistible chocolate para un desayuno o merienda delicioso.",
    popular: false,
  },
];
