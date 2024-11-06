const errors = {
  "login" : {
    code: 401,
    mess: 'login failed'
  },
  "unauth" : {
    code: 401,
    mess: "unauthorized"
  },
  "email" : {
    code: 404,
    mess: "email-not-sent"
  }
}

const sucess = {
  code : 200,
  mess : 'ok'
}

export {
  sucess,
  errors
}
