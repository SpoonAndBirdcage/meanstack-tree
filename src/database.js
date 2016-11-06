'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err) {
    if(err) {
        console.log('Failed to connect to MongoDB');
    } else {
        console.log('You are successfully connected to MongoDB');
    }
});