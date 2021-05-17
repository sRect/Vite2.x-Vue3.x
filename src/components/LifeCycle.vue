<script lang="jsx">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
} from "vue";

export default defineComponent({
  setup() {
    console.log("setup")
    onBeforeMount(() => {
      console.log("onBeforeMount")
    });
    onMounted(() => {
      console.log("onMounted")
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    });
    onUpdated(() => {
      console.log("onUpdated")
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
    });
    onUnmounted(() => {
      console.log("onUnmounted")
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured")
    });
    onRenderTracked(() => {
      console.log("onRenderTracked")
    });
  },
  render(h) {
    return <div>LifeCycle</div>
  },
})
</script>
