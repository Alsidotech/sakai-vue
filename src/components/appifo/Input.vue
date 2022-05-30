<template>
  <div class="input">
    <div class="field">
      <label :for="lowerCaseLabel" :class="{'text-red-600': error}">{{ label }} <span v-if="mand" class="text-red-600 font-bold">*</span></label>
      <span class="p-input-icon-right">
         <input :type="typeOf" :id="lowerCaseLabel" :name="lowerCaseLabel"
                :value="modelValue" @input="updateModelValue" class="p-inputtext p-component"
                :class="{'p-invalid': error}"/>
              <i class="pi pi-eye cursor-pointer hover:text-blue-500" v-if="type==='password' && typeOf==='password'"
                 @click="typeOf='text'"/>
              <i class="pi pi-eye-slash cursor-pointer hover:text-blue-500" v-else-if="type==='password' && typeOf==='text'"
                 @click="typeOf='password'"/>
      </span>
      <small :id="`${lowerCaseLabel}-help`" class="p-error" v-if="error">{{ error }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    // use `label` to provide clear understanding about the field
    label: {
      type: String,
      default: 'Label'
    },

    // use `type` to specify the field behaviour
    type: {
      type: String,
      default: 'text'
    },

    // this allows using the `modelValue` prop for a different purpose
    modelValue: String,

    // use `error` prop for showing the validation error
    error: {
      type: String,
      default: ''
    },

    // use `mandatory` prop for compulsory data
    mand: Boolean
  },

  data() {
    return {
      typeOf: this.type,
    }
  },

  computed: {
    lowerCaseLabel() {
      return this.label.toLowerCase();
    }
  },

  methods: {
    updateModelValue(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
