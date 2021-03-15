const {config} = require('../wdio.conf')

config.specs = ['./test/ios-web-test.js'];

config.capabilities =  [
{
  sessionName:        'Automation test session',
  sessionDescription: '',
  deviceOrientation:  'portrait',
  noReset:            true,
  fullReset:          false,
  captureScreenshots: true,
  browserName:        'chrome',
  // The given group is used for finding devices and the created session will be visible for all members within the group.
  groupId:            592, // Group: Group 2
  deviceGroup:        'ORGANIZATION',
  // For deviceName, platformVersion Kobiton supports wildcard
  // character *, with 3 formats: *text, text* and *text*
  // If there is no *, Kobiton will match the exact text provided
  deviceName:         'Galaxy Note9',
  // The tag is used for finding devices and the user can input only one tag. 
  // For example, the data value will be inputted: tagName="TagName1"
  tagName:            '',
  udid: '2708b124ad217ece',
  platformVersion:    '10',
  platformName:       'Android'
      
}
   
    
  ];

  exports.config = config