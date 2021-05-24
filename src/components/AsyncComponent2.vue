<script setup lang="jsx">
import { defineAsyncComponent } from "vue";

export default {
  // https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent
  components: {
    // 无配置项异步组件
    // AsyncFoo: defineAsyncComponent(() => import("@/components/Foo.vue")),
    // 有配置项异步组件
    AsyncFooWithOptions: defineAsyncComponent({
      loader: () => import("@/components/Foo.vue"),
      // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
      delay: 1000,
      // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
      // 默认值：Infinity（即永不超时，单位 ms）
      timeout: 5000,
      // 定义组件是否可挂起 | 默认值：true
      // suspensible: false,
      errorComponent: () => <div>err...</div>,
      loadingComponent: () => (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 2,
            width: "100%",
            height: "100vh",
            background: "blue",
          }}
        >
          loading...
        </div>
      ),
    }),
  },
  render() {
    return (
      <div>
        <h3>defineAsyncComponent异步组件的使用</h3>
        <AsyncFooWithOptions />
      </div>
    );
  },
};
</script>
