<script lang="ts">
  import Navbar from "$lib/infrastructure/ui/components/Navbar.svelte";
  import Hero from "$lib/infrastructure/ui/components/Hero.svelte";
  import About from "$lib/infrastructure/ui/components/About.svelte";
  import Skills from "$lib/infrastructure/ui/components/Skills.svelte";
  import Projects from "$lib/infrastructure/ui/components/Projects.svelte";
  import Contact from "$lib/infrastructure/ui/components/Contact.svelte";
  import Footer from "$lib/infrastructure/ui/components/Footer.svelte";
  import GoToTop from "$lib/infrastructure/ui/components/GoToTop.svelte";
  import { onMount } from "svelte";
  import type { Project } from "$lib/domain/entities/Project";
  import ProjectDetailsModal from "$lib/infrastructure/ui/components/ProjectDetailsModal.svelte";

  let selectedProject = $state<Project | null>(null);

  function openProjectDetails(project: Project) {
    selectedProject = project;
    document.body.style.overflow = "hidden";
  }

  function closeProjectDetails() {
    selectedProject = null;
    document.body.style.overflow = "";
  }

  /**
   * Initialisation des animations au défilement.
   */
  onMount(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".animate-on-scroll, .reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    elements.forEach((el) => observer.observe(el));
  });
</script>

<Navbar />

<main>
  <Hero />
  <About />
  <Skills />
  <Projects onOpenDetails={openProjectDetails} />
  <Contact />
</main>

<ProjectDetailsModal project={selectedProject} onclose={closeProjectDetails} />

<Footer />
<GoToTop />
