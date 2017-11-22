/*
    Module: @mitchallen/react-s3-cognito-get-text
    Author: Mitch Allen
*/

import S3Connect from '@mitchallen/react-s3-connect';

export default async function S3CognitoGetText( params ) {

    const s3 = await S3Connect( params );

    let { file, bucket } = params;
          
    return s3.getObject({
        Bucket: bucket,
        Key: file
    })
    .promise()
    .then( (data) => data.Body.toString('utf-8') );
}
