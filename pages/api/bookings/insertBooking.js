import connection from "../auth/lib/db";

export default async function handler(req, res) {
    const {vehicle_id, user_id, destination}= req.body;
  const query =
    "INSERT INTO booking(vehicle_id, user_id, destination) VALUES (?, ?, ?)";
  connection
    .promise()
    .query(query, [vehicle_id, user_id, destination])
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving menu from database");
    });
}
