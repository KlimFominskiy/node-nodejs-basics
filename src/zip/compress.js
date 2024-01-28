const compress = async () => {
    // Write your code here
    const fs = await import('node:fs');
    const path = await import('node:path');
    const url = await import('node:url')
    const zlib = await import('node:zlib');

    const currentJSFileAbsolutePath = url.fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const fileToCompress = 'fileToCompress.txt';
    const filePathWithFileToCompress = path.join(folderPath, fileToCompress);
    const fileCompressed = 'archive.gz';
    const filePathWithFileCompressed = path.join(folderPath, fileCompressed);

    const readStream = fs.createReadStream(filePathWithFileToCompress);
    const writeStream = fs.createWriteStream(filePathWithFileCompressed);
    const gzip = zlib.createGzip();
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();