import knex from "../../services/knex";

export const getAll = () => {
  return knex("users");
};

export const save = (params) => {
  return knex("users").insert(params);
};

export const remove = (id) => {
  return knex("users").remove(id);
};

export const update = (id, params) => {
  return knex("users").where({ id }).update(params);
};
