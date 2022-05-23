class FlightSelectionPage{
    get flightBookLink(){
        return $("//div[@class='_-5f1wK']")
    }

    async selectFlight(){
        await this.flightBookLink.click()
    }
}

module.exports=new FlightSelectionPage()