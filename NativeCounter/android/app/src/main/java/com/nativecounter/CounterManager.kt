package com.nativecounter

import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class CounterManager : SimpleViewManager<CounterView>() {
    // 리액트 네이티브 컴포넌트의 이름을 결정하는 메서드
    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): CounterView {
        return CounterView(reactContext)
    }

    // 이벤트 연동
    override fun getExportedCustomBubblingEventTypeConstants(): MutableMap<String, Any> {
        val builder = MapBuilder.builder<String, Any>()
        return builder
            .put(
                // pressLeftButton 이벤트를 받으면 onPressLeftButton 호출
                "pressLeftButton", MapBuilder.of(
                    "phasedRegistrationNames", MapBuilder.of(
                        "bubbled", "onPressLeftButton"
                    )
                )

                // 위 내용은 사실상 다음 객체와 같다.
                // { pressLeftButton: { phasedRegistrationNames: bubbled: { onPressLeftButton } } }
            )
            .put(
                "pressRightButton", MapBuilder.of(
                    "phasedRegistrationNames",
                    MapBuilder.of("bubbled", "onPressRightButton")
                )
            )
            .build()
    }

    @ReactProp(name = "leftButtonText")
    fun setLeftButtonText(view: CounterView, text: String) {
        view.setLeftButtonText(text)
    }

    @ReactProp(name = "rightButtonText")
    fun setRightButtonText(view: CounterView, text: String) {
        view.setRightButtonText(text)
    }

    @ReactProp(name = "value")
    fun setValue(view: CounterView, value: Int) {
        view.setValue(value)
    }

    companion object {
        const val REACT_CLASS = "Counter"
    }
}