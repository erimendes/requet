import pg from "pg";
import fs from "fs";
var pg2 = require('pg');



//var conString = "postgres://username:password@localhost/database";

const connectionString =
  "postgres://user:password@postgres:5432/db";


const client = new pg.Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
      }
});

client.connect(err => {
  const SQL_REQUEST_CREATE = `
  CREATE TABLE IF NOT EXISTS requet (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      message VARCHAR(50)
  )
`;

  if (!fs.existsSync(SQL_REQUEST_CREATE))
    dbQuery(SQL_REQUEST_CREATE);
      
  if (err) {
    throw err;
  } else {
    console.log("Connected!");
  }
})

export const dbQuery = (query: string) => {
  return new Promise<any>((resolve, reject) => {
      client
      .query(query)
      .then(() => {
        console.log('Table created successfully!');
      })
      .catch(err => {
        console.log(err);
      })
  })
  .finally(() => {
      client.end();
      console.log('DB Desconectado!');
  })
}

export const dbQueryInsert = (query: string, params?: any[]) => {
  return new Promise<any>((resolve, reject) => {
      client
      .query(query, params)
      .then(() => {
        console.log('Data inserted with successfully!');
      })
      .catch(err => {
        console.log(err);
      })
  })
  .finally(() => {
      client.end();
      console.log('DB Desconectado!');
  })
}


