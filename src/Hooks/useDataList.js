import {
  equalTo,
  get,
  getDatabase,
  onValue,
  orderByChild,
  orderByKey,
  query,
  ref,
  startAt,

} from "firebase/database";
import { useEffect, useState } from "react";


const useDataList = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const db = getDatabase();

      const databaseRef = ref(db, "data");

      const dataQuery = query(
        databaseRef,
        // startAt("Bangalore")

      );

  try {
    setError(false);
    setLoading(true);
    // request firebase database
    const snapshot = await get(dataQuery);
    setLoading(false);
    if (snapshot.exists()) {
      setData((prevData) => {
        return [...prevData, ...Object.values(snapshot.val())];
      });
    } else {
      // setHasMore(false);
      console.log("Nothing")
    }
  } catch (err) {
    console.log(err);
    setLoading(false);
    setError(true);
  }

}

fetchData();
  }, []);

return {
  loading,
  error,
  data,

};
}
export default useDataList;