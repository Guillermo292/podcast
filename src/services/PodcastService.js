import { ref } from "vue";
import axios from "axios";

class PodcastsService {
  podcasts;
  url="https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  constructor() {
    this.podcasts = ref([]);
  }

  getPodcasts() {
    return this.podcasts.value;
  }

  async fetchAllPodcasts() {
    try {
      await axios.get(this.url).then((response) => {
        this.podcasts.value = response.data.feed.entry;
      });
    } catch (err) {}
  }
}

export default PodcastsService;