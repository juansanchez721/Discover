


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


export const updateUser = (user, userId) => {
    return $.ajax({
        type: 'PATCH',
        url: `api/users/${userId}`,
        data: user,
        contentType: false,
        processData: false
    })
}