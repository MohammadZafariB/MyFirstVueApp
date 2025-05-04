
<template>
  <el-form :model="ruleForm" :rules="rules" label-width="auto" ref="ruleFormRef" class="formContainer">
    <el-form-item label="First name" class="firstNameInput">
      <el-input v-model="ruleForm.firstName" />
    </el-form-item>
    <el-form-item label="Last name" class="lastNameInput">
      <el-input v-model="ruleForm.lastName" />
    </el-form-item>
    <el-form-item label="Email" class="lastNameInput">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item label="Zone">
      <el-select v-model="ruleForm.region" placeholder="please select your zone">
        <el-option label="New York" value="NewYork" />
        <el-option label="Los Angeles" value="LosAngeles" />
      </el-select>
    </el-form-item>

    <el-form-item label="Identified as :">
      <el-radio-group v-model="ruleForm.gender">
        <el-radio value="Male">Male</el-radio>
        <el-radio value="Female">Female</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Get informations via email?" class="">
      <el-switch v-model="ruleForm.notify" />
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
import { reactive ,ref} from "vue";
import { useRouter } from "vue-router";
import  { FormInstance, FormRules } from 'element-plus';
const router = useRouter();
const authstore = useAuthStore();
function Login() {
  authstore.login({ email: ruleForm.email });
  router.push("/");
}
// do not use same name with ref

const ruleFormRef = ref(null)
const ruleForm = reactive({
  firstName: "",
  lastName: "",
  region: "",
  gender: "",
  email: "",
  notify: false,
});
const rules = reactive({
  firstName: [
    { required: true, message: 'Please input first name', trigger: 'blur' },
    { min: 3, message: 'Length should be at least 3', trigger: 'blur' },
  ],
  lastName: [
    { required: true, message: 'Please input last name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please input email', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select your region',
      trigger: 'change',
    },
  ],
  gender: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],

})
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
const onSubmit = async () => {
  await submitForm(ruleFormRef.value);
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
