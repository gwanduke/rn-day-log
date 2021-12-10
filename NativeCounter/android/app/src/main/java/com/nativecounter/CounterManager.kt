package com.nativecounter

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class CounterManager : SimpleViewManager<CounterView>() {
    // 리액트 네이티브 컴포넌트의 이름을 결정하는 메서드
    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): CounterView {
        return CounterView(reactContext)
    }

    companion object {
        const val REACT_CLASS = "Counter"
    }
}