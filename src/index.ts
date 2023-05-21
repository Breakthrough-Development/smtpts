// smtpjs.service.ts
export interface EmailPayload {
  nocache?: number;
  Action?: string;
  [key: string]: any;
}

export const Email = {
  send: (payload: EmailPayload) => {
    return new Promise<string>((resolve, reject) => {
      payload.nocache = Math.floor(1e6 * Math.random() + 1);
      payload.Action = 'Send';
      const payloadJson = JSON.stringify(payload);
      Email.ajaxPost('https://smtpjs.com/v3/smtpjs.aspx?', payloadJson, resolve);
    });
  },

  ajaxPost: (url: string, payload: string, callback: (response: string) => void) => {
    const request = Email.createCORSRequest('POST', url);
    if (request) {
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      request.onload = function () {
        const response = request.responseText;
        callback && callback(response);
      };
      request.send(payload);
    }
  },

  createCORSRequest: (method: string, url: string): XMLHttpRequest | null => {
    const request = new XMLHttpRequest();
    if ('withCredentials' in request) {
      request.open(method, url, true);
    } else {
      return null;
    }
    return request;
  },
};
