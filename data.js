import { v4 as uuidv4 } from 'uuid';

export const data = [
    {
        id: uuidv4(),
        description: "Dissolvant parfum fraise",
        marque: "Easy Paris",
       // name: "Remover",
        price: 2.50,
        picture: '/remover.png'
    },
]

export const category = [
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel laque brillant diamant longue tenue",
        marque: "Leticia Well",
        //name: "Remover",
        price: 2,
        picture: '/vernis.png',
        link: '/product/brillant'
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles tenue jusqu'à 9 jours effet gel haute brillance",
        marque: "Easy Paris",
       // name: "Remover",
        price: 2.50,
        picture: '/easy9.png',
        link:'/product/easy'
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles fluorescent",
        marque: "Easy Paris",
       // name: "Remover",
        price: 2,
        picture: '/fluorescent.png',
        link:'/product/fluo'
    },
]

export const soldes = [
    {
        id: uuidv4(),
        description: "Dissolvant parfum fraise",
        marque: "Easy Paris",
        oldPrice: 3.00,
        price: 2.50,
        picture: '/remover.png'
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles tenue jusqu'à 9 jours effet gel haute brillance",
        marque: "Easy Paris",
        oldPrice: 3.00,
        price: 2.50,
        picture: '/easy-black.png'
    },
]

export const news = [
    {
        id: uuidv4(),
        description: "Dissolvant parfum fraise",
        marque: "Easy Paris",
        price: 2.50,
        picture: '/remover.png'
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles tenue jusqu'à 9 jours effet gel haute brillance",
        marque: "Easy Paris",
        price: 2.50,
        picture: '/easy-black.png'
    },
]

export const brillant = [
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel laque brillant diamant longue tenue (rose)",
        marque: "Leticia Well",
        price: 2.50,
        color: "rose",
        picture: '/brillant-pink.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel laque brillant diamant longue tenue (orange)",
        marque: "Leticia Well",
        price: 2.50,
        color: "orange",
        picture: '/brillant-orange.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel laque brillant diamant longue tenue (jaune)",
        marque: "Leticia Well",
        price: 2.50,
        color: "jaune",
        picture: '/brillant-jaune.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel laque brillant diamant longue tenue (fushia)",
        marque: "Leticia Well",
        price: 2.50,
        color: "fushia",
        picture: '/brillant-fushia.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel laque brillant diamant longue tenue (vert)",
        marque: "Leticia Well",
        price: 2.50,
        color: "vert",
        picture: '/brillant-green.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel laque brillant diamant longue tenue (bleu)",
        marque: "Leticia Well",
        price: 2.50,
        color: "bleu",
        picture: '/brillant-blue.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },   
];

export const easy = [
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel haute brillance (rose)",
        marque: "Easy Paris",
        price: 2.50,
        color: "rose",
        picture: '/easy-pink.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel haute brillance (blanc)",
        marque: "Easy Paris",
        price: 2.50,
        color: "blanc",
        picture: '/easy-white.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel haute brillance (jaune)",
        marque: "Easy Paris",
        price: 2.50,
        color: "jaune",
        picture: '/easy-yellow.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel haute brillance (bleu)",
        marque: "Easy Paris",
        price: 2.50,
        color: "bleu",
        picture: '/easy-blue.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel haute brillance (violet)",
        marque: "Easy Paris",
        price: 2.50,
        color: "violet",
        picture: '/easy-purple.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel haute brillance (gris)",
        marque: "Easy Paris",
        price: 2.50,
        color: "gris",
        picture: '/easy-grey.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },   
    {
        id: uuidv4(),
        description: "Vernis à ongles effet gel haute brillance (noir)",
        marque: "Easy Paris",
        price: 2.50,
        color: "noir",
        picture: '/easy-black.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
];
export const fluo = [
    {
        id: uuidv4(),
        description: "Vernis à ongles fluorescent (rose)",
        marque: "Easy Paris",
        price: 2.50,
        color: "rose",
        picture: '/fluo-pink.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles fluorescent (orange)",
        marque: "Easy Paris",
        price: 2.50,
        color: "orange",
        picture: '/fluo-orange.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles fluorescent (vert)",
        marque: "Easy Paris",
        price: 2.50,
        color: "vert",
        picture: '/fluo-green.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles fluorescent (bleu)",
        marque: "Easy Paris",
        price: 2.50,
        color: "bleu",
        picture: '/fluo-blue.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles fluorescent (violet)",
        marque: "Easy Paris",
        price: 2.50,
        color: "violet",
        picture: '/fluo-purple.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },
    {
        id: uuidv4(),
        description: "Vernis à ongles fluorescent (rouge)",
        marque: "Easy Paris",
        price: 2.50,
        color: "rouge",
        picture: '/fluo-red.png',
        composition: "Acétate de butyle, acétate d'éthyle, nitrocellulose, copolymère acide adipique/néopentylglycol/anhydride trimellitique, copolymère d'acétylates, bentonite de stéaralkonium, copolymère de styrène/acrylates, benzophénone-1, parfum.",
        emploi: "appliquer sur des ongles propres et secs.",
        warning: "Produit inflammable ! Conserver à l'abri de la chaleur, ne pas digérer. Tenir hors de portée des enfants.",
    },   
];