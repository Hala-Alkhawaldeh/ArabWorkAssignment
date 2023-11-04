<template>
  <div class=" p-4 bg-white mt-5 w-full flex flex-col ">
    <gmap-map :zoom="14" :center="center" class="w-full h-[600px]">
      <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
    <div class="location md:flex hidden border-t-2 px-4 py-4 items-center">
        <div class="bg-[#E6F7FF] rounded-full w-[20px] h-[20px] mx-2">
          <img
            src="/img/location.svg"
            alt="user"
            width="18"
            height="18"
            class="w-[18px] h-[18px]"
          />
        </div>
        <div class="location  text-sm font-medium text-accentColor2">
          {{ userSelected.location.country }},{{ userSelected.location.city }},
          {{ userSelected.location.street.name }}
        </div>
      </div>
  </div>
</template>
     
    <script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: {
        lat: 39.7837304,
        lng: -100.4458825,
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
      user: null,
    };
  },
  props: {
    userSelected: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.initMarker(this.userSelected)
  },

  methods: {
    initMarker(user) {
      this.user = user;
      this.existingPlace = user.location.coordinates;
      this.addLocationMarker();
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: Number(this.existingPlace.latitude),
          lng: Number(this.existingPlace.longitude),
        };

        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        // this.existingPlace = null;
      }
     
    },

    locateGeoLocation: function () {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
      });
    },
  },
};
</script>