<script lang="ts" setup>
// https://www.youtube.com/watch?v=b6iVByCOx8A
</script>

<template>
  <div class="card-container">
    <div class="wrapper text-gray-200">
      <section class="intro">
        <h1 class="text-xl">
          A dive into <code>line-clamp</code>
        </h1>
        <p class="mt-2">It hasn't been standardized yet, so we need to prfix it, and it takes a few extra properties you've probably never heard of before, but it could be really useful!</p>
      </section>
      <section>
        <div class="even-columns">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&ixlib=rb-1.2.1&q=80&w=700" alt="">
            <h2 class="card__title">A quick example</h2>
            <p class="card__preview-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus.</p>
            <button class="btn">Continue reading</button>
          </div>
          <div class="card">
            <img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&ixlib=rb-1.2.1&q=80&w=700" alt="">
            <h2 class="card__title">A quick example</h2>
            <p class="card__preview-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, nemo! consectetur adipisicing elit. Qui, doloribus.</p>
            <button class="btn">Continue reading</button>
          </div>
          <div class="card">
            <img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&ixlib=rb-1.2.1&q=80&w=700" alt="">
            <h2 class="card__title">A quick example</h2>
            <p class="card__preview-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officiis tempore dicta, sed illo sint nobis non odit soluta sit. amet consectetur adipisicing elit. Qui, doloribus.</p>
            <button class="btn">Continue reading</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
section {
  padding-block: clamp(1rem,2vw,1.5rem);
}

.card-container {
  background-color: #212529;
}

.wrapper {
  inline-size: min(100% - 2rem, 60rem);
  margin-inline: auto;
}

.even-columns {
  display: grid;
  gap: clamp(1rem,2vw,1.5rem);

  @media (min-width: 40em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}

.card {
  background: #343a40;
  padding-bottom: 1rem;
  border-radius: .5rem;
  overflow: hidden;
}

.card > *:not(img:first-child) {
  margin-inline: 1rem;
}

.card > *:not(:first-child) {
  margin-block-start: 1.5rem;
}

.card__title {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.25;
}

.card__preview-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>