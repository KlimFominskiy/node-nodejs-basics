const transform = async () => {
    // Write your code here
    const stream = await import('stream');

    const input = process.stdin;
    const output = process.stdout;

    const reverse = new stream.Transform({
        transform(chunk, encoding, callback) {
            const inputString = chunk.toString().trim();
            const reversedString = inputString.split("").reverse().join("");
            callback(null, reversedString + "\n");
        }
    });

    await stream.pipeline(input, reverse, output, function(error){
        console.error(error);
    });
};

await transform();