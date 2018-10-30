<template>
  <button :class="'nx-btn-' + type" :text="text" :type="type">{{text}}</button>
</template>
<script>
  export default{
    name: 'NxButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      text: {
        type: String,
        default: '按钮'
      }
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nx-btn-default {
    background-color: white;
    border-color: white;
    color: black;
  }

  .nx-btn-primary {
    background-color: #20A0FF;
    border-color: #20A0FF;
    color: white;
  }

  .nx-btn-success {
    background-color: #5daf34;
    border-color: #5daf34;
    color: white;
  }

  .nx-btn-warning {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: white;
  }

  .nx-btn-danger {
    background-color: #f78989;
    border-color: #f78989;
    color: white;
  }
</style>
