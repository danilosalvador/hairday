export const apiConfig = {
    baseURL: process.env.NODE_ENV === "development" 
                ?  "http://localhost:3333" 
                : "https://my-json-server.typicode.com/danilosalvador/hairday",
}
