const ev = process.env;
export const username = ev.DEV_POSTGRES_USERNAME;
export const password = ev.DEV_POSTGRES_PASSWORD;
export const host = ev.DEV_POSTGRES_HOST;
export const port = Number(ev.DEV_POSTGRES_PORT);
export const database = ev.DEV_POSTGRES_DATABASE;
