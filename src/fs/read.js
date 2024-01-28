const read = async () => {
    // Write your code here
    const fs= await import('node:fs/promises');
    const path= await import('node:path');
    const {fileURLToPath} = await import('node:url')

    const currentJSFileAbsolutePath = fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const fileToReadName = 'fileToRead.txt';
    const filePathWithFileToRead = path.join(folderPath, fileToReadName);
    const errorMessage = 'FS operation failed.';

    try {
        const fileContent = await fs.readFile(filePathWithFileToRead, 'utf8');
        console.log(fileContent);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            error.message = errorMessage;
        }
        throw error;
    }
};

await read();