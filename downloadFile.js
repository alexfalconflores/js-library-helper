const fs = require('fs');
const https = require('https');

const imgUrl = 'https://cdn2.thecatapi.com/images/190.gif';
const id = '190';

async function downloadWithLinks() {
    const filename = id;
    const extension = imgUrl.split('.').pop();
    https.get(imgUrl, res => {
        const stream = fs.createWriteStream(`${filename}.${extension}`);
        res.pipe(stream);
        stream.on('finish', () => {
            stream.close();
        })
    })
}

downloadWithLinks();