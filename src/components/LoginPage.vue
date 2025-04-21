
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
  <el-form :model="form" label-width="auto"  class="formContainer" >
    <el-form-item label="Activity name">
      <el-input  />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select  placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
      <el-switch  />
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group >
        <el-checkbox value="Online activities" name="type">
          Online activities
        </el-checkbox>
        <el-checkbox value="Promotion activities" name="type">
          Promotion activities
        </el-checkbox>
        <el-checkbox value="Offline activities" name="type">
          Offline activities
        </el-checkbox>
        <el-checkbox value="Simple brand exposure" name="type">
          Simple brand exposure
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
      <el-radio-group >
        <el-radio value="Sponsor">Sponsor</el-radio>
        <el-radio value="Venue">Venue</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input  type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<style>
    .formContainer{
        margin-top: 5rem;
        max-width: 900px 
    }
</style>
// v-forms were deleted
// this was accuring errors 
// the last code was commented