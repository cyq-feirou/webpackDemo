import './style.css';
// import zilei from './zilei.png';
function component() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们已经存在的 div 中。
    // const myIcon = new Image();
    // myIcon.src = zilei;

    // element.appendChild(myIcon);
    return element;
  }
  
  document.body.appendChild(component());
  