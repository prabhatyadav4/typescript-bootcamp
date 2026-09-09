import axios, { type AxiosResponse } from "axios";

// axios.get() sends a GET request and returns a Promise.
axios.get("https://example.com/data")
.then(response => {
    // response.data contains the data returned by the server.
    console.log(response.data)
})

// Install a regular package with: npm i some-library
// Install TypeScript type definitions with: npm i -D @types/some-library
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

// This interface describes the shape of a Todo object.
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// async functions return a Promise, so they can use await.
const fetchData = async () => {
    try {
        // AxiosResponse<Todo> tells TypeScript what response.data contains.
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log("Todo", response.data)
    } catch (error: any) {
        // isAxiosError checks whether the error was created by Axios.
        if(axios.isAxiosError(error)) {
            console.log("Axios Error", error.message)
            if(error.response) {
                // The response may be unavailable when the request did not reach the server.
                console.log(error.response.status)
            }
        }
    }
}

// Call the function so the request is actually made.
fetchData()