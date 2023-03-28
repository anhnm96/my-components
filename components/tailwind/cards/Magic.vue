<script setup lang="ts">
function mouseMove(e: MouseEvent) {
  for (const card of document.getElementsByClassName('card')) {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ;(card as HTMLDivElement).style.setProperty('--mouse-x', `${x}px`)
    ;(card as HTMLDivElement).style.setProperty('--mouse-y', `${y}px`)
  }
}
</script>

<template>
  <div id="cards" @mousemove="mouseMove">
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <Icon name="fa-solid:building" />
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <Icon name="fa-solid:building" />
            <div class="card-info-title">
              <h3>Apartments</h3>
              <h4>Places to be apart. Wait, what?</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <Icon name="fa-solid:horse" />
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <Icon name="fa-solid:horse" />
            <div class="card-info-title">
              <h3>Unicorns</h3>
              <h4>A single corn. Er, I mean horn.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <Icon name="fa-solid:blender-phone" />
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <Icon name="fa-solid:blender-phone" />
            <div class="card-info-title">
              <h3>Blender Phones</h3>
              <h4>These absolutely deserve to exist.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <Icon name="fa-solid:running" />
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <Icon name="fa-solid:running" />
            <div class="card-info-title">
              <h3>Adios</h3>
              <h4>See you...</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <Icon name="fa-solid:spinner" />
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <Icon name="fa-solid:spinner" />
            <div class="card-info-title">
              <h3>I mean hello</h3>
              <h4>...over here.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <Icon name="fa-solid:shipping-fast" />
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <Icon name="fa-solid:shipping-fast" />
            <div class="card-info-title">
              <h3>Otters</h3>
              <h4>Look at me, imma cute lil fella.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#cards {
  --bg-color: rgb(19, 19, 21);
  --card-color: rgb(23, 23, 23);

  @apply flex flex-wrap gap-2;
}

#cards:hover > .card::after {
  opacity: 1;
}

.card {
  background-color: rgb(255, 255, 255, 0.12);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 260px;
  flex-direction: column;
  position: relative;
  width: 300px;
}

.card:hover::before {
  opacity: 1;
}

.card::before,
.card::after {
  border-radius: inherit;
  content: '';
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
}

.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.3),
    transparent 40%
  );
  z-index: 3;
}

.card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.4),
    transparent 40%
  );
  z-index: 1;
}

.card > .card-content {
  background-color: var(--card-color);
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  inset: 1px;
  padding: 10px;
  position: absolute;
  z-index: 2;
}
svg {
  color: rgb(240, 240, 240);
}

.card-image {
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
  overflow: hidden;
}

.card-image > svg {
  font-size: 6em;
  opacity: 0.25;
}

.card-info-wrapper {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  padding: 0px 20px;
}

.card-info {
  align-items: flex-start;
  display: flex;
  gap: 10px;
}

.card-info > i {
  font-size: 1em;
  height: 20px;
  line-height: 20px;
}

.card-info-title > h3 {
  font-size: 1.1em;
  line-height: 20px;
}

.card-info-title > h4 {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85em;
  margin-top: 8px;
}
</style>
