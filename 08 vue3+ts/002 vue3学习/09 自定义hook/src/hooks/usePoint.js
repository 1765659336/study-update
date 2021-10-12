import { onBeforeUnmount, reactive, onMounted } from "vue";
export default function() {
  let Point = reactive({
    x: 0,
    y: 0
  });
  function PointFn(event) {
    Point.x = event.pageX;
    Point.y = event.pageY;
  }
  onBeforeUnmount(() => {
    window.removeEventListener("click", PointFn);
  });
  onMounted(() => {
    window.addEventListener("click", PointFn);
  });
  return Point;
}
