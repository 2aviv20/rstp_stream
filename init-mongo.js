db.createUser({
    user: "admin1",
    pwd: "12345",
    roles: [
        {
            role: "readWrite",
            db: "mainDb"
        }
    ]
})