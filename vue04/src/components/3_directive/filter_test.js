import Vue from "vue/types/vue";

Vue.directive('filter',{
  inserted (el,binding) {
    console.log(binding);
    const v = binding.value;
    const arg = binding.arg;
    const mod = Object.keys(binding.modifiers)[0];
    // console.log(m);
    let arr = [];
    for(let i = 0; i < v.length; i++) {
      if(typeof v[i] == arg) {
        arr.push(v[i]);
      }
    }
    if(mod == 'asc') {
      for(let j = 0; j < arr.length - 1; j++) {
        for(let k = 0; k < arr.length - 1 - j; k++) {
          if(arr[k] > arr[k + 1]) {
            let temp = arr[k];
            arr[k] = arr[k+1];
            arr[k+1] = temp;
          }
        }
      }
      console.log(arr);
    } else if(mod == 'desc') {
      for(let m = 0; m < arr.length - 1; m++) {
        for(let n = 0; n < arr.length - 1 - m; n++) {
          if(arr[n] < arr[n + 1]) {
            let temp = arr[n];
            arr[n] = arr[n+1];
            arr[n+1] = temp;
          }
        }
      }
      console.log(arr);
    }
  }
})



{
  Vue.directive('filter', {
    inserted(el, binding) {
      const v = binding.value;
      const arg = binding.arg;
      const mod = Object.keys(binding.modifiers)[0];
      let arr = [];
      for (let i = 0; i < v.length; i++) {
        if (typeof v[i] == arg) {
          arr.push(v[i]);
        }
      }
      if (mod == 'asc'){
        for (let j = 0; j < arr.length -1; j++) {
          for (let k = 0; k < arr.length-1 -j; k++) {
            if (arr[k] > arr[k+1]) {
              let temp = arr[k];
              arr[k] = arr[k+1];
              arr[k+1] = temp;
            }
          }
        }
      }
    }
  })
}
