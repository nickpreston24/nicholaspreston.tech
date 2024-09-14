import process from "process";

const development: boolean = process.env.NODE_ENV === 'production' ? false : !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export function isDev(): boolean {
    return development;
}

export function isAdmin(): boolean {
    return true;
}

export default isDev;