function methods (argument) {
    function randomInt () {
        return Math.floor(Math.random() * argument.length);
    }

    function log (method) {
        console.log ('LOG:\n method name: ' + key + '\n' +
            'argument: ' + argument + '\n'+ 'method result: ' + method);
    };
    //var result;
    if (typeof (argument) == "string") {
        console.log ('Type of argument: ' + typeof(argument))
        var stringMethods = {
            indexOf: argument.indexOf ('s'),
            toUpperCase: argument.toUpperCase(),
            lastIndexOf: argument.lastIndexOf('h'),
            search: argument.search ('him'),
            slice: argument.slice (3,7),
            substring: argument.substring (5,15),
            substr: argument.substr (3, 6),
            replace : argument.replace (argument[0], '!REPLACED!'),
            concat: argument.concat (' ', 'CONCAT ADDED'),
            charAt: argument.charAt(randomInt()),
            charCodeAt: argument.charCodeAt (randomInt()),
            split: argument.split(' '),
        }
        for (key in stringMethods) {
            log (stringMethods[key])
        }
    } else if (typeof (argument) == "number"){
        console.log ('Type of argument: ' + typeof(argument))
        var numberMethods = {
            toString: argument.toString() + 'NowItsString',
            toExponential : argument.toExponential(6),
            toFixed : argument.toFixed(6),
            toPrecision: argument.toPrecision(3),
            Number: Number(argument),
            parseInt: parseInt(argument),
            parseFloat: parseFloat(argument),
            valueOf: argument.valueOf()
        }
        for (key in numberMethods) {
            log (numberMethods[key])
        }
        console.log ('number');
    } else if (typeof (argument) == "object") {
        //var newArray;
        console.log ('Type of argument: ' + typeof(argument))
        var arrayMethods = {
            toString: argument.toString() + 'NowItsString',
            join: argument.join('*'),
            pop: argument.pop(),
            push: argument.push ('trust'),
            shift: argument.shift(),
            unshift: argument.unshift('hi'),
            ChangingElement: argument[0] = 'Banana',
            length: argument.length,
            delete: delete argument[0],
            splice: argument.splice (2,0,'tree','potatoe'),
            sort: argument.sort(),
            reverse: argument.reverse(),
            slice:  newArray = argument.slice(3),
            valueOf: argument.valueOf()
        }
        for (key in arrayMethods) {
            log (arrayMethods[key])
        }
    } else {
        console.log ('out of scope')
    };
};

methods(['zcv','asd','string']);