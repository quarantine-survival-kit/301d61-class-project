'use strict';

exports.errorHandler = function(error, request, response, next) {
  console.log(error);
  response.render('./error', { error: 'Sorry something wrong' });
};

