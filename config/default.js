module.exports = {
    database: {
        master: {
            host: "localhost",
            user: "root",
            password: "fedora",
            port: "3306",
            database: "boryaBlog",
            connectionLimit: 3
        },
        slave: {
            host: "localhost",
            user: "root",
            password: "",
            port: "3306",
            database: "test",
            connectionLimit: 3
        }
    },
    sessionKeys: ['medportal', 'users'],
    render: {
        root: "app/views",
        layout: "layout",
        viewExt: "ejs",
        cache: false,
        debug: true
    },
    server: {
        port: 4000
    },
    app: {
        name: "medportall.ua"
    },
    nodemailer: {
        sevice: 'mail.ru',
        user: 'mogila.malvina@mail.ru',
        pass: 'borya89@'
    }
};