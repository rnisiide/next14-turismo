import { Passeio } from "./models"
import { connectToDb } from "./utils";

//temporary data


const passeios = [
    {
        "id": 1,
        "title": "Parque das Aves",
        "desc": "Parque das Aves: Descubra a Fascinante Vida Selvagem em Foz do Iguaçu ",
        "longdesc": "Explore a beleza exótica e a biodiversidade do Parque das Aves em Foz do Iguaçu. Este passeio é perfeito para amantes da natureza e famílias, oferecendo uma experiência educativa e envolvente. O Parque das Aves é um santuário dedicado à conservação de aves tropicais, abrigando mais de 1.300 aves de 143 espécies. Localizado ao lado das Cataratas do Iguaçu, o parque oferece trilhas em meio à mata atlântica, permitindo uma imersão completa na natureza.",
        "img": "https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2Fpasseios%2Fimagens%2F00014%2F3455-imagensdetucanoemfoz.jpg&w=1920&q=75",
        "slug": "parque-das-aves",
        "price": "79"
    },
    {
        "id": 2,
        "title": "Macuco Safari",
        "desc": "Macuco Safari: Aventura na Selva e nas Águas de Foz do Iguaçu",
        "longdesc": "Vivencie uma aventura emocionante com o Macuco Safari em Foz do Iguaçu. Este passeio combina um emocionante passeio de barco pelas Cataratas do Iguaçu com uma trilha pela selva, proporcionando uma experiência completa e inesquecível. O Macuco Safari é um passeio ecológico que leva você a explorar a floresta subtropical do Parque Nacional do Iguaçu e a se aproximar das poderosas quedas d'água das Cataratas do Iguaçu em um barco inflável. O passeio é dividido em três partes: um trajeto de jipe, uma caminhada pela selva e o emocionante passeio de barco.",
        "img": "https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2Fpasseios%2Fimagens%2F00003%2F1946-passeiodebarcoemfoz.jpg&w=1920&q=75",
        "slug": "macuco-safari",
        "price": "383"
    },
    {
        "id": 3,
        "title": "Itaipu Binacional - Visita Panorâmica",
        "desc": "Itaipu Panorâmica: Admire a Grandeza da Maior Usina Hidrelétrica do Mundo",
        "longdesc": "Descubra a Itaipu Panorâmica em Foz do Iguaçu, uma visita fascinante que oferece uma vista impressionante da maior usina hidrelétrica do mundo. Itaipu Panorâmica é um tour que permite aos visitantes conhecerem a imensidão da Usina de Itaipu a partir de vários pontos de observação estrategicamente posicionados. Este passeio proporciona uma visão abrangente da barragem, do vertedouro e do lago de Itaipu, destacando a magnitude desta obra de engenharia.",
        "img": "https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2F%2Fpasseios%2Fimagens%2F00045%2F4138-itaipupanoramica5.jpg&w=1920&q=75",
        "slug": "itaipu-panoramico",
        "price": "60"
    },
    {
        "id": 4,
        "title": "Templo Budista",
        "desc": "Visite o Templo Budista de Foz do Iguaçu e mergulhe na paz e serenidade deste local espiritual.",
        "longdesc": "O templo oferece uma vista panorâmica da região, proporcionando um ambiente perfeito para meditação e reflexão. Ideal para quem busca tranquilidade e um aprofundamento cultural, este passeio é uma experiência enriquecedora e pacífica. Admire as estátuas de Buda e a arquitetura tradicional enquanto aprende sobre a filosofia budista.",
        "img": "https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2Fpasseios%2Fimagens%2F00003%2F1946-passeiodebarcoemfoz.jpg&w=1920&q=75",
        "slug": "templo-budista",
        "price": "Gratuito"
    },

]

export const getPasseiosTemp = async () => {
    return passeios
}


export const getPasseioTemp = async (slug) => {
    return passeios.find((post) => post.slug === slug)
}

export const getPasseios = async () => {
    try {
        connectToDb();
        const posts = await Passeio.find();
        console.log(posts)

        return posts
    }
    catch (err) {
        console.log(err)
        throw new Error("Não encontrou os passeios")
    }
};

export const getPasseio = async (slug) => {
    try {
        connectToDb();
        const post = await Passeio.findOne({ slug });
        return post
    }
    catch (err) {
        console.log(err)
        throw new Error("Failed to fetch posts")
    }
};

