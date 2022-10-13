/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const crypto = require("crypto");
const CryptoJS = require("crypto-js");

let publicKey = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA1HcXD9/7kHz2J6DRH9uMb9q2D+RCww26yLLTOBvMA93r3Um3GkE4g8XGJPIYGFVxZNsio/uWjZtOndZLNJ7gTJ96/mlsdtB165d+BqaHIxCLPYk+87U2JZiUhn785pQ++geBtq7GQsvaKuX+dSKqIQJM32n4d/GU5SpyXtxsTi1r5XYBf+hyFStEm5Kdn5GlQfoKVNKmw66Xqb/frbmrMC41qdXxea6GDcsp/7gd8MaLL9lStEAmQWcyKvhUXdi92xyA5E/OLpsiIGu+3ECp4NMgYyR8BqyhyI4T4I5/46ygUnjQKW4DbPNQQakqFs3OeCcNLw88rH1un90X1t4BNKFB/Kf5Lvzz5WB3bYk4DYAu34LFY+Kzy/cB9rIMHrpgXfE1n+B8uVKTIHtrEPwyDFO7QQVpenz4avedE227+s2l9cqmUA0xRkvMdqwBb05t2nhBxmyNZ97OlZZ+d0wbCJ5dolt433xSukgJ6pN7atlvUASIZiGFQh4GkAVFqLoHxGb3Hj1AIw4eRqIwWp8jZXz9xW/2vS9Zy3qFebEU7hNqgeZdKc5Lc2nJ1nhD799B7XEM5O/Tp6kqPezokGRFp7rYlqCebD7jCcxXfR5+AEaAHcEuRqmLfSkyn98TxiPOdJCl0NMPjUL1ak/qZJkklpcMTbk0gjyO39xLy63aIV8CAwEAAQ==";
let privateKey = "MIIJQgIBADANBgkqhkiG9w0BAQEFAASCCSwwggkoAgEAAoICAQDUdxcP3/uQfPYnoNEf24xv2rYP5ELDDbrIstM4G8wD3evdSbcaQTiDxcYk8hgYVXFk2yKj+5aNm06d1ks0nuBMn3r+aWx20HXrl34GpocjEIs9iT7ztTYlmJSGfvzmlD76B4G2rsZCy9oq5f51IqohAkzfafh38ZTlKnJe3GxOLWvldgF/6HIVK0Sbkp2fkaVB+gpU0qbDrpepv9+tuaswLjWp1fF5roYNyyn/uB3wxosv2VK0QCZBZzIq+FRd2L3bHIDkT84umyIga77cQKng0yBjJHwGrKHIjhPgjn/jrKBSeNApbgNs81BBqSoWzc54Jw0vDzysfW6f3RfW3gE0oUH8p/ku/PPlYHdtiTgNgC7fgsVj4rPL9wH2sgweumBd8TWf4Hy5UpMge2sQ/DIMU7tBBWl6fPhq950Tbbv6zaX1yqZQDTFGS8x2rAFvTm3aeEHGbI1n3s6Vln53TBsInl2iW3jffFK6SAnqk3tq2W9QBIhmIYVCHgaQBUWougfEZvcePUAjDh5GojBanyNlfP3Fb/a9L1nLeoV5sRTuE2qB5l0pzktzacnWeEPv30HtcQzk79OnqSo97OiQZEWnutiWoJ5sPuMJzFd9Hn4ARoAdwS5GqYt9KTKf3xPGI850kKXQ0w+NQvVqT+pkmSSWlwxNuTSCPI7f3EvLrdohXwIDAQABAoICADD6kzJxrAiPBh/0jsENV76haL8ZG9rjW1/Q+ahBoDJ0Al+tEqzWxDR8b0UtGijh6ZYafk3XPcm/N8xjDks/JO4FBdGIdByfyc9ZyQ+3bAfFVJQHA6Ai8iyQlAy9UYfGPQ5elKSMfeAAJnclNhfCuf2KDjais0jTREPgGSWNItqS1gC7x3S5HTOMGfDTR8r1RGeFQMR1G0SZBxV2yhW+a5xbyrswOs6WUQj1AOWWiDBtVMDfFJXBBBCnvYTyYmCQCpRsabo4O4u6748Rx5n2vjK5+Qlh68WOHm2hcyudLhZKQVtBxpsGZXvES4gXe0BuiV5hgkSK+q247LuluE0sOJKBwy3p1VbbIV3Locv8LbuOGSvixDcb88ERCi38QLVvURpQSF+PqiGjWXxbeoWN6Z7wtauwUig9BohbNYLGC6ZtB3NqtQc0jDvLJm/kLgE9le4gflf646xf7++D4HyZnfaIk4H0wIhE2231Q2b7xoVSniTMpYWw43BZeGusV59BX0UvX/BxnYxf7N2TMcgNFPdwiFafUlcP3nH5TUJfY+0XQmJU0HNsmqIcNVu7b461bzDfRzVxFFhK3qoHrLfYN7GbeX7R2jXsIFPm7Apfs6gg9AGfl53JX8oiJiBbZi1T7QACY+yv7NLFm9tleeqXZVYmcR/l6fiZEJfBRsrGvFIBAoIBAQD0uRAr331laq9+pGR6LUb1YwrGyk08Z049+XKuLLxayz1Lg6GYqDlsEoFVGmrWXaYiekcHLPfE8jOvZb18O66T6D5FCYlNnQJZywBt3dE+CazqVei+6gblv3LikBUvzlnwX0nhmRvbP6fYuhn9Yfuyuh2AFSrPKnQ+EHKP36PvQJ2TyVTaNyOmJXFGKpyURdG5eY6WjqCYVXAAapmiSIYv35DmLQi9H7GmvtLqXvvc1yVeMWfhf9aDqnLoW/t8nb3UuCOZtfRRqmv962UbFpmsrQ1XhoBWGWjbuFGE1MfXOOWuEP2p4Im+BWASPjVfvdMUGeD0txBpWhrbGWw1lUHBAoIBAQDeQX2U64ZXWIebNLX/FcKdJuRTDsfAnb2OjH9MFDkYgeslevWsC8jw0dNSqUk3Q0VHvvhmhDYB2ycwZOrK9jmB02YD8b0HgHffzaCguZZpd26UsPVP5/u32c2TdxWwN4ho0yCwmNmzlUt+IdtPLWkIJg8FmM8sg9tqSNp69+KdZCbHtIihw7G08pKHWAnWl0gqRc3vAwNoFrGyGmgCwz9e+gDxOsQxQ12ayqAKr9icLLmYT+uHwam2bXpA9g2rrfuabuXsQOxmCEouIG5MxhcnaWvaWauauNk8DeKxtJO3KR0G+seSwdgq4g+BSx/Q9KqBQ8mSpBqK3bpU7ZOiK+sfAoIBAQDuHQ8+ERP61OZzC9N0CZAMfVTj/b1O85lutcM+8+pFUZGPY0Gdvrk4jXzn6G9hqvdWfrGTqs5eA+gEVrMbKRsBcSz9kXzWVtoNsnb1b6oDefiUfgibkiwp6bEH/3eN73MVbjH93zL6jqJrPxDAuVDlIzBHCtF/h2hZZzmBAfKJfc6VGIWGWbZHGBFyW03E+3ZHyJ3Tom1iK2dyEEbyXyypcheTzue81RTPEMc6IjdgNrp2Pw47nF6F+BgcPDujkfw9+Pkyu5dAytiO1TaoN8JJAIyFyCohHFIpz9sJqtvTbtoUFxYp7382tBY5Sew2/wVdfpyin2jJiVGuM7tVG6hBAoIBAGpCe20IkekOvX65282CNNJ3tq/zIBN6FxehGndgL9AExUzdFbnUxJRGbTdXElcmhWgA6Lfyu/N1OK5NgWfaArKMRHjcSZjdlfJdWE+fi0cPP8I9PHugmNtUeZHoXGksk74yOq3T1jmixj4ep8CaIF4x+/qcDWjl/bA59qLWAvVm3ZebO7vDWSH+24lz0PhUyb7UMtnz4dwRBZH2SAYSHSkmc+7hPs2ivIz2FUAmxHQeeflVNHFqaN58Rvfp661J+EHkhW7Ht34stnKJNNLl3koMf/Eb8AyAFfQ9W0XE5N6r/GHK4kHLBbOy8uDI7wQzBZXZt/SxGrOLwLs7/tqJDtcCggEAa0leOv9n9HHV8a6qrhprcV0n50rBWOfhv4CQb7XvZYiru3HWO4DskTRFV2OnYyUkzJplRjVeUBjKLlSxDOKP8K/sSe96URh6WEibpADZQp3l5epfRZcTYVk1qbbulGDnpdrhlEYuodXoeJgopfic6snW3nISUr8LrTamkCc7HueekjjLywxiHPEuU403p+xa/s5MhkC0qNIkK1XGEBnNFZ657MWTKYOYE19eOW+Kqq687SLGSrgJP4h2h9gyT2M3m+iO5YBCmuRb8UzNZqfooVCO0f5tCNs8quTYAYc6lBnkmdldHzJHwORwFDbPwez17t8AJvfAtajJs6Re96AkyA==";

function convertToPEM(key, startPrefix, endSuffix) {
    return startPrefix + "\n" + key.match(/.{1,64}/g).join("\n") + "\n" + endSuffix;
}

publicKey = convertToPEM(publicKey, "-----BEGIN PUBLIC KEY-----", "-----END PUBLIC KEY-----");
privateKey = convertToPEM(privateKey, "-----BEGIN PRIVATE KEY-----", "-----END PRIVATE KEY-----");

function getRandomString(len) {
    const allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+";
    return allowed.split("").sort(function () {
        return Math.random() - Math.random();
    }).join("").substring(0, len || 16);
}

const initVector = getRandomString(16);

const encryptStringWithRsaPublicKey = function (toEncrypt) {
    const buffer = Buffer.from(toEncrypt);
    const encrypted = crypto.publicEncrypt({
        key: publicKey.toString(),
        padding: crypto.constants.RSA_PKCS1_PADDING,
    }, buffer);
    return encrypted.toString("base64");
};

const decryptStringWithRsaPrivateKey = function (toDecrypt) {
    const buffer = Buffer.from(toDecrypt, "base64");
    const decrypted = crypto.privateDecrypt({
        key: privateKey.toString(),
        passphrase: "",
        padding: crypto.constants.RSA_PKCS1_PADDING,
    }, buffer);
    return decrypted.toString("utf8");
};

const encryptWithAES = function (message, key) {
    const ciphertext = CryptoJS.AES.encrypt(message, key, {
        iv: CryptoJS.enc.Utf8.parse(initVector),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    }).toString();
    return ciphertext;
};

const decryptWithAES = function (cipherText, key) {
    const bytes = CryptoJS.AES.decrypt(cipherText, key, {
        iv: CryptoJS.enc.Utf8.parse(initVector), // parse the IV
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    });
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};

module.exports = function (req, res) {
    if (req.body && req.body.encryptedKey && req.body.encryptedMessage) {
        const encryptedKey = req.body.encryptedKey;
        const encryptedMessage = req.body.encryptedMessage;
        try {
            const key = decryptStringWithRsaPrivateKey(encryptedKey);
            const decryptedMessage = decryptWithAES(encryptedMessage, key);
            res.status(200);
            res.send({ decryptedMessage: decryptedMessage });
        } catch (exjs) {
            res.status(500);
            res.send({ "error": "Unable to decrypt the given input." });
        }
    } else {
        res.status(500);
        res.end("Missing input parameter \"encryptedKey\" or \"encryptedMessage\"");
    }
};
