interface IEnum {
    engine: "flex" | "hybrid" | "electric"
}

const arrayLength: number = 48;
const arrayImagesLength: number = Math.floor(Math.random() * (4 - 1) + 1);
const array = Array.from(Array(arrayLength));
let arrayImages = Array.from(Array(arrayImagesLength));
arrayImages = arrayImages.map((image, index) => index);

const modelsBrands = [
    ["volkswagen", "fox"],
    ["chevrolet", "celta"],
    ["nissan", "kwid"],
    ["honda", "civic"],
    ["toyota", "corola"],
    ["hyundai", "azira"]
];

const colors = ["azul", "vermelho", "preto", "branco", "cinza"];

const engines: IEnum[] = [
    {engine: "flex"}, 
    {engine: "hybrid"}, 
    {engine: "electric"}
];

const makeModelBrand = () => {
    const modelBrand = modelsBrands[Math.floor((Math.random() * (modelsBrands.length)))];
    return [modelBrand[1], modelBrand[0]];
};

export {
    array,
    arrayImages,
    colors,
    engines,
    makeModelBrand
};