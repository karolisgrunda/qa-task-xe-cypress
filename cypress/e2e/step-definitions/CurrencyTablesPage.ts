import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { CurrencyTablesPage }  from '../pom';

Given('I am on a currency tables page', () => {
    CurrencyTablesPage.visit();
})

Given('Introduction text is visible', () => {
    CurrencyTablesPage.assertHeadingText('Historical rate tables');
    CurrencyTablesPage.assertIntroductionText('Build historic rate tables with your chosen base currency with XE Currency Tables. For commercial purposes, get an automated currency feed through the XE Currency Data API.');
})

When('I input currency {string} and date {string}', (currencyCode: string, date: string) => {
    CurrencyTablesPage.selectCurrecy(currencyCode);
    CurrencyTablesPage.selectDate(date);
});

When('I confirm form', () => {
    CurrencyTablesPage.submit();
});

Then('I see {string} which name is {string} unit per {string} and per unit {string}', (currency:string, currencyName:string, unitsPer:string, perUnit:string) => {
    CurrencyTablesPage.assertCurrencyTableEntry(currency, currencyName, unitsPer, perUnit);
})

