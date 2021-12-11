#import <React/RCTViewManager.h>


// 네이티브 컴포넌트를 리액트에 제공
// 클래스 이름인 "<Counter />" (Manager)로 컴포넌트 명이 결정됨
// props 연동은 여기서 진행
@interface RCT_EXTERN_MODULE(CounterManager, RCTViewManager)

// props명, 타입
RCT_EXPORT_VIEW_PROPERTY(value, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(leftButtonText, NSString)
RCT_EXPORT_VIEW_PROPERTY(rightButtonText, NSString)

RCT_EXPORT_VIEW_PROPERTY(onPressLeftButton, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPressRightButton, RCTDirectEventBlock)

@end
