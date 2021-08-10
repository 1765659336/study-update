<template>
  <div>
    <div>
      <!-- query参数 -->
      <!-- {{$route.query.id}}-{{$route.query.title}} -->
      <!-- params参数 -->
      <!-- {{$route.params.id}}-{{$route.params.title}} -->
      {{id}}-{{title}}
    </div>
    <!-- <div>{{a}}--{{b}}</div> -->
  </div>
</template>
<script>
export default {
  // props: ["a", "b"]
  props: ['id','title']
};
</script>
