    const validCredentials = {
      username: 'standard_user',
      password: 'secret_sauce'
    }
    const invalidCredentials = {
      username: 'test',
      password: 'test'
    }
    const errorMessages = {
      emptyUsernamePassword: 'Epic sadface: Username and password do not match any user in this service',
      emptyPassword: 'Epic sadface: Username and password do not match any user in this service'
    }
    const pageTitle = { title: "Swag Labs"}

    module.exports = {validCredentials, invalidCredentials, errorMessages, pageTitle}
  