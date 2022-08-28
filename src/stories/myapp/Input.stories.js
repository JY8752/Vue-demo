import MyInput from '../../components/input/Input.vue'

export default {
  title: 'MyApp/Input',
  component: MyInput
}

const Template = (args) => ({
  components: { MyInput },
  setup() {
    return { args }
  },
  template: '<my-input v-bind="args" />'
})

export const Basic = Template.bind({})
Basic.args = {
  label: "name"
}
