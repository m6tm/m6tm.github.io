<script lang="ts">
  import { _ } from "svelte-i18n";
  import { contactService } from "$lib/application/services/ContactService";

  let name = $state("");
  let email = $state("");
  let subject = $state("");
  let message = $state("");
  let status = $state<"idle" | "sending" | "sent" | "error">("idle");
  let errorMessage = $state("");

  /**
   * Gestion de la soumission du formulaire de contact.
   */
  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    status = "sending";
    errorMessage = "";

    const result = await contactService.sendMessage({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    if (result.success) {
      status = "sent";
      name = "";
      email = "";
      subject = "";
      message = "";

      setTimeout(() => {
        status = "idle";
      }, 3000);
    } else {
      status = "error";
      errorMessage = result.message;

      setTimeout(() => {
        status = "idle";
        errorMessage = "";
      }, 5000);
    }
  }
</script>

<section class="section contact" id="contact">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">{$_('contact.tag')}</span>
      <h2 class="section-title">{$_('contact.title')}</h2>
      <p class="section-description">
        {$_('contact.description')}
      </p>
    </div>
    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <h4>{$_('contact.email')}</h4>
            <a href="mailto:maboadaniel.55@gmail.com"
              >maboadaniel.55@gmail.com</a
            >
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <div>
            <h4>{$_('contact.phone')}</h4>
            <a href="tel:+237692095572">+237 692 095 572</a>
          </div>
        </div>
        <div class="contact-item whatsapp-item">
          <div class="contact-icon whatsapp-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              />
            </svg>
          </div>
          <div>
            <h4>{$_('contact.whatsapp')}</h4>
            <a
              href="https://wa.me/237692095572"
              target="_blank"
              class="whatsapp-link">{$_('contact.startDiscussion')}</a
            >
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <h4>{$_('contact.location')}</h4>
            <p>Logbessou, Douala, Cameroun</p>
          </div>
        </div>
        <div class="social-links">
          <a
            href="https://github.com/m6tm"
            target="_blank"
            class="social-link"
            aria-label="GitHub"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/maboa-daniel"
            target="_blank"
            class="social-link"
            aria-label="LinkedIn"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
      <form class="contact-form" onsubmit={handleSubmit}>
        <div class="form-group">
          <label for="name">{$_('contact.form.name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            bind:value={name}
            required
            placeholder={$_('contact.form.namePlaceholder')}
          />
        </div>
        <div class="form-group">
          <label for="email">{$_('contact.form.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            bind:value={email}
            required
            placeholder={$_('contact.form.emailPlaceholder')}
          />
        </div>
        <div class="form-group">
          <label for="subject">{$_('contact.form.subject')}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            bind:value={subject}
            required
            placeholder={$_('contact.form.subjectPlaceholder')}
          />
        </div>
        <div class="form-group">
          <label for="message">{$_('contact.form.message')}</label>
          <textarea
            id="message"
            name="message"
            bind:value={message}
            rows="5"
            required
            placeholder={$_('contact.form.messagePlaceholder')}
          ></textarea>
        </div>
        {#if status === "error"}
          <div class="error-message">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        {/if}
        <button
          type="submit"
          class="btn btn-primary btn-full"
          disabled={status !== "idle"}
        >
          {#if status === "sending"}
            <span>{$_('contact.form.sending')}</span>
          {:else if status === "sent"}
            <span>{$_('contact.form.sent')}</span>
          {:else if status === "error"}
            <span>{$_('contact.form.send')}</span>
          {:else}
            <span>{$_('contact.form.send')}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          {/if}
        </button>
      </form>
    </div>
  </div>
</section>
