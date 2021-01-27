

export const signUp = (user) => {
    debugger
    return $.ajax({
            method: 'POST',
            url: '/api/users',
            data: { user }
    })
}

export const login = (user) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
}

export const searchEmail = (word) => {
    return $.ajax({
        method:'GET',
        url: `/api/email/search?word=${word}`
    })
}