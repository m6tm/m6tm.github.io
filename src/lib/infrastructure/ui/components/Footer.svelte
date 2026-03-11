<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <a href="#accueil" class="nav-logo">
          <span class="logo-text">MABOA Daniel</span><span class="logo-accent"
            >.</span
          >
        </a>
        <p>
          {$_('footer.brand')}
        </p>
      </div>
      <div class="footer-links">
        <a href="#accueil">{$_('nav.home')}</a>
        <a href="#about">{$_('nav.about')}</a>
        <a href="#skills">{$_('nav.skills')}</a>
        <a href="#projects">{$_('nav.projects')}</a>
        <a href="#contact">{$_('nav.contact')}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} MABOA Daniel Emmanuel. {$_('footer.rights')}
      </p>
    </div>
  </div>
</footer>
