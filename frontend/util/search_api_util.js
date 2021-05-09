
export const fetchSearch = (entity) => {
    debugger
    return $.ajax({
        type:'GET',
        url: `api/search?entity=${entity}`
    })
}