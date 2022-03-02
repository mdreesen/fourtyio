export const get_all_users_query = `
  select * from users order by id;
`;

export const get_one_users_query = `
  select * from users where id = $1 order by id;
`;
