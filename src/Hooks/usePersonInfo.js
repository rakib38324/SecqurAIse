import {
  child,
  get,
  getDatabase,
  onValue,
  orderByKey,
  query,
  ref,
} from "firebase/database";
import { useEffect, useState } from "react";


const usePersonInfo = (ID) => {
  console.log(ID)
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [data, setData] = useState([]);

 
  const dbRef = ref(getDatabase());
get(child(dbRef, `data/${ID}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});



}
export default usePersonInfo;