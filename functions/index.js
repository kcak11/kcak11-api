/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
const functions = require("firebase-functions");
const cors = require("cors");
const jwkHelper = require("./routes/jwkHelper");
const Crypto = require("./routes/Crypto");

const corsOptionsDelegate = function (req, callback) {
    const whitelist = req["__allowedOrigins"];
    let corsOptions;
    if (!whitelist) {
        corsOptions = { origin: false };
    } else {
        if (whitelist === "*" || (whitelist instanceof Array && whitelist.indexOf(req.header("Origin")) !== -1)) {
            corsOptions = { origin: true };
        } else {
            corsOptions = { origin: false };
        }
    }
    callback(null, corsOptions);
};

exports.jwkHelper = functions.https.onRequest((req, res) => {
    req["__allowedOrigins"] = ["https://crypto.kcak11.com"];
    cors(corsOptionsDelegate)(req, res, () => {
        // functions.logger.info("jwkHelper", { structuredData: true });
        jwkHelper(req, res);
    });
});

exports.Crypto = functions.https.onRequest((req, res) => {
    req["__allowedOrigins"] = ["https://crypto.kcak11.com"];
    cors(corsOptionsDelegate)(req, res, () => {
        // functions.logger.info("Crypto", { structuredData: true });
        Crypto(req, res);
    });
});
