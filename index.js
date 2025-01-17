const express = require('express')
const dotenv = require('dotenv');
const app = express()
const path = require('path')
dotenv.config();

const print = console.log
const PORT = process.env.PORT || 5000;
const GITHUB_ID = process.env.GITHUB_ID || ('GITHUB_ID ❌');
const TWITTER_ID = process.env.TWITTER_ID || ('TWITTER_ID ❌');

// views engine setup
app.set('view engine','ejs')
app.set('views', path.join(__dirname, '/views'));

// Serve static files from /public
let publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath));

// Routes
app.get('/', async function(req, res, next) {
    res.render(
		'index', { 
			mytitle: "SAQR SUBAIE - portfolio",
            myimage: "https://media.discordapp.net/attachments/880948826201014323/977592923073949757/coding.png"
		}
	);
})

app.get('/:id', function(req, res) {
    console.log(req.params);
    const id = req.params.id;
    res.render('404', {
            mytitle: "SAQR SUBAIE - error-404",
            myimage: "https://media.discordapp.net/attachments/880948826201014323/977593463715549255/error.png",
            r404: `${id}`
        }
    );
});










app.listen(PORT, function() {
    print(`------------------------------------------------------------`);
    console.log(`Example app listening on http://localhost:${PORT}/ !`)
    console.log(`WebSite Bot 4kr_bot online https://http://saqr-subaie.com/ !`)
    print(`------------------------------------------------------------`);
    print(`gitHub : SAQR-SUBAIE`)
    print(`twitter : SAQR_SUBAIE`)
    print(`------------------------------------------------------------`);
});
