
    <!-- <el-form>
        <el-form-item label="نام">
            <el-input />
        </el-form-item>

        <el-form-item label="نام خانوادگی">
                <el-input />
        </el-form-item>

      <el-select  label="محل زندگی" placeholder="شهر محل زندگی خود را انتخاب کنید
    ">
        <el-option label="تهران" value="tehran" />
        <el-option label="شهریار" value="shahriar" />
      </el-select>

      <el-form-item label="از طریق ایمیل به من اطلاع بده">
        <el-switch />
    </el-form-item>
    
    </el-form> -->
<template>
  <el-form :model="form" label-width="auto" class="formContainer">
    <el-form-item label="First name">
      <el-input v-model="form.firstName" />
    </el-form-item>
    <el-form-item label="Last name">
      <el-input v-model="form.lastName" />
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
      <el-switch v-model="form.email" />
    </el-form-item>
    
    <el-form-item class="buttonsContainer">
      <el-button type="primary" @click="onSubmit" class="submitButton">Create</el-button>
      <el-button class="cancelButton">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  firstName: '',
  lastName: '',
  region: '',
  type: [],
  gender: '',
  desc: '',
})

const onSubmit = () => {
  console.log(form)
}
</script>
<style>
    .formContainer{
        margin-top: 5rem;
        max-width: 900px 
    }
    .buttonsContainer{
      margin-left: 50%;
    }
.submitButton{

}
.cancelButton{

}
</style>
// v-forms were deleted
// this was accuring errors 
// the last code was commented