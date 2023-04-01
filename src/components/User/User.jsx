import { useEffect, useState } from "react";
import "./User.css";

const BASE_URL="https://mct-fs-app.up.railway.app";

const User = () => {
  const [radioValue, setRadioValue] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(
        `${BASE_URL}/user/gender/${radioValue}`
      );
      const data = await res.json();
      setProducts(data.users);
    };
    fetchCategory();
  }, [radioValue]);

  const radioBtnHandler = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <div className="user-container">
      <div className="user-wrapper">
        <div className="user-deatail-header">
          <h1>User Detail</h1>
        </div>
        <div className="user-deatail-description">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dignissimos molestias voluptatem, omnis sint, consequuntur
            aspernatur aut quaerat delectus rem numquam amet voluptatum itaque
            optio alias soluta. Minus eligendi magni, quas dolores voluptates
            eum similique, aperiam odit maxime quod nihil libero amet qui
            assumenda dolor laboriosam non mollitia id distinctio. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Distinctio ratione
            accusamus labore aliquam excepturi aperiam recusandae voluptate
            reiciendis eius ducimus minima mollitia adipisci, quos voluptas
            corporis illum sit? Vero, quidem.
          </p>
        </div>
        <div className="user-deatail-filter">
          <input
            type="radio"
            className="radio"
            name="radio_btn"
            value="all"
            onClick={radioBtnHandler}
          />
          All
          <input
            type="radio"
            className="radio"
            name="radio_btn"
            value="male"
            onClick={radioBtnHandler}
          />
          Male
          <input
            type="radio"
            className="radio"
            name="radio_btn"
            value="female"
            onClick={radioBtnHandler}
          />
          Female
        </div>
        <div className="user-deatail-table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {products.map((element) => {
                return (
                  <tr key={element._id}>
                    <td>
                      <div className="poster-container">
                        <img
                          src="https://picsum.photos/200"
                          alt="poster"
                        />
                      </div>
                    </td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
