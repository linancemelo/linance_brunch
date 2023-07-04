<template>
  <div class="drawer lg:drawer-open h-full">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="navbar h-16">
        <div class="navbar-start">
          <label
            for="my-drawer"
            class="drawer-button btn btn-neutral lg:hidden"
          >
            <span class="material-symbols-outlined"> menu </span>
          </label>
        </div>
        <div class="navbar-center lg:hidden">
          <a class="normal-case text-xl">Linance</a>
        </div>
        <div class="navbar-end">
          <div class="w-10 rounded-full">
            <span class="cursor-pointer material-symbols-outlined"> logout </span>
          </div>
        </div>
      </div>
      <div class="w-full h-full bg-white p-5" style="height: calc(100% - 4rem)">
        <!-- Page Content -->
        <router-view/>
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
            </thead>
            <tbody>
            <!-- row 1 -->
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <div class="h-16">
        <!-- navbar logo -->
        <img src="" alt="">
      </div>
      <ul class="menu p-4 w-80 h-full text-base-content bg-black">
        <!-- Sidebar Content -->
        <li class="text-base my-1"><a class="active">產品列表</a></li>
        <li class="text-base my-1"><a>訂單紀錄</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped></style>
