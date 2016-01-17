function getShortMessages(messages) {
      // SOLUTION GOES HERE
      function isShortEnough(messages) {
        return messages.message.length < 50;
      }
      
      var shortMsgObj = messages.filter(isShortEnough, messages);
      //console.log(shortMsgObj);
      var shortMsgOnly = shortMsgObj.map(function(obj) {
        return obj.message;
      });
      console.log(shortMsgOnly);
      return shortMsgOnly;
    }
    
    module.exports = getShortMessages