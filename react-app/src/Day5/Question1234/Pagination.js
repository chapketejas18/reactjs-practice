import { useEffect, useState } from "react";

export const Pagination = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currPage, setCurPage] = useState(1);

  const fetchApi = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currPage}&_limit=${10}`);
      const resData = await res.json();
      console.log(resData);
      setUsers(resData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchApi();
    }, 10);
  }, [currPage]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
          <button onClick={()=>{
            setCurPage((prev)=>prev-1);
          }} disabled={currPage===1}>prev</button>
          page:{currPage}
          <button onClick={()=>{
            setCurPage((prev)=>prev+1);
          }} disabled={currPage===10}>next</button>
        </ul>
      )}
    </>
  );
};
