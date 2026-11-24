/// <reference types="cypress" />

import Sign from '../support/sign';
// import testing from '../../test3';

describe('QA Automation Upskilling', () => {
  let randNum: number;

  beforeEach(() => {
    randNum = Math.floor(1000 + Math.random() * 9000);
  });

  it('Open test signature website', () => {
    Sign.openSig();
    Sign.navigateToSigInterface();
    Sign.drawSig();
  });
});