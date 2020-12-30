<template>
  <div class="max-h">
    <b-form 
      @submit.stop.prevent="onSubmit" 
      class="set-w bg-white p-2 rounded-lg"
    >

      <b-card-text class="h2 m-3 text-center">
        Вход на сайт
      </b-card-text>

      <b-form-group 
        id="login-input-group" 
        label="Логин" 
        label-for="login-input"
        class="m-2 p-3"
      >
        <b-form-input
          id="login-input"
          name="login-input"
          placeholder="Example"
          v-model="$v.form.login.$model"
          :state="validateState('login')"
          aria-describedby="login-input-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="login-input-live-feedback">
          Минимальное кол-во символов 4.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group 
        id="password-input-group" 
        label="Пароль" 
        label-for="password-input"
        class="m-2 p-3"
      >
        <b-form-input
          id="password-input"
          name="password-input"
          placeholder="**************"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
          aria-describedby="password-input-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="password-input-live-feedback">
          Минимальное кол-во символов 6.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group 
        id="role-input-group" 
        label="Я ..." 
        label-for="role-input"
        class="m-2 p-3"
      >
        <b-form-select
          class="cursor-pointer"
          id="role-input"
          name="role-input"
          v-model="$v.form.role.$model"
          :options="roles"
          :state="validateState('role')"
          aria-describedby="role-input-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="role-input-live-feedback">
          Выберите свою роль.
        </b-form-invalid-feedback>
        
      </b-form-group>
      
      <b-button type="submit" class="font-weight-bold pr-5 pl-5 m-auto d-block rounded-lg" variant="outline-success">Войти</b-button>

      <b-button-group class="w-100 mt-2 font-size-">
        <b-button to="/" class="border-0" variant="outline-info"><small>Вернуться</small></b-button>
        <b-button to="/reg" class="border-0" variant="outline-secondary"><small>Регистрация</small></b-button>
      </b-button-group>
    </b-form>

  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      roles: [
        { value: null, text: "Выбрать..." },
        { value: "writer", text: "Писатель" },
        { value: "offer", text: "Инвестор" },
        { value: "reader", text: "Читатель" }
      ],
      form: {
        login: null,
        password: null,
        role: null
      }
    };
  },
  validations: {
    form: {
      role: {
        required
      },
      login: {
        required,
        minLength: minLength(4)
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    validateState(login) {
      const { $dirty, $error } = this.$v.form[login];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        login: null,
        password: null,
        role: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    }
  },

};
</script>

<style lang="scss" scoped>
.max-h {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
  width: 100vw;
}
.set-w {
  width: 450px;
}
@media screen and (max-width: 500px) {
  .set-w {
    width: 100%;
  }
}
.cursor-pointer {
  cursor: pointer;
}
</style>