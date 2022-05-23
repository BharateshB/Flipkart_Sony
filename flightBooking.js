let data=require('../../data/commonData.json')
let FKloginpage=require('../../pageobjects/flipkart/loginPage')
let Fkhomepage=require('../../pageobjects/flipkart/homePage')
let webUtils=require('../../../genericUtility/webutility')
let flightSearch=require('../../pageobjects/flipkart/flightSearchPage')
let flightSelect=require('../../pageobjects/flipkart/flightselectionPage')
const { setChildrenCount } = require('../../pageobjects/flipkart/flightSearchPage')
describe('FK_calendar', () => {
    it('TC_cal', async() => {
        
        // let montharr=['January','February','March','April','May','June','July','August','September','October','November','December']
        // let d=new Date;
        //let date=d.getDate()
        // let year=d.getFullYear()
        // let date="25"
        // let month=montharr[6]
        // let year ="2022"
        // await FKloginpage.login(data.username, data.password)
        await FKloginpage.closeLogin();
        
        await Fkhomepage.ClickOnFlightBookingLink();
        await browser.pause(2000)
        await webUtils.scrollWindow();

        let monthYear=data.month+" "+data.year;
        let date=data.date;
       let departCity= data.departureCity;
      
       let arrivCity=data.arrivalCity;
       let childrenCount=data.childrenCount;
       console.log("========================================================++++++++++"+date+" "+monthYear+" "+" "+departCity+" "+arrivCity+" "+childrenCount);
       
        await browser.pause(3000)

        // let monthYear=month+" "+year
        // console.log("present date is :"+date+"/"+month+"/"+year);
        // await browser.url("https://www.flipkart.com/travel/flights?otracker=nmenu_Flights")
        // await browser.execute(async()=>{
        //     window.scrollBy(0,200)
        // })

        await flightSearch.selectDepartureCity(departCity);
        // await $("//input[@name='0-departcity']").setValue("Bangalore, BLR - Kempegowda International Airport, India")
        // await $("//input[@name='0-departcity']").setValue("Bang")

        // await $("//input[@name='0-departcity']").setValue(data.departureCity)
        // await browser.keys('Enter')
        // await browser.pause(5000)

        // let dep=await $("//input[@name='0-departcity']//ancestor::div[@class='GTbXbG']//descendant::div[@class='_1fa_Yn HQlQNF _18Y7Fu']/descendant::div[@class='_3uA4ax']");
        // console.log("search from where+============================+++++++++++++++++++++"+dep.getText());
        // await dep.moveTo()

        // await browser.keys('ArrowDown')
        // await browser.keys('Enter')
        // await browser.pause(3000)

        await flightSearch.selectArrivalCity(arrivCity)
        // await $("//input[@name='0-arrivalcity']").setValue("Mumbai, BOM - Chatrapati Shivaji Airport, India")
       
        // await $("//input[@name='0-arrivalcity']").setValue(data.arrivalCity)
        // await browser.keys('Enter')
        // await browser.pause(3000)
        // await browser.keys('ArrowDown')
        // await browser.keys('Enter')
        // await browser.pause(3000)
        
        // await $("//div[@class='zzPDhz _1Jqgld']").click()
        // await browser.pause(3000)
       
        // let next=$("//div[@class='_3hsbax']//child::button[@class='_3CTB5G']")
        await flightSearch.selectCalendar();

        await flightSearch.selectDate(monthYear,date);


        // while (true) {
        //     try {
        //         await $("//div[text()='"+MonthYear+"']//ancestor::table[@class='aSgzfL']//descendant::button[text()='"+date+"']").click()
        //         await browser.pause(4000);
        //         break;
        //     } catch (error) {
        //        await next.click() 
        //     }
        // }
        // await $("//button[@class='_2KpZ6l _34K0qG _37Ieie']").click();
        await flightSearch.setChildrenCount(childrenCount)
        
        await browser.pause(3000)
        //button[@class='aC49_F _14Me7y']

        await flightSearch.setFinalTravellers()
        // await $("//button[@class='_2KpZ6l _1QYQF8 _3dESVI']").click()
        await browser.pause(3000)
        
        // await $("//div[@class='_-5f1wK']").click()
        await flightSearch.clickFlightSearch()
        await browser.pause(4000)

    });
});