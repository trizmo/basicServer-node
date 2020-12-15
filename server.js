const express = require("express");
const path = require("path");

// Setting port
const port = process.env.PORT || 5000;

// Start Express Instance
const app = express();

// Body parsing middleware; Set max file size to 10mb
app.use(express.json({ limit: '1mb' }));
// app.use(express.urlencoded({ limit: '10mb' }));


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'html', 'index.html'));
    })
} else {
    console.log("SERVER SET TO DEVELOPMENT. MAKE SURE LINUX ENVIRONMENT IS SET TO PRODUCTION:")
    console.log("export NODE_ENV=production")
}

// Start Node server and listen on port
app.listen(port, () => console.log("Node Server started on port: " + port))