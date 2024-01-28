const parseEnv = () => {
    // Write your code here
    const RSSVariables = Object.entries(process.env).reduce((accumulator, [key, value]) => {
        if (key.startsWith('RSS_')) {
            accumulator.push(`${key}=${value}`);
        }

        return accumulator;
    }, []);

    console.log(RSSVariables.join('; '));
};

parseEnv();