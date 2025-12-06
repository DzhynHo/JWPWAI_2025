function Watcher(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

const events = require('events');
const util = require('util');
util.inherits(Watcher, events.EventEmitter);

const fs = require('fs');
const watchDir = './watch';
const processedDir = './done';

Watcher.prototype.watch = function () {
    const watcher = this;
    fs.readdir(this.watchDir, (err, files) => {
        if (err) throw err;
        for (let file of files) {
            watcher.emit('process', file);
        }
    });
}

Watcher.prototype.start = function () {
    const watcher = this;
    fs.watchFile(watchDir, () => {
        watcher.watch();
    });
}

const watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function (file) {
    const watchFile = this.watchDir + '/' + file;
    const processedFile = this.processedDir + '/' + file.toLowerCase();
    fs.rename(watchFile, processedFile, (err) => {
        if (err) throw err;
        console.log("Processed:", file);
    });
});

watcher.start();
