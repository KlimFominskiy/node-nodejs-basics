const create = async () => {
    // Write your code here
    const fs= await import('node:fs/promises');
    const path= await import('node:path');
    const {fileURLToPath} = await import('node:url')

    const currentJSFileAbsolutePath = fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const fileName = 'fresh.txt';
    const filePath = path.join(folderPath, fileName);
    const fileContent = 'I am fresh and young';
    const errorMessage = 'FS operation failed.'

    try {
        await fs.writeFile(filePath, fileContent, {flag: 'wx'});
    }
    catch (error) {
        if (error.code === 'EEXIST') {
            error.message = errorMessage;
        }
        throw error;
    }
};

await create();