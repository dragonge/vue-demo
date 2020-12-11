import ElButton from './src/button';

/* istanbul ignore next */
ElButton.install = function(Vue) {
  Vue.component('el-button', ElButton);
};

export default ElButton;
