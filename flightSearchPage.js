class FlightSearchPage{
    get departureCityText(){
        return $("//input[@name='0-departcity']");
    }

    get arrivalCityText(){
        return $("//input[@name='0-arrivalcity']");
    }

    get calendar(){
        return $("//div[@class='zzPDhz _1Jqgld']")
    }

    get nextMonthLink(){
        return $("//div[@class='_3hsbax']//child::button[@class='_3CTB5G']")
    }

    SelectMonthYearDate(MonthYear,Date){
        return $("//div[text()='"+MonthYear+"']//ancestor::table[@class='aSgzfL']//descendant::button[text()='"+Date+"']");
    }

    get childCount(){
        return $("//div[text()='Children']/ancestor::div[@class='_1Di8FC']/descendant::button[@class='_2KpZ6l _34K0qG _37Ieie']")
    }

    get finalCount(){
        return $("//button[@class='aC49_F _14Me7y']");
    }

    get flightSearch(){
        return $("//button[@class='_2KpZ6l _1QYQF8 _3dESVI']")
    }

    async selectDepartureCity(depCity){
        await this.departureCityText.setValue(depCity)
        await browser.keys('Enter')
        await browser.pause(3000)
        await browser.keys('ArrowDown')
        await browser.keys('Enter')
        // await browser.pause(3000)
    }

    async selectArrivalCity(arrCity){
        await this.arrivalCityText.setValue(arrCity)
        await browser.pause(2000)
        await browser.keys('Enter')
        await browser.pause(2000)
        await browser.keys('ArrowDown')
        await browser.pause(2000)
        await browser.keys('Enter')
        // await browser.pause(3000)
    }

    async selectCalendar(){
        await this.calendar.click()
    }

    async selectDate(MonthYear, Date){
        while (true) {
            try {
                // await $("//div[text()='"+MonthYear+"']//ancestor::table[@class='aSgzfL']//descendant::button[text()='"+Date+"']").click()
                await this.SelectMonthYearDate(MonthYear,Date).click()
                await browser.pause(4000);
                break;
            } catch (error) {
               await this.nextMonthLink.click() 
            }
        }

    }

    async setChildrenCount(count){
        for(let i=1;i<=count;i++){
            await this.childCount.click();
        }
    }

    async setFinalTravellers(){
        await this.finalCount.click()
    }

    async clickFlightSearch(){
        await this.flightSearch.click();
    }

}

module.exports=new FlightSearchPage();