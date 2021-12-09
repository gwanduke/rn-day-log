import Foundation
import UIKit

@objc(BrightnessModule)
class BrightnessModule : NSObject {
  
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return [
      "STRING_VALUE": "Hello World",
      "NUMBER_VALUE": 15
    ]
  }
  
  @objc
  func getBrightness(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    print("Hi")

    resolve(UIScreen.main.brightness)
  }
  
  // TODO: 정상 동작 하지 않는듯하다.
  @objc
  func setBrightness(_ brightness : CGFloat) {
    print("Setting brightness to \(brightness)")
    DispatchQueue.main.async {
      UIScreen.main.brightness = brightness
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
}
