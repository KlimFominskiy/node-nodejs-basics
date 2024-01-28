const remove = async () => {
    // Write your code here
    const fs= await import('node:fs/promises');
    const path= await import('node:path');
    const {fileURLToPath} = await import('node:url')

    const currentJSFileAbsolutePath = fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const fileToRemoveName = 'fileToRemove.txt';
    const filePathWithFileToDelete = path.join(folderPath, fileToRemoveName);
    const errorMessage = 'FS operation failed.';

    try {
        await fs.rm(filePathWithFileToDelete)
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            error.message = errorMessage;
        }
        throw error;
    }
};

await remove();