const fetchData = async () => {
    const baseUrl = "http://localhost:5050/"
    const urlToFetch = `${baseUrl}record/`

    const response = await fetch(urlToFetch);

    if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
    } else {
        alert("Error with fetchData request!");
        return [];
    }
}

export default fetchData;