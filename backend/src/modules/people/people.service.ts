import { pool } from "../../plugins/dbPlugin";
import type { PersonInput } from "./people";

export const getAll = async () => {
  const { rows } = await pool.query("SELECT * FROM people");
  return rows;
};

export const create = async (data: PersonInput) => {
  const {
    first_name,
    last_name,
    email,
    contact_1,
    contact_2,
    date_of_birth,
    father_id,
    mother_id,
    guardian_id,
  } = data;

  const query = `
    INSERT INTO core.people (
      first_name,
      last_name,
      email,
      contact_1,
      contact_2,
      date_of_birth,
      father_id,
      mother_id,
      guardian_id
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
    RETURNING *
  `;

  const values = [
    first_name,
    last_name ?? null,
    email ?? null,
    contact_1 ?? null,
    contact_2 ?? null,
    date_of_birth,
    father_id ?? null,
    mother_id ?? null,
    guardian_id ?? null
  ];

  const { rows } = await pool.query(query, values);

  return rows[0];
};
