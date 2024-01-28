const rename = async () => {
    // Write your code here
    const fs= await import('node:fs/promises');
    const path= await import('node:path');
    const {fileURLToPath} = await import('node:url')

    const currentJSFileAbsolutePath = fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const wrongFilename = 'wrongFilename.txt';
    const filePathWithWrongFile = path.join(folderPath, wrongFilename);
    const properFilename = 'properFilename.md';
    const filePathWithProperFile = path.join(folderPath, properFilename);
    const errorMessage = 'FS operation failed.';

    try {
        await fs.access(filePathWithProperFile, fs.constants.F_OK);
        throw new Error(errorMessage)
    }
    catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }

    try {

        await fs.access(filePathWithWrongFile, fs.constants.F_OK);
        await fs.rename(filePathWithWrongFile, filePathWithProperFile);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            error.message = errorMessage;
        }
        throw error;
    }
};

await rename();