import Vue from 'vue';

//Directiva para cambiar el color con hover
Vue.directive('highlight', {
  bind(el, binding) {
    el.style.backgroundColor = binding.value.backgroundColor;
    el.style.color = binding.value.color;
    //Cambio de color al pasar el mouse por encima
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = binding.value.hoverColor;
      el.style.color = binding.value.hoverTextColor;
    });
  //Cambio de color al quitar el mouse
    el.addEventListener('mouseleave', () => {
      el.style.backgroundColor = binding.value.backgroundColor;
      el.style.color = binding.value.color;
    });
  }
});
