const decompress = async () => {
    // Write your code here
    const fs = await import('node:fs');
    const path = await import('node:path');
    const url = await import('node:url')
    const zlib = await import('node:zlib');

    const currentJSFileAbsolutePath = url.fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const fileToDecompress = 'archive.gz';
    const filePathWithFileToDecompress = path.join(folderPath, fileToDecompress);
    const fileDecompressed = 'fileToCompress.txt';
    const filePathWithFileDecompressed = path.join(folderPath, fileDecompressed);

    const readStream = fs.createReadStream(filePathWithFileToDecompress);
    const writeStream = fs.createWriteStream(filePathWithFileDecompressed);
    const unzip = zlib.createUnzip();
    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();