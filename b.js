import logger from './logger.js';

const logger = new.logger();

function secondRun( {
    logger.printCount();
    logger.log('Loren ipsum dolor sit amen...');
    logger.printCount();
})

export {
    secondRun
};