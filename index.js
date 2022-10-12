const { randomUUID } = require('crypto');
const fs = require('fs');
const client = require('https');
const { exit, argv } = require('process');

const arguments = argv.slice(2);

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                fs.Dir
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
                
            }
        });
    });
}


let model_name = arguments[0]
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

  var dir = './' + model_name;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
  

let first = model_name.slice(0, 1)
let second = model_name.slice(1,2)

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  
	let num = arguments[1]++;
			console.log(num)	
    const download = async() => { for(let i = 1; i < num; i++) {
        if (i > 100) {
            downloadImage("https://fapello.com/content/"+first+"/"+second+"/"+model_name+"/1000/"+model_name+"_" + addLeadingZeros(i, 4) + ".jpg", model_name + '/' + randomUUID() + '.jpg' )
            .then(console.log)
            .catch(console.error);
            
        }else{
            downloadImage("https://fapello.com/content/"+first+"/"+second+"/"+model_name+"/1000/"+model_name+"_" + addLeadingZeros(i, 4) + ".jpg", model_name + '/' + randomUUID() + '.jpg' )
            .then(console.log)
            .catch(console.error);
        }
        await sleep(350)

        
    }
}

download()
