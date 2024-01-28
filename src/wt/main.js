const performCalculations = async () => {
    // Write your code here
    const os = await import('node:os');
    const workerThreads = await import('node:worker_threads');
    const path = await import('node:path');
    const url = await import('node:url');

    const currentJSFileAbsolutePath =  url.fileURLToPath(import.meta.url);
    const currentDirPath = path.dirname(currentJSFileAbsolutePath);
    const workerFileName = 'worker.js';
    const filePathToWorker = path.join(currentDirPath, workerFileName);
    const coresNumber = os.cpus();
    let numberToSend = 10;

    const workerResults = await Promise.allSettled(coresNumber.map(() => {
        return new Promise(function(resolve, reject) {
            const worker = new workerThreads.Worker(filePathToWorker,
                {workerData: numberToSend++});
            worker.on('message', resolve);
            worker.on('error', reject);
        })
    }))

    const results = workerResults.map(workerResult => ({
        status: workerResult.status === 'fulfilled' ? 'resolved' : 'error',
        data : workerResult.status === 'fulfilled' ? workerResult.value : null
    }));

    console.log(results);
};

await performCalculations();