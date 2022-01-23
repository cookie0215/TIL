import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  state = {
    loading: false,
  }
  render() {
    return (
      <button
        onClick={this.startLoading}
        // 버튼을 클릭하지 않았을 때 기본 상태는 button으로 클래스명이 되도록하고, 클릭 했을때는 button클래스 + loading 클래스명이 추가되도록 해야한다! 
        // 그렇기 때문에 삼항 연산자 사용해서 로직 처리
        // 클래스명을 동시에 두개 붙일 수 있도록 만드려면 `` (백틱을 사용해서 표현해줘야 한다.)
        className={
          this.state.loading
            ? `${styles['button']} ${styles['loading']}`
            : styles['button']
        }
        {...this.props}
      ></button>
    )
  }

  // 버튼이 클릭되면 loading이 true값으로 상태 변경
  startLoading = () => {
    this.setState({
      loading: true,
    });

    // 1초 후에 다시 loading을 false값으로 변경
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 1000);
  }
}

export default Button;