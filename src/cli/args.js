const parseArgs = () => {
    // Write your code here
    const argumentsFromCL = process.argv.slice(2);
    const reducedArguments = argumentsFromCL.reduce((previousValue, currentValue, currentIndex, array) => {
        const nextValue = array[currentIndex + 1];
        if (nextValue !== undefined && currentValue.startsWith('--')) {
            previousValue.push(`${currentValue.slice(2)} is ${nextValue}`);
        }

        return previousValue;
    }, []);

    console.log(reducedArguments.join(', '));
};

parseArgs();