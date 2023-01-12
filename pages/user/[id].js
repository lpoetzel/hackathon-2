import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import dummyImage from "../../assets/dummy.jpg";
import RentalDetailsCard from "../../components/RentalDetailsCard/RentalDetailsCard";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import Modal from "../../components/Modal/Modal";

function UserProfile() {
  const dummyUser = {
    id: "1",
    name: "HansWurst Zimmerfrau",
    info: "I'm a star!",
    user_email: "wunderbar@schönesleben.com",
    is_customer: false,
    is_company: false,
    is_admin: true,
    company_id: null,
    current_rental: {
      id: 1,
      vehicle_name: "Opel Astra",
      vehicle_image: dummyImage,
      plate_no: "B-OS 5555",
      company_name: "schöne Autos",
      pick_up_venue: "Berlinale Palast",
      drop_of_venue: "Berghain",
    },
  };
  const router = useRouter();
  const { id } = router.query;
  const [userId] = useState(id);
  const [userData, setUserData] = useState(dummyUser);

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/userprofile/${userId}`)
        .then((response) => setUserData(response))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>{userData.is_admin ? "Admin" : "User"} Profile</h1>
      <UserInfoCard data={userData} />
      <div className={styles.current_booking}>
        <h2>Your next rental</h2>
        <RentalDetailsCard data={userData.current_rental} />
      </div>
    </div>
  );
}

export default UserProfile;
