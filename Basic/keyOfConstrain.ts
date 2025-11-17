
const product={
    brand:"HP",
}
const getPropertyFromObj = <X>(obj:X, key:keyof X)=>{
    return obj[key]
}

const result2 = getPropertyFromObj(product, "brand");
