const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = await import('node:child_process');
    const url = await import('node:url');
    const path = await import('node:path');

    const currentJSFileAbsolutePath =  url.fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const folderName = 'files';
    const folderPath = path.join(currentDirPath, folderName);
    const childFile = 'script.js';
    const filePathWithChildFile = path.join(folderPath, childFile);

    const childScriptProcess = childProcess.spawn(`node`,
        [filePathWithChildFile, ...args.split(' ')]);

    process.stdin.on('data', (message) => {
        childScriptProcess.stdin.write(message);
    })

    childScriptProcess.stdout.on('data', (data) => {
        console.log(data.toString());
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess('--arg1 d--arg2');
