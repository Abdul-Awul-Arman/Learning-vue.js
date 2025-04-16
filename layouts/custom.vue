<template>
    <div>

        <header class="post-header">
            <div class="header-content">
                <span class="brand">My Blog</span>
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<style scoped>
.post-header {
  background-color: #2c3e50;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.brand {
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
}
</style>
