const express = require('express')
const dotenv = require('dotenv');
const request = require('request');
const PORT = 5000;

var app = express();

global.access_token = '';
var spotify_redirect_uri = 'http://localhost:3000/auth/callback'

dotenv.config()
var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

function generateRandomString() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 15; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

app.get('/auth/login', (req, res) => {
    var scope = "streaming user-read-email user-read-private";

    var state = generateRandomString();

    var auth_query_parameters = new URLSearchParams({
        response_type: "code",
        client_id: spotify_client_id,
        scope: scope,
        redirect_uri: "http://localhost:3000/auth/callback",
        state: state
    });
    console.log(auth_query_parameters.toString());
    res.redirect("https://accounts.spotify.com/authorize/?" + auth_query_parameters.toString());
});

app.get('/auth/callback', (req, res) => {
    var code = req.query.code;

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: spotify_redirect_uri,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            access_token = body.access_token;
            res.redirect('/');
        }
    });

});

app.get('/auth/token', (req, res) => {
    res.json({
        access_token: access_token
    })
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})