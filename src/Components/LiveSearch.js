import React, { useEffect, useState } from "react";

let data = [
  "Carolyn",
  "Chloe",
  "Claire",
  "Deirdre",
  "Diana",
  "Diane",
  "Donna",
  "Dorothy",
  "Elizabeth",
  "Ella",
  "Emily",
  "Emma",
  "Faith",
  "Felicity",
  "Fiona",
  "Gabrielle",
  "Grace",
  "Hannah",
  "Heather",
  "Irene",
  "Jan",
  "Jane",
  "Jasmine",
  "Jennifer",
  "Jessica",
  "Joan",
  "Joanne",
  "Julia",
  "Karen",
  "Katherine",
  "Kimberly",
  "Kylie",
  "Sophia",
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Jackson",
  "Ava",
  "Aiden",
  "Isabella",
  "Lucas",
  "Mia",
  "Caden",
  "Aria",
  "Grayson",
  "Riley",
  "Natalie",
  "Ryder",
  "Gianna",
  "Carson",
  "Kennedy",
  "Joanne",
  "Julia",
  "Karen",
  "Katherine"
];

const LiveSearch = () => {
  let [search, setSearch] = useState(""); // 1
  let [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data.filter((value) => value.includes(search)));
  }, [search]);

  return (
    <div className="container">
      <h1>Live Search Using React</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="arr">
        {filteredData.map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default LiveSearch;
