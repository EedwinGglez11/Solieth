export const products = [
  {
    id: 1,
    name: 'Short corto',
    price: 119.99,
    description: 'Short de cintura alta elástico y mate en color solido, talla XL.',
    images: ['/ropa/shortnegro.jpg'],
    colors: [
      {
        name: 'Negro',
        image: '/ropa/shortnegro.jpg',
        nameOverride: 'Short corto',
        description: 'Short de cintura alta elástico y mate en color solido.',
      },
    ],
  },
  {
    id: 2,
    name: 'Vestido de largo medio',
    price: 199.99,
    description: 'Vestido de largo medio,color negro, talla G(L), con abertura en pierna derecha.',
    images: ['/ropa/vestidonegro.jpg'],
    colors: [
      {
        name: 'Negro',
        image: '/ropa/vestidonegro.jpg',
        nameOverride: 'Vestido de largo medio',
        description: 'Vestido de largo medio,color negro, talla G(L), con abertura en pierna derecha.',
      }
    ],
  },
  {
    id: 3,
    name: 'Vestido corto elegante',
    price: 369.99,
    description: 'Vestido corto elegante de color azul marino, espalda descubierta y tirantes largos a media pierna, talla G(L).',
    images: ['/ropa/vestidoazul.jpg'],
    colors: [
      {
        name: 'Azul Marino',
        image: '/ropa/vestidoazul.jpg',
        nameOverride: 'Vestido corto elegante',
        description: 'Vestido corto elegante de color azul marino, espalda descubierta y tirantes largos a media pierna, talla G(L).',
      }    ],
  },
  {
    id: 4,
    name: 'Vestido verde matcha',
    price: 229.99,
    description: 'Vestido de una sola manga con detalle de abertura en pierna, talla L.',
    images: ['/ropa/vestidoverde.jpg'],
    colors: [
      {
        name: 'Verde Matcha',
        image: '/ropa/vestidoverde.jpg',
        nameOverride: 'Vestido verde matcha',
        description: 'Vestido de una sola manga con detalle de abertura en pierna, talla L.',
      }    ],
  },
  {
    id: 5,
    name: 'Vestido ajustado',
    price: 229.99,
    description: 'Vestido ajustado de tela elástica con decoración floral, talla M.',
    images: ['/ropa/vestidorojo.jpg','/ropa/vestidorojo2.jpg'],
    colors: [
      {
        name: 'Rojo',
        image: '/ropa/vestidorojo.jpg',
        nameOverride: 'Vestido ajustado',
        description: 'Vestido ajustado de tela elástica con decoración floral, talla M.',
      },
      {
        /*name: 'Rojo',*/
        image: '/ropa/vestidorojo2.jpg',
        nameOverride: 'Vestido ajustado',
        description: 'Vestido ajustado de tela elástica con decoración floral, talla M.',
      },
        ],
  },
  {
    id: 6,
    name: 'Vestido floral',
    price: 249.99,
    description: 'Vestido floral mini elegante con estampado floral, sin mangas y cintura ceñida, talla G(L).',
    images: ['/ropa/vestidofloral.jpg'],
    colors: [
      {
        name: 'blanco c/Azul',
        image: '/ropa/vestidofloral.jpg',
        nameOverride: 'Vestido floral',
        description: 'Vestido floral mini elegante con estampado floral, sin mangas y cintura ceñida, talla G(L).',
      },
        ],
  },
  {
    id: 7,
    name: 'Vestido estampado',
    price: 139.99,
    description: 'Vestido con estampado floral, mini,casual, talla M.',
    images: ['/ropa/vestidoflores.jpg'],
    colors: [
      {
        name: 'blanco c/rosa',
        image: '/ropa/vestidoflores.jpg',
        nameOverride: 'Vestido estampado',
        description: 'Vestido con estampado florao, mini,casual, talla M.',
      },
        ],
  },
  {
    id: 8,
    name: 'Falda alta',
    price: 199.99,
    description: 'Falda de cintura alta con fruncido y bajo asimétrico talla G(L).',
    images: ['/ropa/faldalistones.jpg'],
    colors: [
      {
        name: 'blanca',
        image: '/ropa/faldalistones.jpg',
        nameOverride: 'Falda alta',
        description: 'Falda de cintura alta con fruncido y bajo asimétrico talla G(L).',
      },
        ],
  },
  {
    id: 9,
    name: 'Falda diseño pastel',
    price: 199.99,
    description: 'Falda con diseño de pastel en capas, cintura alta, detalle de volantes, talla M.',
    images: ['/ropa/faldablanca.jpg'],
    colors: [
      {
        name: 'blanca',
        image: '/ropa/faldablanca.jpg',
        nameOverride: 'Falda diseño pastel',
        description: 'Falda con diseño de pastel en capas, cintura alta, detalle de volantes, talla M.',
      },
        ],
  },
  {
    id: 10,
    name: 'Pantalón cintura alta',
    price: 199.99,
    description: 'Pantalón de cintura alta, casual con pierna ancha, estampado de corazón rosa y rojo ideal para uso diario, talla G(L).',
    images: ['/ropa/pantalonrosa.jpg'],
    colors: [
      {
        name: 'Rosa',
        image: '/ropa/pantalonrosa.jpg',
        nameOverride: 'Pantalón cintura alta',
        description: 'Pantalon de cintura alta, casual con pierna ancha, estampado de corazón rosa y rojo ideal para uso diario, talla G(L).',
      },
        ],
  },
  {
    id: 11,
    name: 'Top floral',
    price: 129.99,
    description: 'Top de mujer vintage con estampado floral azul, ajusta sin mangas con detalle de atar, talla G(L).',
    images: ['/ropa/blusaflorazul.jpg'],
    colors: [
      {
        name: 'blanco c/azul',
        image: '/ropa/blusaflorazul.jpg',
        nameOverride: 'Top floral',
        description: 'Top de mujer vintage con estampado floral azul, ajusta sin mangas con detalle de atar, talla G(L).',
      },
        ],
  },
  {
    id: 12,
    name: 'Camiseta asimétrica',
    price: 129.99,
    description: 'Camiseta asimétrica con un solo hombro, con estampado floral, diseño de lirios rosados y amarillos, talla M.',
    images: ['/ropa/blusaunamanga.jpg'],
    colors: [
      {
        name: 'amarillo',
        image: '/ropa/blusaunamanga.jpg',
        nameOverride: 'Camiseta asimétrica',
        description: 'Camiseta asimétrica con un solo hombro, con estampado floral, diseño de lirios rosados y amarillos, talla M.',
      },
        ],
  },
  {
    id: 13,
    name: 'Top sexy',
    price: 159.99,
    description: 'Top halter sexy sin espalda café, talla M.',
    images: ['/ropa/blusacortacafe.jpg'],
    colors: [
      {
        name: 'café',
        image: '/ropa/blusacortacafe.jpg',
        nameOverride: 'Top sexy',
        description: 'Top halter sexy sin espalda café, talla M.',
      },
        ],
  },
  {
    id: 14,
    name: 'Vestido mini',
    price: 139.99,
    description: 'Vestido sin tirantes azul con estampado floral, talla M.',
    images: ['/ropa/vestidoazulflores.jpg'],
    colors: [
      {
        name: 'Azul',
        image: '/ropa/vestidoazulflores.jpg',
        nameOverride: 'Vestido mini',
        description: 'Vestido sin tirantes azul con estampado floral, talla M.',
      },
        ],
  },
  {
    id: 15,
    name: 'Vestido sin espalda',
    price: 229.99,
    description: 'Vestido elegante sin espalda y cuello halter, talla L.',
    images: ['/ropa/vestidonegrocorto.jpg'],
    colors: [
      {
        name: 'Negro',
        image: '/ropa/vestidonegrocorto.jpg',
        nameOverride: 'Vestido sin espalda',
        description:  'Vestido elegante sin espalda y cuello halter, talla L.',
      },
      
        ],
  },
  {
    id: 16,
    name: 'Vestido largo elegante',
    price: 289.99,
    description: 'Vestido largo mediano blanco con estampado de cereza, talla M, con abertura en la pierna izquierda.',
    images: ['/ropa/vestidocereza.jpg'],
    colors: [
      {
        name: 'Blanco',
        image: '/ropa/vestidocereza.jpg',
        nameOverride: 'Vestido largo elegante',
        description:  'Vestido largo mediano blanco con estampado de cereza, talla M, con abertura en la pierna izquierda.',
      },
      
        ],
  },
    {
    id: 17,
    name: 'Vestido elegante',
    price: 199.99,
    description: 'Vestido elegante con hombro caído y doblado asimétrico con malla negra, talla XXL.',
    images: ['/ropa/vestidonegrotrans.jpg'],
    colors: [
      {
        name: 'Negro',
        image: '/ropa/vestidonegrotrans.jpg',
        nameOverride: 'Vestido elegante',
        description:  'Vestido elegante con hombro caído y doblado asimétrico con malla negra, talla XXL.',
      }
      
        ],
  },
];
