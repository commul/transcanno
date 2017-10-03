require "test_helper"
 
class AddChromeDriverTest < ActionDispatch::IntegrationTest
  def test_sanity
    ActiveSupport::TestCase.browsers.each do |browser|
     driver = Selenium::WebDriver.for browser
     driver.navigate.to "http://google.com"
 
     element = driver.find_element(:name, 'q')
     element.send_keys "Hello WebDriver!"
     element.submit
 
     puts driver.title
 
     sleep 2
     # quit driver, close browser window
     driver.quit
    end
  end
end