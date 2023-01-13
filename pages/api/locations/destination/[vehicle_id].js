import connection from "../../auth/lib/db";

export default async function handler(req, res) {
  const { vehicle_id } = req.query;
  const query =
    "SELECT DISTINCT location.venue_name, booking.booking_id FROM location JOIN booking ON booking.destination=location.location_id JOIN vehicle ON vehicle.vehicle_id=booking.vehicle_id WHERE vehicle.vehicle_id=" +
    vehicle_id +
    " ORDER BY booking.booking_id DESC LIMIT 1;";
  console.log(query);
  connection
    .promise()
    .query(query)
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
}
