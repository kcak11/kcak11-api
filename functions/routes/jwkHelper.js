/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const jwkToPem = require("jwk-to-pem");

function getPlainKey(key) {
    return key.replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", "").replace("-----BEGIN PRIVATE KEY-----", "").replace("-----END PRIVATE KEY-----", "").replace(/\n/g, "");
}

module.exports = function (req, res) {
    if (req.body && req.body.jwk) {
        const jwk = req.body.jwk;
        const publicKey = jwkToPem(jwk, { private: false });
        res.status(200);
        res.send({ publicKey: getPlainKey(publicKey) });
    } else {
        res.status(500);
        res.end("An error occured");
    }
};
