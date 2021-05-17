<template>
  <div>
    <h3>Composition api</h3>
    <p>第{{ year }}年</p>
    <p>double year ：{{doubleYear}}</p>
    <p>姓名： {{ nickname }}</p>
    <p>年龄： {{ age }}</p>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  watch,
  watchEffect,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  setup() {
    let year = ref(0);
    const user = reactive({
      nickname: "xiaofang",
      age: 18,
      gender: "女",
    });

    const doubleYear = computed(() => year.value * 2)

    const obj = reactive({
      age: 18,
      a: {
        b: {
          c: 1,
        },
      },
    });

    setInterval(() => {
      year.value++;
      user.age++;
    }, 2000);

    // // 侦听 reactive 定义的数据
    // watch(
    //   () => user.age,
    //   (currentVal, oldVal) => {
    //     console.log(`新值： ${currentVal}, 旧值：${oldVal}`)
    //   }
    // );

    // // 侦听 ref 定义的数据
    // watch(
    //   year,
    //   (currentVal, oldVal) => {
    //     console.log(`新值： ${currentVal}, 旧值：${oldVal}`)
    //   }
    // );

    // // 合并监听多个数据
    // watch([() => user.age, year], ([newAge, newYear], [oldAge, oldYear]) => {
    //   console.log(`year 新值：${newYear}，year 旧值：${oldYear} || age 新值：${newAge}，age 旧值：${oldAge}  `)
    // });

    // 监听复杂对象
    const stopWatchObj = watch(
      () => obj.a,
      (newVal, oldVal) => {
        console.log("新值", newVal, "旧值：", oldVal);
      },
      {
        deep: true, // 深度监听
        immediate: true, // 立即进行监听
      }
    );

    watchEffect(() => {
      console.log("watchEffect===>")
      console.log(user);
      console.log(year);
    });

    onMounted(() => {
      setTimeout(() => {
        obj.a.b.c = 100;
      }, 1500);
    });

    // 组件卸载之前，停止监听数据
    onBeforeUnmount(() => {
      stopWatchObj();
    });

    return {
      year,
      doubleYear,
      // user
      ...toRefs(user),
    };
  },
});
</script>
