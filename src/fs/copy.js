const copy = async () => {
    // Write your code here
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const {fileURLToPath} = await import('node:url')

    const currentJSFileAbsolutePath = fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const sourceFolderName = 'files';
    const sourceFolderPath = path.join(currentDirPath, sourceFolderName);
    const destinationFolderName = 'files_copy';
    const destinationFolderPath = path.join(currentDirPath, destinationFolderName);
    const errorMessage = 'FS operation failed.';

    try {
        await fs.cp(sourceFolderPath, destinationFolderPath, {recursive: true, errorOnExist: true, force: false});
    }
    catch (error) {
        if (error.code === 'ERR_FS_CP_EEXIST') {
            error.message = errorMessage;
        }
        throw error;
    }
};

await copy();
