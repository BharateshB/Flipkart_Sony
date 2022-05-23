class webutil{
        async SelectElementFromDropDown(elementarray,matchText){
            let textarr=[]
        for ( const ele of elementarray) {
            let text=await ele.getText()
            await textarr.push(text)
            if(text==matchText){
                await ele.click()
                break;
            }
          await  console.log(text);
        }
      await  console.log(textarr);
     }

     async switchwindows(parentWindow){
        var windowHandles = await browser.getWindowHandles()

        for (const window of windowHandles) {
            await browser.switchToWindow(window)
     
            if (!(parentWindow == window)) {
                break
            }  
        }
     }

     async scrollWindow(){
        await browser.execute(async()=>{
            window.scrollBy(0,300)
        })
     }

     
    //  async scroll(from,to){
    //     await browser.execute(()=>{
    //         await window.scrollBy(from,to)
    //       })
    //  }

}



module.exports=new webutil()