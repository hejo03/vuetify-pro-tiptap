<script lang="ts">
export default {
    props: {
        items: {
            type: Array,
            required: true
        },

        command: {
            type: Function,
            required: true
        }
    },

    data() {
        return {
            selectedIndex: 0
        }
    },

    watch: {
        items() {
            this.selectedIndex = 0
        }
    },

    methods: {
        onKeyDown({ event }) {
            if (event.key === 'ArrowUp') {
                this.upHandler()
                return true
            }

            if (event.key === 'ArrowDown') {
                this.downHandler()
                return true
            }

            if (event.key === 'Enter') {
                this.enterHandler()
                return true
            }

            return false
        },

        upHandler() {
            this.selectedIndex = ((this.selectedIndex + this.items.length) - 1) % this.items.length
        },

        downHandler() {
            this.selectedIndex = (this.selectedIndex + 1) % this.items.length
        },

        enterHandler() {
            this.selectItem(this.selectedIndex)
        },

        selectItem(index: number) {
            const item = this.items[index]

            if (item) {
                this.command({ id: item })
            }
        }
    }
}
</script>

<template>
  <div class="dropdown-menu">
    <template v-if="items.length">
      <button
        v-for="(item, index) in items" :key="index" :class="{ 'is-selected': index === selectedIndex }"
        @click="selectItem(index)"
      >
        {{ item }}
      </button>
    </template>
    <div v-else class="item">
      No result
    </div>
  </div>
</template>

<style lang="scss">
/* Dropdown menu */
.dropdown-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.4rem;
  overflow: auto;
  background: var(--white);
  border: 1px solid var(--gray-1);
  border-radius: 0.7rem;
  box-shadow: var(--shadow);

  button {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    width: 100%;
    text-align: left;
    background-color: transparent;

    &:hover,
    &:hover.is-selected {
      background-color: var(--gray-3);
    }

    &.is-selected {
      background-color: var(--gray-2);
    }
  }
}
</style>
