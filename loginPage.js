class Loginpage{
    get closeBtn(){
        return $("//button[text()='✕']")
    }
    
    get userIDText(){
        return $("//input[@class='_2IX_2- VJZDxU']")
    }

    get passwordText(){
        return $("//input[@class='_2IX_2- _3mctLh VJZDxU']")
    }

    get submitBtn(){
        return $("//button[@class='_2KpZ6l _2HKlqd _3AWRsL']")
    }

    async login(email, password){
        await this.userIDText.setValue(email)
        await this.passwordText.setValue(password)
        await this.submitBtn.click()
    }

    async closeLogin(){
        return await this.closeBtn.click()
    }
}
module.exports=new Loginpage()