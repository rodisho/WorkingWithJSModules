const sessionURL= 'sessions.json';

let sessionlist = [];

function getSessions(){
    return new Promise(function(resolve, reject){
      var oReq = new XMLHttpRequest();
      oReq.onload = function (e) {
        sessionlist = e.target.response;
        resolve(sessionliste);
      };
      oReq.open('GET', sessionURL , true);
      oReq.responseType = 'json';
      oReq.send();
    })
  }

  export {getSessions as default, sessionURL};
  export {sessionTemplate} from './template.js';