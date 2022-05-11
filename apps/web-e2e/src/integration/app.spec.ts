import { getIndexHeading, getPublicSharesHeading } from '../support/app.po';

describe('Web App', () => {
  it('should display index heading', () => {
    cy.visit('/');

    getIndexHeading().contains('Welcome To List App :)');
  });
  it('should display public shares heading', () => {
    cy.visit('/public/shares');

    getPublicSharesHeading().contains(
      'Enter The Access Key For A Shared List To View It'
    );
  });
});
