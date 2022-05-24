const cors = require('cors');

// consign
module.exports = app => {
    // app é uma referência ao express
    app.use(
        cors({
            origin: ["http://localhost:5500"]
        })
    );
}