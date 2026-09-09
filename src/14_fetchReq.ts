interface Todo {
    // Describes the structure of a todo item returned by the API.
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async () => {
    try {
        // Request the first todo item from the JSONPlaceholder API.
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        // Throw an error when the request does not complete successfully.
        if(response.ok) {
            throw new Error(`HTTP error ${response.status}`)
        }

        // Convert the response body into a Todo object.
        const data: Todo = await response.json()
    } catch (error: any) {
        // Handle errors that occur while fetching or parsing the data.
    }
}