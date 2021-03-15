describe('iOS App sample', () => {
    it('should Open 2 app', async () => {
   
    let   wiki = await browser.$('//android.widget.TextView[@content-desc="a-WebView3-Wikipedia"]')
    await wiki.click()
    await browser.pause(5000) 
    let   edtText = await browser.$("/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText")
    await edtText.addValue('https://vnexpress.net/')
    await browser.pause(5000) 
    let   btnChrome = await browser.$('//android.widget.Button[@content-desc="Load in Chrome custom tab"]')
    await btnChrome.click()
    await browser.pause(5000)
    let   btnThoiSu = await browser.$('//android.view.View[@content-desc="Thời sự"]/android.widget.TextView')
    await btnThoiSu.click()
    await browser.pause(5000)


    })
  })
  