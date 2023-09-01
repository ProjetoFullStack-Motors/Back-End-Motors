interface IEnum {
    engine: "flex" | "hybrid" | "electric";
}

const arrayLength: number = 48;
const arrayImagesLength: number = Math.floor(Math.random() * (4 - 1) + 1);
const array = Array.from(Array(arrayLength));
let arrayImages = Array.from(Array(arrayImagesLength));
arrayImages = arrayImages.map((image, index) => index);

const modelsBrands = [
    [
        "volkswagen",
        "fox connect 1.6 flex 8v 5p",
        "https://http2.mlstatic.com/D_NQ_NP_710988-MLB53267060833_012023-O.webp",
    ],
    [
        "chevrolet",
        "camaro ss 6.2 v8 16v",
        "https://http2.mlstatic.com/D_NQ_NP_757611-MLB70739644711_072023-O.webp",
    ],
    [
        "nissan",
        "sentra s 2.0 flexstart 16v aut.",
        "https://http2.mlstatic.com/D_NQ_NP_890310-MLB70866452537_082023-O.webp",
    ],
    [
        "honda",
        "civic sedan ex 2.0 flex 16v aut.4p",
        "https://http2.mlstatic.com/D_NQ_NP_601597-MLB69723180562_052023-O.webp",
    ],
    [
        "toyota",
        "corolla altis hybrid 1.8 16v flex aut.",
        "https://http2.mlstatic.com/D_NQ_NP_600673-MLB70956916023_082023-O.webp",
    ],
    [
        "hyundai",
        "azera 3.0 v6 24v 4p aut.",
        "https://http2.mlstatic.com/D_NQ_NP_865732-MLB69551018490_052023-O.webp",
    ],
];

const colors = ["azul", "vermelho", "preto", "branco", "cinza"];

const engines: IEnum[] = [
    { engine: "flex" },
    { engine: "hybrid" },
    { engine: "electric" },
];

const makeModelBrand = () => {
    const modelBrand =
        modelsBrands[Math.floor(Math.random() * modelsBrands.length)];
    return [modelBrand[1], modelBrand[0], modelBrand[2]];
};

export { array, arrayImages, colors, engines, makeModelBrand };
