


export const fetchUser = (userId) => {
    return $.ajax({
        methd: 'GET',
        url: `/api/users/${userId}`
    })
}

export const fetchUsers = () => {

    return $.ajax({
        type: "GET",
        url: 'api/users'
    })
}
