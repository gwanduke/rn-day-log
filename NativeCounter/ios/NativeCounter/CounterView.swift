import UIKit

class CounterView: UIView {
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    setupView()
  }
  
  private func setupView() {
    self.addSubview(valueLabel)
    self.addSubview(buttonsView)
    
    buttonsView.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 8)
      .isActive = true
    buttonsView.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -8)
      .isActive = true
    buttonsView.heightAnchor.constraint(equalToConstant: 48)
      .isActive = true
    buttonsView.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -8)
      .isActive = true
    
    buttonsView.addArrangedSubview(leftButton)
    buttonsView.addArrangedSubview(rightButton)
  }
  
  let valueLabel: UILabel = {
    let label = UILabel()
    label.text = "0"
    label.textAlignment = .center
    label.font = label.font.withSize(36)
    
    // 화면을 꽉 채우기
    label.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    return label
  }()
  
  let buttonsView: UIStackView = {
    let view = UIStackView()
    view.axis = .horizontal
    view.distribution = .fillEqually
    view.spacing = 0
    view.alignment = .fill
    view.translatesAutoresizingMaskIntoConstraints = false
    
    return view
  }()
  
  let leftButton: UIButton = {
    let button = UIButton()
    button.setTitleColor(.black, for: .normal)
    button.setTitleColor(.gray, for: .highlighted)
    button.setTitle("Button", for: .normal)
    
    return button
  }()
  
  let rightButton: UIButton = {
    let button = UIButton()
    button.setTitleColor(.black, for: .normal)
    button.setTitleColor(.gray, for: .highlighted)
    button.setTitle("Button", for: .normal)
    
    return button
  }()
}
