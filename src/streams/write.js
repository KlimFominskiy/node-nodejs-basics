const write = async () => {
    // Write your code here
    const fs = await import('node:fs');
    const path = await import('node:path');
    const url = await import('node:url')

    const currentJSFileAbsolutePath = url.fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const filenameToWrite = 'fileToWrite.txt';
    const filePathWithFileToWrite = path.join(folderPath, filenameToWrite);

    const writeStream = fs.createWriteStream(filePathWithFileToWrite, {encoding: 'utf8'});
    process.stdin.on('data', function (data) {
        writeStream.write(data)
    })
};

await write();