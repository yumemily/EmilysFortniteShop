import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Shop() {
  const { id } = useParams();
  const history = useHistory();

  const [singleItem, setSingleItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    await fetch(`https://fortniteapi.io/v2/items/get?id=${id}&lang=en`, {
      method: "GET",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: "ef976a9b-a4686e4c-53d900e4-77767b89",
      },
    })
      .then((response) => response.json())
      .then(function (data) {
        setSingleItem(data.item);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card itemcard mb-3" style={{ maxWidth: 1000 }}>
        <div className="row ">
          <div className="col-md-6">
            <div className={singleItem.rarity.name}>
              <img
                src={singleItem.images.icon}
                className="card-img"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{singleItem.name}</h2>
              <h5>{singleItem.price} V-BUCKS</h5>
              <h5 className="card-text">{singleItem.description}</h5>
              <h5 className="card-text">Item type: {singleItem.type.name}</h5>
              <button
                style={{
                  backgroundColor: "#0D7EC2",
                  marginTop: "2.5rem",
                  border: "none",
                }}
                onClick={() => history.goBack()}
              >
                {" "}
                RETURN TO SHOP{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
