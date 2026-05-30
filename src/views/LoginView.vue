<template>
  <section class="login">
    <div class="login__content surface">
      <div class="login__header">
        <h1 class="login__title">Welcome back</h1>
        <p class="login__subtitle">Sign in to continue to CashBoard.</p>
      </div>

      <form class="login__form">
        <input class="login__input" type="text" placeholder="Username" />
        <input class="login__input" type="password" placeholder="Password" />

        <div class="login__footer">
          <TextLink href="#">Forgot Password?</TextLink>
          <Button type="button">Login</Button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import TextLink from "@/components/ui/TextLink.vue";
</script>

<style lang="scss" scoped>
.login {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  &__content {
    width: 100%;
    max-width: 420px;
    padding: 32px;
  }

  &__header {
    margin-bottom: 24px;
  }

  &__title {
    font-size: 1.875rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  &__subtitle {
    margin-top: 8px;
    color: var(--text-muted);
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__input {
    min-height: 44px;
    padding: 0 14px;
    border: 1px solid var(--input-border);
    border-radius: var(--radius-lg);
    background: var(--input-bg);
    color: var(--text-primary);
    outline: none;

    &::placeholder {
      color: var(--input-placeholder);
    }

    &:focus {
      border-color: var(--input-border-focus);
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 8px;
  }
}
</style>