package com.nativecounter

import android.view.LayoutInflater
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.nativecounter.databinding.CounterViewBinding

// 네이티브의 카운터 뷰 제
class CounterView(val context: ReactContext) : FrameLayout(context) {
    private val binding: CounterViewBinding

    fun setLeftButtonText(text: String) {
        binding.button.text = text
    }

    fun setRightButtonText(text: String) {
        binding.button2.text = text
    }

    fun setValue(value: Int) {
        binding.textView.text = value.toString()
    }

    // 각 버튼 클릭시 이벤트 발생하도록 처리
    private fun setupEvents() {
        val eventEmitter = context.getJSModule(RCTEventEmitter::class.java)
        binding.button.setOnClickListener {
            eventEmitter.receiveEvent(id, "pressLeftButton", null)
        }
        binding.button2.setOnClickListener {
            eventEmitter.receiveEvent(id, "pressRightButton", null)
        }
    }

    init {
        // val view = View.inflate(context, R.layout.counter_view, this)
        // view.findViewById<TextView>(R.id.textView).text = "10"

        // 위는 구식 방법, 아래 방법을 사용하면 뷰 타입(TextView)을 지정해주지 않아도 되므로 편리
        // 대신 gradle에 다음 설정을 해주어야함
        //
        // buildFeatures {
        //     viewBinding = true
        // }

        var inflater = LayoutInflater.from(context)
        binding = CounterViewBinding.inflate(inflater, this, true)

        // 초기화시 이벤트 등록
        this.setupEvents()
    }
}