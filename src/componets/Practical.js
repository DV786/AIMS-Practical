import React, { useEffect, useState } from "react";
import "../CSS/Practical.css";

export default function Practical() {
  const [data, setData] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      //   console.log(json);
      setData(json);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortDataAEC = (field) => {
    let sortedData = data.slice().sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
    setData(sortedData);
  };

  const sortDataDEC = (field) => {
    let sortedData = data.slice().sort((a, b) => {
      if (a[field] < b[field]) {
        return 1;
      }
      if (a[field] > b[field]) {
        return -1;
      }
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div className="data">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>
              <div onClick={() => sortDataAEC("name")}> aName</div>
              <div onClick={() => sortDataDEC("name")}> dName</div>
            </th>
            <th>
              <div onClick={() => sortDataAEC("username")}> aUserName</div>
              <div onClick={() => sortDataDEC("username")}> dUserName</div>
            </th>
            <th>
              <div onClick={() => sortDataAEC("email")}> aEmail</div>
              <div onClick={() => sortDataDEC("email")}> dEmail</div>
            </th>
            <th>
              <div onClick={() => sortDataAEC("address/city")}> aCity</div>
              <div onClick={() => sortDataDEC("address/city")}> dCity</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                </tr>
              );
            })
          ) : (
            <tr aria-colspan={5}>
              <td>Loading....</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
