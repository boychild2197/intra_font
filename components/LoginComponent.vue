<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="
                          text-center
                          display-1
                          primary--text
                          text--accent-3
                        "
                      >
                        Sign in
                      </h1>
                      <div class="text-center mt-4">
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-google</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center mt-4">
                        Ensure your for registration
                      </h4>
                      <v-form>
                        <v-text-field
                          label="Email"
                          name="Email"
                          prepend-inner-icon="mdi-email"
                          color="primary accent-3"
                          type="text"
                        />
                        <v-text-field
                          id="password"
                          label="Password"
                          name="password"
                          prepend-inner-icon="mdi-lock"
                          color="primary accent-3"
                          type="password"
                        />
                      </v-form>
                      <h3 class="text-center mt-3">Forgot your password?</h3>
                    </v-card-text>
                    <div class="text-center mt-3 mb-3">
                      <v-btn rounded color="primary accent-3" dark
                        >SIGN IN</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="primary accent-3">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Hello,Friends!</h1>
                      <h5 class="text-center">
                        Enter your personel details and start journey
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined="" dark @click="step++"
                        >SIGN UP</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="primary accent-3">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Welcome Back!</h1>
                      <h5 class="text-center">
                        To keep connected with us please login with your
                        personnel info
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--"
                        >SIGN IN</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="
                          text-center
                          display-2
                          primary--text
                          text--accent-3
                        "
                      >
                        Create Account
                      </h1>
                      <div class="text-center mt-4">
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-google</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center mt-4">
                        Ensure your email for registration
                      </h4>
                      <v-form>
                        <v-text-field
                          label="Name"
                          name="Name"
                          prepend-icon="mdi-account"
                          type="text"
                          color="teal accent-3"
                        />
                        <v-text-field
                          label="Email"
                          name="Email"
                          prepend-icon="mdi-email"
                          type="text"
                          color="teal accent-3"
                        />
                        <v-text-field
                          label="Password"
                          name="Password"
                          prepend-icon="mdi-lock"
                          type="text"
                          color="teal accent-3"
                        />
                      </v-form>
                    </v-card-text>
                    <div class="text-center mt-3 mb-3">
                      <v-btn rounded color="primary accent-3" dark
                        >SIGN UP</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
</style>