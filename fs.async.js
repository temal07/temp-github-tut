const { readFile, writeFile, write } =  require('fs');

console.log('start')

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const first = data;

    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        const second = data;

        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first} ${second}.`,
            (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log('Done with this task');
            }
        )
    })
});

console.log('starting new task.');
