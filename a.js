import logger from './logger.js';

const logger = new.logger();

function firstRun( {
    logger.printCount();
    logger.log('Hello World');
    logger.printCount();
})

export {
    firstRun
};