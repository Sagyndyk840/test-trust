<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

interface IBaseInputProps {
  type?: InputHTMLAttributes['type']
  placeholder?: string
  disabled?: boolean
  label?: string
  fieldName?: string
}

const model = defineModel<string>({
  required: false,
  default: '',
})

const props = withDefaults(defineProps<IBaseInputProps>(), {
  type: 'text',
})

const emit = defineEmits<{
  (e: 'blur', field?: string): void
}>()

const onBlur = () => {
  emit('blur')
}

const handleInput = (e: Event) => {
  if (props.type === 'number') {
    const target = e.target as HTMLInputElement
    let value = target.value
    if (value.includes('-')) {
      value = value.replace(/-/g, '')
      target.value = value
      model.value = value
    }

    if (value === '') {
      model.value = ''
      return
    }

    if (/^0+[0-9]+$/.test(value)) {
      value = value.replace(/^0+/, '') || '0'
      target.value = value
      model.value = value
    }
  }
}
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label" :for="fieldName" class="input-label">
      {{ label }}
    </label>
    <input
        :id="fieldName"
        v-model="model"
        :type="props.type"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        class="input"
        @blur="onBlur"
        @input="handleInput"
    />
  </div>
</template>

<style scoped lang="scss" src="./styles.scss">
</style>
