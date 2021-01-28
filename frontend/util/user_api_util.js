


export const fetchUser = (userId) => {
    return $.ajax({
        methd: 'GET',
        url: `/api/users/${userId}`
    })
}