const EventEmitter=require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        //raise an event
        this.emit('MessageLogged',{id:1,url:'https'});
    }
}


module.exports = Logger;

