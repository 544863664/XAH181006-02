<template>
    <div class="my-slot">
      <h1>我是提示信息</h1>
      <slot name="message">
        <!--slot中的内容会在父组件调用子组件时，未设置slot部分时展示-->
        <h3>我是默认内容</h3>
      </slot>
      <!--一个子组件中可以存在多个插槽入口-->
      <slot name="btns">
        <div>
          <Button>取消</Button>
          <Button>确定</Button>
        </div>
      </slot>

    </div>
</template>

<script>
    export default {
        name: "MySlot"
    }
</script>

<style scoped>

</style>
