<template>
  <div class="flex flex-1 flex-col pt-10 ">
    <div class="user-maps-wrapper flex flex-1 md:items-stretch md:justify-normal items-center justify-center">
      <div class="users-wrapper mx-4 flex md:flex-1 justify-center items-center gap-4 flex-col md:p-4">
        <div class="users flex  text-2xl font-bold">users cross the world</div>
        <div
          v-for="user in users"
          :key="user.login.uuid"
          @click="showUserOnMap(user)"
          :class="[userSelected === user ? 'border border-primary bg-white' : '']"
          class="flex md:flex-row flex-col  md:w-[700px] w-full  rounded-md cursor-pointer hover:border-primary hover:bg-white "
        >
          <user-card
            :user="user"
            :userSelected="userSelected"
            class="flex flex-1"
          />

          <!-- mobile only maps -->
          <maps
            v-if="userSelected === user"
            ref="mapsMopComponentRef"
            :userSelected="userSelected"
            class="md:hidden flex  flex-1 justify-center items-center"
          ></maps>

        </div>
      </div>
      <!-- desktop maps -->
      <section 
        class="maps md:flex hidden flex-1 flex-col p-4 "
      >
        <div class="users text-2xl font-bold text-center">users location</div>
        <div class="map-container flex flex-1 ">
          <maps
            ref="mapsDesComponentRef"
            :userSelected="userSelected"
            class="flex flex-1 max-w-[800px] max-h-[600px] sticky top-0"
          ></maps>
        </div>
      </section>
    </div>

    <button
      @click="nextPage"
      class="h-[41px] mx-4 rounded-3xl my-4 bg-primary text-white hover:opacity-70 text-sm font-semibold flex items-center justify-center"
    >
      Next
    </button>
  </div>
</template>

<script>
import axios from "axios";
import userCard from "./userCard.vue";
import Maps from "./maps.vue";

export default {
  components: { userCard, Maps },
  data() {
    return {
      users: [],
      currentPage: 1,
      usersPerPage: 5,
      userSelected: null,
    };
  },

  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("https://randomuser.me/api/", {
          params: {
            results: this.usersPerPage,
            page: this.currentPage,
          },
        });

        this.users = response.data.results;
        this.userSelected = this.users[0];
        this.showUserOnMap(this.userSelected);
        console.log(this.users);
      } catch (error) {
        console.error(error);
      }
    },

    nextPage() {
      this.currentPage++;
      this.fetchUsers();
    },
    showUserOnMap(user) {
      // Call the child function using a ref
      this.userSelected = user;
      this.$refs.mapsDesComponentRef.initMarker(user);
      this.$refs.mapsMopDesComponentRef.initMarker(user);
    },
  },
  computed: {},
  created() {
    this.fetchUsers();
  },
};
</script>