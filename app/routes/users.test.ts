
// TODO: Not working

import express = require('express');
import proxyquire = require('proxyquire');

var router = proxyquire<express.Router>('./users', {
  '../model/userModel': {
    getUser: function(id) {
      console.log('id = ', id);
    }
  }
});
