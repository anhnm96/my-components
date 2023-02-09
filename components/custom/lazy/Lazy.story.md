Not every component is equal. There are components that are more important and should be displayed immediately, while content further down the page won’t be visible right away anyway, so it can be loaded a bit later. Similarly, content that is shown in modals and popups, especially if there is a lot of it, does not need to be loaded upfront.

The Lazy component accepts three props - onVisible, onIdle, and idleTimeout. <br>
The onVisible prop indicates if a component should be rendered using an Intersection Observer. It accepts a boolean or a config object for the Intersection Observer. <br>
Next, we have onIdle prop. If it sets to true, then the component will be loaded using requestIdleCallback and requestAnimationFrame. The idleTimeout prop is a timeout number for the requestIdleCallback function

```vue
<template>
  <Lazy on-visible>
    <VeryLargeComponent />
  </Lazy>
</template>
```

***Credits: Vue The Road to Enterprise***
