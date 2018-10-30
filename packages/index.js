import NxButton from './components/button/index.js'


const components = {
  NxButton
};

const install = function (Vue, opts) {
  if (install.installed) return;

  Object.keys(components).forEach(function (component) {
    Vue.component(component, components[component]);
  })
};

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

// 输出default变量，用于全量引入
const Nx = Object.assign(components, {install});
export default Nx
// 输出各个组件，用于按需引入
export {
  NxButton
}

