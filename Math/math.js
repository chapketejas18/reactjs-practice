import _ from 'lodash';

const add = (a,b) => {
    return _.sum([a, b]);
}

const substraction = (a,b) => {
    return _.subtract(a, b);
}

export {add, substraction};