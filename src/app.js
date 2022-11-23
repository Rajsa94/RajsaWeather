const express = require('express');
const path = require("path")
const app = express();
const hbs = require('hbs')
const port = process.env.PORT || 3300

// public static pth
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));


// rouiting


// app.get("/", (req, res)=>{
//     res.send("welcome rajsa")
// });

// app.get("/about", (req, res)=>{
//     res.send("welcome about")
// });

// app.get("/weather", (req, res)=>{
//     res.send("welcome weather")
// });

// app.get("*", (req, res)=>{
//     res.send("404 oops")
// });
app.get("", (req, res)=>{
    res.render('index')
});

app.get("/about", (req, res)=>{
    res.render("about")
});

app.get("/weather", (req, res)=>{
    res.render("weather")
});

app.get("*", (req, res)=>{
    res.render("404error", {
        errorMsg: "oops! Page Not Found"
    })
});

app.listen(port, ()=>{
    console.log(`welcome to rajsa ${port}`)
});