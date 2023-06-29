import mysql, {Pool} from 'promise-mysql';

export let datasource: Pool;

// (async function (){
//     datasource = await mysql.createPool({
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         port: +process.env.DB_PORT!,
//         database: process.env.DB_NAME,
//         connectionLimit: +process.env.DB_CP_SIZE!
//     })
// });
