const updateAccount = async (account) => {
    const baseUrl = "http://localhost:5050/"
    const urlToFetch = `${baseUrl}record/${account._id}`

    const editedAccount = {
        email: account.email,
        password: account.password,
        saved: account.saved
    }

    const response = await fetch(urlToFetch, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedAccount)
    })

    if (!response.ok) {
        alert("Error with updateAccount request!");
    }
    
    return [];
}

export default updateAccount;