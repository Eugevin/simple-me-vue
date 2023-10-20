<script setup lang="ts">
defineProps<{ items: number, selected: number }>()
defineEmits(['update'])
</script>

<template>
  <div class="pagination">
    <h5
      v-for="item, i in items"
      :key="item"
      :class="`pagination__item ${i === selected ? 'pagination__item_active' : ''}`"
      @click="$emit('update', i)"
    >
      {{ `${i < 10 ? '0' : ''}${i + 1}` }}
    </h5>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1.875rem;

  &__item {
    position: relative;
    cursor: pointer;
    padding: 0.9688rem;

    &:not(:first-child)::before {
      content: "";
      position: absolute;
      top: 50%;
      right: calc(100%);
      transform: translateY(-50%);
      height: 1px;
      width: 1.875rem;
      background: var(--gray-3);
      transition: var(--transition);

      .white-theme & {
        background: var(--gray-6);
      }
    }

    .white-theme & {
      color: var(--gray-1);
    }

    &_active {
      pointer-events: none;
      color: var(--gray-3);

      .white-theme & {
        color: var(--gray-5);
      }
    }


  }
}
</style>