const nGenerator = () => {
    return parseInt(Math.random() * 10)
}

export const idGenerator = ( idLength ) => {


    const id = []

    for(var i = 0; i < idLength; i++ ){
        id.push(nGenerator())
    }

    return parseInt(id.join(""))
}