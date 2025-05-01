
<template>
  <el-form :model="form" label-width="auto" class="formContainer">
    <el-form-item label="First name" class="firstNameInput">
      <el-input v-model="form.firstName" />
    </el-form-item>
    <el-form-item label="Last name" class="lastNameInput">
      <el-input v-model="form.lastName" />
    </el-form-item>
    <el-form-item label="Email" class="lastNameInput">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="New York" value="NewYork" />
        <el-option label="Los Angeles" value="LosAngeles" />
      </el-select>
    </el-form-item>

    <el-form-item label="Identified as :">
      <el-radio-group v-model="form.gender">
        <el-radio value="Male">Male</el-radio>
        <el-radio value="Female">Female</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Get informations via email?" class="">
      <el-switch v-model="form.notify" />
    </el-form-item>

    <el-form-item class="buttonsContainer">
      <el-button type="primary" @click="onSubmit" class="submitButton"
        >Create</el-button
      >
      <el-button class="cancelButton">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { useAuthStore } from "@/stores/authstore";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const authstore = useAuthStore();
function Login() {
  authstore.login({ email: form.email });
  router.push("/");
}
// do not use same name with ref
const form = reactive({
  firstName: "",
  lastName: "",
  region: "",
  gender: "",
  email: "",
  notify: "",
});

const onSubmit = () => {
  console.log(form);
  Login();
};
</script>
<style scoped>
.formContainer {
  margin-top: 5rem;
  max-width: 900px;
}
.buttonsContainer {
  margin-left: 50%;
}
.submitButton {
}
.cancelButton {
}
</style>
