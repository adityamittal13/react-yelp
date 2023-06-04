const addAccount = async (email, password, saved) => {
    const baseUrl = "http://localhost:5050/";
    const urlToFetch = `${baseUrl}record/`;

    const date = new Date();

    const newAccount = {email, password, saved, timestamp: date};

    const response = await fetch(urlToFetch, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newAccount)
    });

    if (!response.ok) {
        alert("Error with addAccount request!");
    }

    return [];
}

export default addAccount;