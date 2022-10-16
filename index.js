const { randomUUID } = require('crypto');
const fs = require('fs');
const client = require('https');
const { exit, argv } = require('process');

const arguments = argv.slice(2);
if (!arguments[0] || !arguments[1]) return console.log('Missing Argument')
if (isNaN(arguments[1])) return console.log('The second argument must be a number.')

let model_name = arguments[0]
// get both parts of models name
let first = model_name.slice(0, 1)
let second = model_name.slice(1, 2)

let num = arguments[1]++;


function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                fs.Dir
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                res.resume();
                reject(new Error(`Request got ${res.statusCode} - Out of content or something?`));

            }
        });
    });
}


function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

var dir = './' + model_name;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}




const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}



const download = async () => {
    for (let i = 1; i < num; i++) {
        if (i > 100) {
            downloadImage("https://fapello.com/content/" + first + "/" + second + "/" + model_name + "/1000/" + model_name + "_" + addLeadingZeros(i, 4) + ".jpg", model_name + '/' + randomUUID() + '.jpg')
                .then((a) => {
                    console.log('%d / %d Pieces of Media Downloaded for "%s".', i, num, model_name)
                })
                .catch(console.error);

        } else {
            downloadImage("https://fapello.com/content/" + first + "/" + second + "/" + model_name + "/1000/" + model_name + "_" + addLeadingZeros(i, 4) + ".jpg", model_name + '/' + randomUUID() + '.jpg')
                .then((a) => {
                    console.log('%d / %d Pieces of Media Downloaded for "%s".', i, num, model_name)
                })
                .catch(console.error);
        }
        await sleep(365)


    }
}

download()
