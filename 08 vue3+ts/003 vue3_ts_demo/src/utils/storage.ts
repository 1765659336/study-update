export const add = (key:string, val:any) => {
    window.localStorage.setItem(key, val)
}
export const get = (key:string) => {
    return window.localStorage.getItem(key)
}
export function rm(key:any) {
    window.localStorage.removeItem(key)
}