import knex from "../../services/knex.js";
import bcrypt from "bcrypt";

const TABLE = "users";

export const getAll = () => {
  return knex(TABLE).select("id", "name", "email", "created_at", "updated_at");
};

export const get = (id) => {
  return knex(TABLE)
    .where({ id })
    .select("id", "name", "email", "created_at", "updated_at")
    .first();
};

export const save = (params) => {
  params.password = bcrypt.hashSync(params.password, 10);
  return knex(TABLE).insert(params);
};

export const update = (id, params) => {
  params.password = bcrypt.hashSync(params.password, 10);
  return knex(TABLE).where({ id }).update(params);
};

export const remove = (id) => {
  return knex(TABLE).delete(id);
};

export const getByEmail = (email) => {
  return knex(TABLE).where({ email }).first();
};
