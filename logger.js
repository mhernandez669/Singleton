class Logger {      
    constructor() {
        if (!Logger.instance) {
            this.logs = [];
            Logger.instance = this;
        }        
        return Logger.instance
    }
    

    log(message) {
        this.logs.push(message);
        console.log(`LOG: ${message}`);
    }

    printCount() {
        console.log(`${this.logs.length} logs printed.`);
    }
}

const logger = new Logger();
Object.freeze(logger);
export default Logger