const calculateHash = async () => {
    // Write your code here
    const fs= await import('node:fs/promises');
    const path= await import('node:path');
    const {fileURLToPath} = await import('node:url')
    const {createHash} = await import('node:crypto');

    const currentJSFileAbsolutePath = fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const filenameToRead = 'fileToCalculateHashFor.txt';
    const filePathWithFileToRead = path.join(folderPath, filenameToRead);
    const hash = createHash('sha256')

    try {
        const fileContent = await fs.readFile(filePathWithFileToRead);
        hash.update(fileContent);
        console.log('Hash = ' + hash.digest('hex'));
    }
    catch (error) {
        throw error;
    }
};

await calculateHash();