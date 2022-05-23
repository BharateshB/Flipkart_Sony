class HomePage{
    get flightBookingLink(){
        return $("//div[@class='xtXmba' and text()='Travel']")
    }

    async ClickOnFlightBookingLink(){
        await this.flightBookingLink.click()
    }
}
module.exports=new HomePage();