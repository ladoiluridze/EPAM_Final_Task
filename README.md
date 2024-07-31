# SauceDemo Login Tests

## Task Description

### UC-1: Test Login form with empty credentials:
1. Type any credentials into "Username" and "Password" fields.
2. Clear the inputs.
3. Hit the "Login" button.
4. Check the error messages: "Username is required".

### UC-2: Test Login form with credentials by passing Username:
1. Type any credentials in username.
2. Enter password.
3. Clear the "Password" input.
4. Hit the "Login" button.
5. Check the error messages: "Password is required".

### UC-3: Test Login form with credentials by passing Username & Password:
1. Type credentials in username which are under Accepted username are sections.
2. Enter password as secret sauce.
3. Click on Login and validate the title “Swag Labs” in the dashboard.

## Setup and Run Tests

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run tests using `npm run wdio`.

## Additional Options

- **Test Automation tool**: WebDriverIO
- **Browsers**: Firefox, Chrome
- **Locators**: XPath
- **Patterns**: Page Object
- **Assertions**: From the selected framework
- **Loggers**: From the selected framework