<template>
  <div class="user-card flex flex-col  cursor-pointer">
    
    <div
    :class="[userSelected === user ? ' md:bg-[#E5E7EB]' : ' border shadow-lg']"
      class=" rounded-md w-full  md:shadow-lg bg-white hover:border-primary"
    >
      <div class="user-info flex p-4 text-accentColor2">
        <!-- user image -->
        <div class="flex image">
          <img
            :src="user.picture.large"
            :alt="user.name.first"
            width="80"
            height="80"
            class="user-img w-[80px] h-[80px] object-cover rounded-full bg-no-repeat bg-center"
          />
        </div>
        <!-- user info -->
        <div class="info flex flex-col px-2 gap-2">
          <div class="name text-[20px] font-medium">{{ user.name.first }}</div>

          <!-- user email -->
          <div class="email text-sm font-medium flex gap-2">
            <div class=" icon-bg">
              <i class="fa fa-envelope"></i>
            </div>
            {{ user.email }}
          </div>

          <!-- user gender -->
          <div class="gender text-sm font-medium flex gap-2">
            <div class="icon-bg">
              <i class="fa fa-venus-mars"></i>
            </div>
            {{ user.gender }}
          </div>
          <div class="flex gap-4">
            <div class="age text-sm font-medium flex gap-2">
              <div class="icon-bg">
                <i class="fa fa-user"></i>
              </div>
              {{ user.dob.age }}
            </div>
            <!-- user Dop -->
            <div class="date text-sm font-medium flex gap-2">
              <div class="icon-bg">
                <i class="fa fa-calendar"></i>
              </div>
              {{ fullDate }}
            </div>
          </div>
        </div>
      </div>
      <!-- user clinic location -->

      <div   :class="[userSelected === user ? 'md:border-primary' : '']" class="location border-t-2 flex  px-4 py-4 items-center">
        <div class="bg-[#E6F7FF] rounded-full w-[20px] h-[20px] mx-2">
          <img
            src="/img/location.svg"
            alt="user"
            width="18"
            height="18"
            class="w-[18px] h-[18px]"
          />
        </div>
        <div class="name text-sm font-medium text-accentColor2">
          {{ user.location.country }},{{ user.location.city }},
          {{ user.location.street.name }}
        </div>
      </div>
      <div   
      :class="[userSelected === user ? 'hidden' : '']"
      class="CTA  flex p-4 bg-[#E5E7EB] rounded-b-md">
      <button
        class="w-full h-[41px] rounded-3xl bg-primary text-white hover:opacity-70 text-sm font-semibold flex items-center justify-center"
      >
        show Location
      </button>
    </div>
    </div>
    <!-- open user profile button -->
   
  </div>
  
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    userSelected: {
      type: Object,
      required: true,
    },
    // date: {
    //   type: String,
    //   required: true,
    // },
  },
  computed: {
    fullDate() {
      let date = new Date(this.user.dob.date);
      let fullDate = date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear();  
      return fullDate;
    },
  },
};
</script>
<style scoped>
.icon-bg{
 @apply bg-[#E6F7FF] rounded-full w-[24px] h-[24px] justify-center items-center flex;
}
</style>