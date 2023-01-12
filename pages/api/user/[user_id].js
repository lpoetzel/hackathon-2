export default function getUserProfileById(req, res) {
  //const db = await somedb
  const { user_id } = req.query;
  const query =
    "SELECT u.*, v.* FROM user u JOIN booking b ON u.user_id = b.user_id JOIN vehicle v ON b.vehicle_id = v.vehicle_id WHERE u.user_id = " +
    user_id +
    " ORDER BY b.booking_id DESC LIMIT 1";

  // const userData = db.all(query,[user_id] );
  // res.json(userData);
  res.json({ id: +user_id });
}

// cancellation // returning
