export interface MenuItem {
    category: string;
    name: string;
    price: number;
    description: {
      es: string;
      en: string;
      fr: string;
    };
  }
  
  export const menuItems: MenuItem[] = [
    {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Atún Thai / Thai Tuna",
        price: 10900,
        description: {
          es: "El más fresco atún aleta amarilla, en una salsa thai de la casa.",
          en: "Freshly caught yellowfin tuna topped with our house special Thai sauce.",
          fr: "Thon Thaï: thon frais dans une sauce Thai de la maison."
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Pasta con Camarones / Shrimp Pasta",
        price: 9900,
        description: {
          es: "200 gramos de camarón en una salsa de tomate fresco, ajo y crema dulce.",
          en: "200 grams of shrimp in a fresh tomato, garlic, and sweet cream sauce.",
          fr: "Pates aux crevettes: 200gr de crevettes avec une sauce de tomates fraiches, ail et créme fraiche."
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Costilla de Cerdo / Pork Ribs",
        price: 13500,
        description: {
          es: "500 gramos de costilla tierna de lechón en salsa BBQ de piña.",
          en: "500 grams of tender baby back pork ribs topped with our delicious BBQ pineapple sauce.",
          fr: ""
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Lomito Gorgonzola / Gorgonzola Beef Tenderloin",
        price: 12800,
        description: {
          es: "200 gramos(7.055 oz) del más suave lomito de res en una salsa de queso gorgonzola.",
          en: "200 grams of the most tender beef loin topped with Gorgonzola cheese sauce.",
          fr: "Longe de boeuf ou Gorgonzola: 200 gr de longe de boeuf très tendre avec une sauce au fromage Gorgonzola."
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Rib-eye",
        price: 16200,
        description: {
          es: "400 gramos (14.11 oz) del mejor y más jugoso Rib Eye de res, con el mejor chimichurri argentino del mundo.",
          en: "The best, the juiciest! Topped with the authentic Argentinian chimichurri sauce.",
          fr: "400 gr de délicieux faux filet de boeuf, avec le meilleur chimichurri Argentin du monde."
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Churrasco",
        price: 16200,
        description: {
          es: "400 gramos (14.11 oz) del mejor y más suave churrasco de res con el mejor chimichurri argentino del mundo.",
          en: "The juiciest and softest churrasco there is! Topped with authentic Argentinian chimichurri sauce.",
          fr: "400 gr de churrasco tendre accompagné du meilleur chimichurri Argentin."
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Filet Mignon",
        price: 13500,
        description: {
          es: "200 gramos (7.055 oz) del más delicioso lomito de res con el mejor chimichurri argentino y tocineta ahumada.",
          en: "Beef tenderloin topped with authentic Argentinian chimichurri and smoked bacon.",
          fr: "200 gr de délicieux filet mignon, chimichurri Argentin et bacon fumé."
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Lomito con camarones / Beef tender loin with shrimp",
        price: 16200,
        description: {
          es: "200 gramos del más delicioso lomito y camarones en una salsa de Demi-glase.",
          en: "200 grams Tender beef loin topped with shrimp in demi-glace sauce.",
          fr: "Longe de boeuf avec crevettes: 200gr de longe de boeuf et crevettes dans une sauce demi-glace."
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Filet de dorado / Mahi Mahi",
        price: 10900,
        description: {
          es: "En una salsa tropical de mango y aguacate. Pescado local fresco.",
          en: "Fresh local mahi mahi topped with our tropical sauce, made with mango and avocado.",
          fr: "Filet de dorade avec sauce à la mangue; poisson frais dans une sauce tropicale de mangue et avocat."
        }
      },
      {
        category: "Platos Fuertes / Main Dishes / Plats Principaux",
        name: "Filet de pollo / Chicken Filet",
        price: 10900,
        description: {
          es: "Filete de pollo con salsa de hongos frescos.",
          en: "Chicken filet topped with delicious fresh mushroom sauce.",
          fr: "Filet de poulet couvert d'une sauce aux champignons frais."
        }
      },
      // Entradas
      {
        category: "Entradas / Appetizers",
        name: "Poke Bowl",
        price: 6900,
        description: {
          es: "Un bowl relleno de arroz de sushi, mango, aguacate y deliciosos dados de atún fresco marinado con salsa Thai.",
          en: "A bowl filled with sushi rice, mango, avocado, and delicious diced fresh tuna marinated in Thai sauce.",
          fr: "Un bowl rempli de riz à sushi, mangue."
        }
      },
      {
        category: "Entradas / Appetizers",
        name: "Tartar de Atún / Tuna Tartare",
        price: 5900,
        description: {
          es: "Dados de atún fresco, mango y aguacate, marinado con limón y salsa Thai.",
          en: "Diced fresh tuna, mango, and avocado marinated in lime juice and Thai sauce.",
          fr: "Tartare de Thon: dés de thon frais."
        }
      },
      // Wraps / Burritos
      {
        category: "Wraps / Burritos",
        name: "Pollo / Chicken",
        price: 6500,
        description: {
          es: "Wrap de pollo con lechuga, mango, aguacate y papas salteadas.",
          en: "Chicken wrap with lettuce, mango, avocado, and sautéed potatoes.",
          fr: ""
        }
      },
      {
        category: "Wraps / Burritos",
        name: "Carne / Beef",
        price: 6500,
        description: {
          es: "Wrap de carne con lechuga, mango, aguacate y papas salteadas.",
          en: "Beef wrap with lettuce, mango, avocado, and sautéed potatoes.",
          fr: ""
        }
      },
      {
        category: "Wraps / Burritos",
        name: "Dorado / Mahi Mahi",
        price: 6500,
        description: {
          es: "Wrap de dorado a la parrilla con salsa especial y papas salteadas.",
          en: "Grilled mahi mahi wrap with special sauce and sautéed potatoes.",
          fr: ""
        }
      },
      {
        category: "Wraps / Burritos",
        name: "Atún / Tuna",
        price: 6500,
        description: {
          es: "Wrap de atún fresco con aguacate y papas salteadas.",
          en: "Fresh tuna wrap with avocado and sautéed potatoes.",
          fr: ""
        }
      },
      // Hamburguesas
      {
        category: "Hamburguesas / Hamburgers",
        name: "Pollo / Chicken",
        price: 6900,
        description: {
          es: "Hamburguesa de pollo con lechuga, tomate, aguacate, mango y tocineta, acompañado de papas salteadas.",
          en: "Chicken burger with lettuce, tomato, avocado, mango, and bacon, served with sautéed potatoes.",
          fr: "Tortilla de blé, laitue, tomate, avocat, mangue et bacon, accompagné de pommes de terre sautées."
        }
      },
      {
        category: "Hamburguesas / Hamburgers",
        name: "Carne / Beef",
        price: 6900,
        description: {
          es: "Hamburguesa de carne con lechuga, tomate, aguacate, mango y tocineta, acompañado de papas salteadas.",
          en: "Beef burger with lettuce, tomato, avocado, mango, and bacon, served with sautéed potatoes.",
          fr: "Tortilla de blé, laitue, tomate, avocat, mangue et bacon, accompagné de pommes de terre sautées."
        }
      },
      {
        category: "Hamburguesas / Hamburgers",
        name: "Dorado / Mahi Mahi",
        price: 6900,
        description: {
          es: "Hamburguesa de dorado a la parrilla con lechuga, tomate, aguacate y papas salteadas.",
          en: "Grilled mahi mahi burger with lettuce, tomato, avocado, and sautéed potatoes.",
          fr: "Tortilla de blé, laitue, tomate, avocat, mangue et bacon, accompagné de pommes de terre sautées."
        }
      },
      {
        category: "Hamburguesas / Hamburgers",
        name: "Atún / Tuna",
        price: 6900,
        description: {
          es: "Hamburguesa de atún fresco con lechuga, aguacate, cebolla morada y papas salteadas.",
          en: "Fresh tuna burger with lettuce, avocado, red onion, and sautéed potatoes.",
          fr: "Tortilla de blé, laitue, avocat, oignon rouge, accompagné de pommes de terre sautées."
        }
      },
      // Bebidas Naturales
      {
        category: "Bebidas Naturales / Natural Drinks",
        name: "Piña",
        price: 1500,
        description: {
          es: "",
          en: "",
          fr: ""
        }
      },
      {
        category: "Bebidas Naturales / Natural Drinks",
        name: "Guanábana",
        price: 1500,
        description: {
          es: "",
          en: "",
          fr: ""
        }
      },
      {
        category: "Bebidas Naturales / Natural Drinks",
        name: "Limonada con Hierbabuena",
        price: 1500,
        description: {
          es: "",
          en: "",
          fr: ""
        }
      },
      {
        category: "Bebidas Naturales / Natural Drinks",
        name: "Maracuyá",
        price: 1500,
        description: {
          es: "",
          en: "",
          fr: ""
        }
      },
      // Bebidas Gaseosas
      {
        category: "Bebidas Gaseosas / Soft Drinks",
        name: "Coca-Cola",
        price: 1300,
        description: {
          es: "",
          en: "",
          fr: ""
        }
      },
      {
        category: "Bebidas Gaseosas / Soft Drinks",
        name: "Fanta",
        price: 1300,
        description: {
          es: "",
          en: "",
          fr: ""
        }
      },
      {
        category: "Bebidas Gaseosas / Soft Drinks",
        name: "Fresca",
        price: 1300,
        description: {
          es: "",
          en: "",
          fr: ""
        }
      }
  ];
  
  export const menuCategories = Array.from(new Set(menuItems.map(item => item.category)));
  
  