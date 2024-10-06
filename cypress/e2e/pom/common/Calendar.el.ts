class Calendar {
    get getCalendarModal() {
        return cy.get('[class="DayPickerInput-Overlay"]')
    }

    get getCalendarModalCaption() {
        return cy.get('[class="DayPicker-Caption"]')
    }
    
    get getCalendarMonthSelect() {
        return cy.get('[name="month"]')
    }
    
    get getCalendarYearSelect() {
        return cy.get('[name="year"]')
    }
    
    get getCalendarDayButton() {
        return cy.get('[class="DayPicker-Day"]')
    }

     /**
     * Select day
     * @param {string} date - YYYY-MM-DD
     */
    selectDayByDate(date: string) {  
        const dateArr = date.split('-');
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
        
        this.getCalendarModal.should('be.visible').within(() => {
            this.getCalendarYearSelect.should('be.visible').select(dateArr[0])
        })

        this.getCalendarModal.should('be.visible').within(() => {
            let monthIndex = Number(dateArr[1].replace('0', '')) - 1;

            this.getCalendarMonthSelect.should('be.visible').select(months[monthIndex])
        })
        this.getCalendarModal.should('be.visible').within(() => {
            let dayIndex = Number(dateArr[2].replace('0', ''));

            this.getCalendarDayButton.contains(dayIndex).should('be.visible').click();
        })
    }

}

export default new Calendar