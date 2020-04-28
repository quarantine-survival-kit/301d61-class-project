'use strict';

exports.errorHandler = function(error, request, response, next) {
  console.log(error);
  response.render('./pages/error', { error: 'Sorry something wrong' });
};

