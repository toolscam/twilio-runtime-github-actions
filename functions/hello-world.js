exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Simon!"
    }

    callback(null, result);
  };
