import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // custom hook bnaliya & this will return some data
  const [data, setData] = useState({}); //{} {empty becoz api nhi aa rha khali object he sahii}
  useEffect(() => {
    // jab koi iss hook ko laod kare tabh api call karwao
    // iss hookmkaj anadar he api call no differenrtt function
    fetch(
      // fetch sai aap chainig kr skte ho .then(iske anadr milta h callback) lga kar
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) // jo data json format mai aya usko normal var mai hold nhi krta hai
      // yeh hook directly use state value sia return kar wa rhe h
      // Initially, data is set to an empty object {}. After fetching the data, you call setData(res[currency]) to update data with the new information
      .then((res) => setData(res[currency])); // response ek object h usko access [] sqaure bra ket  sai krskte h
    // response aya vo key ayegyi jo hai currency nd object ko access[] kr skte hai
  }, [currency]); // cuurrency kai andar jab bhi change ho api calll hence depency array
  console.log(data);

  return data; //By returning only the data, it can be used wherever you need currency information,
  // multiple value would harderr to manage
  // yeh pura method us returning data
}
// pura method ko hee return kiya h
export default useCurrencyInfo;
