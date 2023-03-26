<script setup>
import { onBeforeMount, ref, computed } from "vue";
import PodcastsService from "../services/PodcastService";
import CardPodcast from "../components/CardPodcast.vue";
import HeadPage from "../components/HeadPage.vue";
import FilterBar from "../components/FilterBar.vue";

const podcastService = new PodcastsService();
const podcasts = ref([]);
const searchPodcast = ref("");

onBeforeMount(async () => {
  await podcastService.fetchAllPodcasts();
  podcasts.value = podcastService.getPodcasts();
});

const filteredPodcasts = computed(() => {
  if (!searchPodcast.value) return podcasts.value
  return podcasts.value.filter(podcast => 
    podcast["im:name"].label.toLowerCase().includes(searchPodcast.value.toLowerCase()) ||
    podcast["im:artist"].label.toLowerCase().includes(searchPodcast.value.toLowerCase())
  )
})
</script>

<template>
  <main>
    <HeadPage />
    <FilterBar v-model="searchPodcast" />
    <section>
      <CardPodcast v-for="podcast in filteredPodcasts" :podcast="podcast" />
    </section>
  </main>
</template>

<style scoped>
main{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 80%;
}
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  justify-content: center;
  align-items: center;
}
</style>