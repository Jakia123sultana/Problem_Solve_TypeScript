interface Developer<T, X=null>{
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        releasedYear:string;
    }
    smartWatch: T;
    bike?:X;
}
interface BrandCharaWatch {
  heartRate: string;
  stopwatch: boolean;
}

const poorDeveloper:Developer< BrandCharaWatch,
  { brand: "Yamaha"; engineCapacity: "200cc" }>={
    name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "200",
    stopwatch: true,
  }, 
}

console.log(poorDeveloper)