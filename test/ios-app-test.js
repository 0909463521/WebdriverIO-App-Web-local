describe('iOS App sample', () => {
    it('should Open 2 app', async () => {
    //Native App
    for( var i = 0 ; i < 5 ; i++)
    {
        let btnGet = await browser.$('//XCUIElementTypeButton[@name="Call GET"]');
        await btnGet.click();
        await browser.pause(3000);
        
    } 
    // await browser.closeApp();
    
    //Hybrid App
    await browser.installApp("https://kobiton-devvn.s3-ap-southeast-1.amazonaws.com/apps-test/CNApp/test_payload_hybrid.ipa")
    await browser.pause(3000);
    await browser.activateApp("org.reactjs.native.example.test-payload-hybrid");
    await browser.pause(3000);

   
    let edtText = await driver.$('//XCUIElementTypeOther[@name="Enter your URL here"]/XCUIElementTypeTextField')
    edtText.addValue('vnexpress.net')
    await browser.pause(3000);

    let btnGo = await driver.$('//XCUIElementTypeButton[@name="Go"]')
    btnGo.click()
    await browser.pause(4000);
    
    await browser.touchAction({
        action: 'tap',
        x: 50,
        y:100
    })
     
    await browser.pause(4000);

    })
  })
  