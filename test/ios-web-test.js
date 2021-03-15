describe('iOS Web', () => {
    it('should Open 2 app', async () => {
        await browser.url('https://www.vnexpress.net');
        browser.pause(3000)
        // let ThoiSu =  await browser.$("//*[contains(text(),'Thời sự')]")
        // await ThoiSu.click();
        // browser.pause(3000)
       
        let windowSize = await browser.getWindowSize()
          //Starting y location set to 80% of the height (near bottom)
        let starty = (windowSize.height * 0.80);
        //Ending y location set to 20% of the height (near top)
        let endy =  (windowSize.height * 0.20);
        //x position set to mid-screen horizontally
        let startx =  windowSize.width / 2;
        
        let abc = await  browser.touchAction([
            { action: 'press', x: startx, y: starty },
            { action: 'moveTo', x: 80, y: endy },
            'release'
        ])
    })
  })
  