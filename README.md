### Playwright With JavaScript For BMI calculator Page

An example project demonstrating automation of playwright tests using page object design pattern framework.

#### Application Under Test

We are using https://practice.expandtesting.com/bmi as the Application Under Test. 

- URL: https://practice.expandtesting.com/bmi
- OS : Windows 10
- IDE : Visual Studio Code 

#### Scenarios

```sh
Scenario 1: Go to the website to verify that BMI calculator is present on the page

Scenario Description: User goes to the website and verifies all the elements on the BMI calculator
page

Testname: 
```

```sh
Scenario 2: Enter valid values to calculate BMI 

Scenario Description: User goes to the website and completes the calculation with valid values. This is a Happy path test scenario.

Testname: 
```

### Installation

1. Clone the repo using below URL

```sh
https://github.com/somawrk/test-assignment-main.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```
3. For first time installation run below command to download required browsers

```sh
npx playwright install
```

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.

#### Run tests

```sh
# Run all tests
npx playwright test

# Run a single test file
npx playwright test tests/bmi.spec.ts

# Run tests at a specific line
npx playwright test my-spec.ts:42

# Run tests by title
npx playwright test -g "add a todo item"

# Run tests in headed browsers
npx playwright test --headed

# Run tests for a specific project
npx playwright test --project=chromium

# Get help
npx playwright test --help
```

#### Playwright Test Report

```sh
# Open last HTML report run 
npx playwright show-report
```