;(function () {
  angular.module('chatBoxControllers', [])
    .controller('chatController', chatController)

  function chatController () {
    var chatCTRL = this
    chatCTRL.chatArray = [{username: "Admin", wrote: "Welcome to the 90's"}]

    chatCTRL.inputText = 'Begin typing here'
    chatCTRL.userName = 'Anonynomous1'

    chatCTRL.submitMessage = function () {
      var msg = {
        username: chatCTRL.userName,
        wrote: chatCTRL.inputText,
      }
      chatCTRL.chatArray.push(msg)
    }
  }

  // function Anonynomous1(){
  // should this be inside chat controoler or separate?
  // }

})()
