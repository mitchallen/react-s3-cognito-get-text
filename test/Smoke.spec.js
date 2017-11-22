import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chai from 'chai';

const expect = Chai.expect;

import S3CognitoGetText from '../src/index';

describe('S3CognitoGetText', () => {

  const renderer = new ShallowRenderer();
  renderer.render(<S3CognitoGetText />);
  const result = renderer.getRenderOutput();


  it('root element should be a div', () => {
    // expect(wrapper.type()).to.eql('div');
    expect(result.type).to.eql('div');
  });

});