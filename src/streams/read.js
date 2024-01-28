const read = async () => {
    // Write your code here
    const fs = await import('node:fs');
    const path = await import('node:path');
    const {fileURLToPath} = await import('node:url')

    const currentJSFileAbsolutePath = fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const filenameToRead = 'fileToRead.txt';
    const filePathWithFileToRead = path.join(folderPath, filenameToRead);

    const readStream = fs.createReadStream(filePathWithFileToRead, {encoding: 'utf8'});
    readStream.on('readable', function() {
        let data;
        while ((data = readStream.read()) !== null) {
            console.log(data);
        }
    })
};

await read();