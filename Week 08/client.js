const { resolve } = require("path");

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
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
    }
    this.headers['Content-Length'] = this.bodyText.length;
  }

  send() {
    return new Promise((resolve,reject) => {
      resolve();
    })
  }
}
void async function () {
  let request = new Request({
    method: 'GET',
    host: '127.01.01.01',
    port: '80',
    headers: {
      "Content-Type": 'application/json'
    },
    body: {
      name: 'zhub'
    }
  })
  console.log(request);
  let response = await request.send();
  console.log(response);
}();