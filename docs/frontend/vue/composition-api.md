# 组合式API

## ref

通过ref包装的值可以变成响应式

常见使用
```js
import { ref, Ref } from 'vue'

let message = ref<string>('蝈蝈')
let message:Ref<string> = ref('蝈蝈')

const changeMsg = () => {
  message.value = '小郭'
}
```

## isRef
判断是不是一个Ref对象

## shallowRef
只对.value本身追踪

## triggerRef
强制更新响应数据

## customRef
自定义Ref

```vue
<script setup lang="ts">
import { Ref, shallowRef, triggerRef, customRef } from 'vue'
 
function Myref<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal: T) {
        console.log('set');
        value = newVal
        trigger()
      }
    }
  })
}
 
let message = Myref('小满')
const changeMsg = () => {
  message.value = '大满'
  // triggerRef(message)
}
</script> 
```

