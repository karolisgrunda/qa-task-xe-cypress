import * as Common from "./common";

class CurrencyTablesPage {
    get getHeadingText() {
        return cy.get('h1');
    }

    get getIntroductionText() {
        return cy.get('p');
    }

    get getCurrencySearchField() {
        return cy.get('input[aria-describedby="currency-current-selection"]');
    }

    get getCurrectSearchList() {
        return cy.get('ul[id="currency-listbox"]');
    }

    get getCurrectSearchListItem() {
        return cy.get('li');
    }

    get getDateField() {
        return cy.get('input[placeholder="YYYY-M-D"]');
    }

    get getFormSubmitButton() {
        return cy.get('form > button[type="submit"]');
    }

    get getTableSection() {
        return cy.get('[id="table-section"]');
    }

    get getTableEntryCurrencyValue() {
        return cy.get('table > tbody tr > th > a');
    }

    get getTableEntryNameValue() {
        return cy.get('td').eq(0);
    }

    get getTableEntryUnitsPerValue() {
        return cy.get('td').eq(1);
    }

    get getTableEntryPerUnitValue() {
        return cy.get('td').eq(2);
    }


    visit() {
        cy.setCookie('xeConsentState', '{%22performance%22:true%2C%22marketing%22:true%2C%22compliance%22:false}'); // Remove cookies modal

        cy.visit('/currencytables');
    }

    /**
     * Select currency
     * @param {string} currecyCode - ex. EUR
     */
    selectCurrecy(currecyCode:string) {
        this.getCurrencySearchField.should('be.visible').click();
        this.getCurrectSearchList.should('be.visible').within(() => {
            this.getCurrectSearchListItem.contains(currecyCode).click();
        })
    }

    /**
     * Select day
     * @param {string} date - YYYY-MM-DD
     */
    selectDate(date:string) {
        this.getDateField.should('be.visible').click();

        Common.Calendar.selectDayByDate(date);
        Common.Calendar.getCalendarModal.should("not.exist");
    }

    submit() {
        this,this.getFormSubmitButton.should('be.visible').click();
    }

    assertHeadingText(headingText:string) {
        this.getHeadingText.should('be.visible').and('contain', headingText);
    }

    assertIntroductionText(introductionText:string) {
        this.getIntroductionText.should('be.visible').and('contain', introductionText);
    }

    assertCurrencyTableEntry(currency:string, currencyName:string, unitsPer:string, perUnit:string) {
        this.getTableSection.should('be.visible').within(() => {
            this.getTableEntryCurrencyValue.contains(currency).parent().parent().within(() => {
                this.getTableEntryNameValue.should('contain', currencyName);
                this.getTableEntryUnitsPerValue.should('contain', unitsPer);
                this.getTableEntryPerUnitValue.should('contain', perUnit);
            })
        })
    }
}

export default new CurrencyTablesPage