var some = function(){
  var app = new Vue({
    el: '#app',
    data: {
      title: "小明",
      receive: "",
      send: "",
      receiveAvatar: './avatar.png',
      sendAvatar: './avatar.png',
      messages: []
    },
    methods: {
      addReceive: function(){
        this.messages.push({type: 'receive', content: this.receive});
        this.receive = '';
      },
      addSend: function(){
        this.messages.push({type: 'send', content: this.send});
        this.send = '';
      },
      setReceiveAvatar: function(e){
        var files = e.target.files || e.dataTransfer.files;
        this.receiveAvatar = URL.createObjectURL(files[0]);
      },
      setSendAvatar: function(e){
        var files = e.target.files || e.dataTransfer.files;
        this.sendAvatar = URL.createObjectURL(files[0]);
      },
      reset: function(){
        this.title = '小明';
        this.messages = [];
        this.receive = this.send = '';
      },
      capture: function(){
        html2canvas(document.getElementById('wechat'), {
          onrendered: function(canvas) {
            document.getElementById("results").appendChild(canvas);
          },
          allowTaint: true
        });
      }
    }
  });
};

some();
