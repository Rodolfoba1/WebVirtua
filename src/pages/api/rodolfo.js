import {createPool} from 'mysql2/promise';

const db = createPool({
  host: '192.168.1.24', // Cambia esto si tu base de datos está en un host diferente
  user: 'root', // Reemplaza con el nombre de usuario de tu base de datos
  password: 'Tr4c30n', // Reemplaza con la contraseña de tu base de datos
  database: 'bd_prueba', // Reemplaza con el nombre de tu base de datos
});

export default async function handler(req, res) {
  const [rows] = await db.query("Select * from prT");
  return res.status(200).json(rows)
}

