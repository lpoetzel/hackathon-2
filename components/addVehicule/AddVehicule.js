import styles from "./AddVehicule.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AddVehicule = () => {
  let dummy = [
    {
      location_id: 1,
      venu_name: "Postdamer platz",
    },
    {
      location_id: 2,
      venu_name: "Alexander platz",
    },
    {
      location_id: 3,
      venu_name: "Berliner palast",
    },
  ];
  const [addVehicle, setAddVehicle] = useState({});
  const [locations, setLocations] = useState(dummy);

  useEffect(() => {
    axios
      .get("/api/locations")
      .then((response) => setLocations(response.data))
      .catch((err) => console.log(err));
  }, []);

  // let locations = [
  //   {
  //     location_id: 1,
  //     venu_name: "Postdamer platz",
  //   },
  //   {
  //     location_id: 2,
  //     venu_name: "Alexander platz",
  //   },
  //   {
  //     location_id: 3,
  //     venu_name: "Berliner palast",
  //   },
  // ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let name = e.target.car_name.value;
    let brand = e.target.brand.value;
    let description = e.target.description.value;
    let model = e.target.model.value;
    let plate = e.target.plate.value;
    let mileage = e.target.mileage.value;
    let image = e.target.image.value;
    let location = e.target.location.value;

    axios
      .post(`/api/vehicles/insertVehicle`, {
        vehicle_name: name,
        vehicle_desc: description,
        vehicle_brand: brand,
        vehicle_model: model,
        mileage: mileage,
        plate_no: plate,
        location_id: location,
        image: image,
        company_id: 1,
        availability: 1,
        vehicle_type: "car",
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Name:</label>
          </div>
          <div className={styles.col70}>
            <input type="text" name="car_name" id="name" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Brand:</label>
          </div>
          <div className={styles.col70}>
            <input type="text" name="brand" id="brand" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Model:</label>
          </div>
          <div className={styles.col70}>
            <input type="text" name="model" id="model" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Plate:</label>
          </div>
          <div className={styles.col70}>
            <input type="text" name="plate" id="plate" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Description:</label>
          </div>
          <div className={styles.col70}>
            <textarea type="text" name="description" id="description" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Mileage</label>
          </div>
          <div className={styles.col70}>
            <input type="number" name="mileage" id="mileage" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Image</label>
          </div>
          <div className={styles.col70}>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg, image/"
              id="name"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Location</label>
          </div>
          <div className={styles.col70}>
            <select id="location" name="location">
              {locations.map((location) => {
                return (
                  <option
                    key={location.location_id}
                    value={location.location_id}
                  >
                    {location.venue_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <input className="button" type="submit" value="Add Vehicle" />
      </form>
    </div>
  );
};

export default AddVehicule;
