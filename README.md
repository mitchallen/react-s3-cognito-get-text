@mitchallen/react-s3-cognito-get-text
==
Get a Cognito protected text file from an S3 bucket
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/react-s3-cognito-get-text">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/react-s3-cognito-get-text.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/react-s3-cognito-get-text">
    <img src="https://codecov.io/gh/mitchallen/react-s3-cognito-get-text/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-s3-cognito-get-text">
    <img src="http://img.shields.io/npm/dt/@mitchallen/react-s3-cognito-get-text.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-s3-cognito-get-text">
    <img src="http://img.shields.io/npm/v/@mitchallen/react-s3-cognito-get-text.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/react-s3-cognito-get-text">
    <img src="https://img.shields.io/github/license/mitchallen/react-s3-cognito-get-text.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/react-s3-cognito-get-text --save
  
* * *

## Usage

Here is an example of retrieving a Cognito secured JSON file from S3:

```
import S3CognitoGetText from '@mitchallen/react-s3-cognito-get-text';

export default async function S3GetJsonFile( params ) {
    return S3CognitoGetText( params )
    .then( data => JSON.parse(data) );
}
```

How to call the method above:

```
import AWS from "aws-sdk";
import authUser from "@mitchallen/react-cognito-auth-user";
const testJsonFile = 'cognito/private/demo.json'

S3GetJsonFile({ 
    AWS: AWS,
    authUser: authUser,
    bucket: BUCKET,
    file: testJsonFile, 
    userPoolId: USER_POOL_ID,
    clientId: APP_CLIENT_ID,
    region: REGION, 
    identyPoolId: IDENTITY_POOL_ID
})
.then((data) => {
    alert(JSON.stringify(data));
})
.catch(function(err) {
    alert(err);
});
```

* * *

### Securing an S3 Bucket for Cognito

For information on how to secure a bucket for Cognito access, see:
* [@mitchallen/react-s3-connect](https://www.npmjs.com/package/@mitchallen/react-s3-connect)
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/react-s3-cognito-get-text.git](https://bitbucket.org/mitchallen/react-s3-cognito-get-text.git)
* [github.com/mitchallen/react-s3-cognito-get-text.git](https://github.com/mitchallen/react-s3-cognito-get-text.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.2.0

* updated to version of s3 connector that passes AWS to authUser

#### Version 0.1.0 

* initial release

* * *