<script lang="jsx" setup>
import { reactive, defineComponent } from "vue";

const state = reactive({ num: 0 });

// https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
export default defineComponent({
  render() {
    return (
      <div>
        num : {state.num}
        <button onClick={() => state.num++}>btn</button>
      </div>
    );
  },
});
</script>
