<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
    name:'AccordionComponent',
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  }
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 40px;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
