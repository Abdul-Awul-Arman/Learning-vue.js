<template>
  <div class="layout">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-brand">My Blog</div>
      <ul class="navbar-links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/createBlog">Create Blog</NuxtLink></li>
      </ul>
    </nav>

    <!-- Page content -->
    <main class="content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      © {{ new Date().getFullYear() }} My Blog. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// Nothing needed in script yet
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 1200px;
  margin-inline:auto ;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navbar-links li a {
  text-decoration: none;
  color: #666;
  transition: color 0.2s ease;
}

.navbar-links li a:hover {
  color: #000;
}

.content {
  flex: 1;
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #888;
  background-color: #f5f5f5;
}
</style>
