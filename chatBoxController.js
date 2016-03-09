(function () {

  angular.module('chatBoxControllers',[])
    .controller('chatController',chatController)

    function chatController(){
      var chatCTRL = this
      chatCTRL.chatArray = []

      chatCTRL.inputText = 'Begin typing here'
      chatCTRL.userName = 'Anonynomous1'

      chatCTRL.submitMessage = function(){
        var msg = {
          text : chatCTRL.inputText,
          username : chatCTRL.userName,
            }
            chatCTRL.chatArray.push(msg)
      }
    }

      // function Anonynomous1(){
      //should this be inside chat controoler or separate?
      // }

})();
