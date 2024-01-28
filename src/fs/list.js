const list = async () => {
    // Write your code here
    const fs= await import('node:fs/promises');
    const path= await import('node:path');
    const {fileURLToPath} = await import('node:url')

    const currentJSFileAbsolutePath = fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const errorMessage = 'FS operation failed.';

    try {
        const files = await fs.readdir(folderPath);
        console.log(files);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            error.message = errorMessage;
        }
        throw error;
    }
};

await list();