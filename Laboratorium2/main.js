const { Worker } = require('worker_threads');

function runWorker(limit) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./sumWorker.js', {
            workerData: { limit }
        });

        const start = performance.now();

        worker.on('message', (result) => {
            const time = (performance.now() - start).toFixed(2);
            resolve({ limit, result, time });
        });

        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with code ${code}`));
        });
    });
}

async function main() {
    const limits = [200000000, 300000000, 400000000, 500000000];
    const promises = limits.map(l => runWorker(l));

    const results = await Promise.all(promises);

    results.forEach(r => {
        console.log(`Limit: ${r.limit} → Wynik: ${r.result}, czas: ${r.time} ms`);
    });
}

main();
