/// <reference types="cypress" />

import comp from '../support/test2';
// import testing from '../../test3';

describe('QA Automation Upskilling', () => {
  let randNum: number;

  // before(() => {

  // });

  beforeEach(() => {
    randNum = Math.floor(1000 + Math.random() * 9000);
  });

  context('Accessing the google home page', () => {
    it('Open google', () => {
      comp.openPage();
      // testing.
    });
  });
});