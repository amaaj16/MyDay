
let users
class UserDAO {
    static async injectDB(conn) {
        if (users) {
            return
        }
        try {
            users = await conn.db("MyDay").collection("users")
            this.users = users
        } catch (e) {
            console.error(`Ocurrio un problema en la base ${e.stack} `)

        }
    }

    static async getUsers() {
        let cursor
        try {
            cursor = users.find({}).toArray((err, doc) => {
                console.log(doc)
            })

        } catch (err) {
            console.error(`Ocurrio un error al obtener los usuarios`)
        }

    }

    static async getUserByEmail(email) {
        let cursor
        try {
            return cursor = users.find({
                "email": email
            }).toArray()
        } catch (err) {
            console.log("error")
        }
    }

    static async createUser(user) {
        try {
            // TODO Ticket: Create/Update Comments
            // Construct the comment document to be inserted into MongoDB.
            return await users.insertOne({
                "email": user.email,
                "name": user.name,
                "password": user.password,

            })
        } catch (e) {
            console.error(`Unable to post comment: ${e}`)
            return { error: e }
        }



    }


}

module.exports = UserDAO;