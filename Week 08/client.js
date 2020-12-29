const net = require("net");
const parser = require("./parser.js")
class ResponseParser {
  constructor() {}
  receive(str) {
    for (var i = 0; i < str.length; i++) {
      this.receiveChar(str.charAt(i));
    }
  }
  receiveChar(char) {

  }
}
class Request{
  constructor(option){
    this.method = option.method || 'GET';
    this.path = option.path || '/';
    this.host = option.host || '127.0.0.1';
    this.port = option.port || '80';
    this.headers = option.headers || {};
    this.body = option.body || {};
    if (!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/json';
    }
    //根据Content-Type对body内容进行处理
    if (this.headers['Content-Type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body);
    }
    else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body)
          .map(key => `${key}=${encodeURIComponent(this.body[key])}`)
          .join('&');
    }
    this.headers['Content-Length'] = this.bodyText.length;
  }

  send(connection) {
    return new Promise((resolve,reject) => {
      const parser = new ResponseParser();
      if(connection){
        connect.write(this.toString())
      }else{
        connection = net.createConnection({
          host:this.host,
          port:this.port
        },()=>{
          connection.write(this.toString())
        })
      }
      connection.on('data',(data)=>{
        // console.log('data:',data.toString());
        parser.receive(data.toString());
        if(parser.isFinishid){
          resolve(parser.response);
          connection.end();
        }
        resolve(data.toString());
      });
      connection.on('error',(err)=>{
        reject(err);
        connection.end();
      });
    })
  }
  toString(){
    return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}:${this.headers[key]}`).join(`\r\n`)}\r
\r
${this.bodyText}`
  }
}
void async function () {
  let request = new Request({
    method: 'GET',
    host: '127.0.0.1',
    port: '8088',
    headers: {
      "Content-Type": 'application/json',
      ['X-Foo2']: 'custom'
    },
    body: {
      name: 'zhub'
    }
  })
  // console.log("request",request);
  let response = await request.send();
  // console.log("response", response);
  let dom = parser.parseHTML(response.body);//实际上应该异步分段处理
}();
