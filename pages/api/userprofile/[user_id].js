SELECT u.*, v.*
FROM user u
JOIN booking b ON u.user_id = b.user_id
JOIN vehicle v ON b.vehicle_id = v.vehicle_id
WHERE u.user_id = {user_id};
