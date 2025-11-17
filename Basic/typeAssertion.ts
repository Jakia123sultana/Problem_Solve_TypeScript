let anything;
anything = "Mezba";
const kgToGMConverter = (input)=>{
    if(typeof input === "number"){
        return input * 1000;
    }
    else if(typeof input === "string"){
        const [value]  = input.split(" ");
        console.log(value);
        // return `Converted output is: ${Number(value)*1000}`;
    }
}

const result2 = kgToGMConverter("kg  3");
console.log({ result2 });
