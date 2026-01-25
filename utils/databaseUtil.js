const getAllUsers = async (database) => {

    const {data, error} = await database.from('users').select()
    if (error)
        throw error
    return data

}

const insertUser = async (database, data) => {
    const  {data, error} = await database.from('users').insert(data)
    if (error)
        throw error

    return data
}

