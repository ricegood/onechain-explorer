<template>
<div class = "uk-padding-contents">
  <v-container grid-list-xl>
    <v-layout raw wrap>
      <v-flex xs12 md6>
        <v-card color=blue style="margin-bottom:10px;">
          <v-row>
            <v-col cols="12">
              <v-select style="margin-left:14px; margin-right:14px;" 
                :items="categories"
                v-model="e1"
                label="Category"
		v-on:change="changeCategory"
                single-line
              ></v-select>
            </v-col>
          </v-row>
        </v-card>
        <v-card color=blue style="margin-bottom:10px;">
          <v-row>
            <v-col cols="12">
              <v-text-field
                class="ma-4"
                label="Image File Name"
                solo
                flat
                hide-details
                v-model=imagefile
		:disabled="imagefield_disabled"
              >
              </v-text-field>
              <v-text-field
                class="ma-4"
                label="Title"
                solo
                flat
                hide-details
                v-model=title
		:disabled="datafield_disabled"
              >
              </v-text-field>
              <v-text-field
                class="ma-4"
                label="Contents"
                append-icon="add"
                solo
                flat
                hide-details
                v-model=userInputText
		:disabled="datafield_disabled"
		@input="updatePreview"
                @keyup.enter="inputText()"
                @click:append="inputText()"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card>
        <v-card>
          <v-card-text>
            <v-simple-table dense>
              <tbody>
                <tr v-for="text in texts" :key="text">
                  <td>
                    <span>
                      {{ text }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn depressed
              :disabled="loading"
              @click="removeTexts()"
            >
              CLEAR
            </v-btn>
            <v-btn depressed
              color="blue"
              class="white--text"
              :loading="loading"
              :disabled="loading"
              @click="sendTexts(loader = 'loading')"
            >
              SEND
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <vue-markdown>## :eyes: Preview</vue-markdown>
        <vue-markdown :source="texts_preview"></vue-markdown>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  components: {
    VueMarkdown
  },
  data: function () {
    return {
      e1: null,
      categories: ['professor', 'students-phd', 'students-ms', 'alumni', 'research', 'demo', 'technical_report', 'publication', 'news'],
      image_categories: ['professor', 'students-phd', 'students-ms', 'research', 'demo', 'news'],
      imagefield_disabled: true,
      datafield_disabled: true,
      category: "",
      imagefile: "",
      title: "",
      userInputText: "",
      texts: [],
      texts_inline: "",
      texts_preview: "",
      loader: null,
      loading: false,
      goDark: this.$vuetify.theme.dark
    }
  },
  watch: {
    loader () {},
  },
  methods: {
    changeCategory: function (a) {
      this.category = a;
      this.datafield_disabled = false;
      this.imagefield_disabled = !(this.image_categories.includes(a));
      if (this.imagefield_disabled) { this.imagefile = ""; }
    },
    updatePreview: function () {
      this.texts_preview = this.texts_inline + "\n" + this.userInputText;
    },
    inputText: function () {
      this.texts.push(this.userInputText);
      if (this.texts_inline == "") { this.texts_inline = this.userInputText; }
      else { this.texts_inline += ("\n" + this.userInputText); }
      this.userInputText = "";
    },
    removeTexts: function () {
      this.imagefile = "";
      this.title = "";
      this.texts = [];
      this.texts_preview = "";
      this.texts_inline = "";
    },
    sendTexts: function () {
      const l = this.loader;
      this[l] = true;
      var totalTexts = []
      totalTexts.push(this.category)
      totalTexts.push(this.imagefile)
      totalTexts.push(this.title)
      totalTexts.push(this.texts)

      //const baseURI = 'https://endpoint.ainize.ai/lukepark327/onechain';
      const baseURI = 'http://lynx.snu.ac.kr:8082';
      this.$http.post(`${baseURI}/mineBlock`, {
        headers: {
          'Content-type': 'application/json'
        },
        data: totalTexts
      })
      .then(() => {
      })
      .catch((error) => {
        alert(error);
      });

      setTimeout(() => {
        this.removeTexts();
        this[l] = false;
      }, 2000);
      this.loader = null;
    },
    setTheme: function () {
      if (this.goDark == true) {
        return (this.$vuetify.theme.dark = true);
      }
      else {
        return (this.$vuetify.theme.dark = false);
      }
    }
  }
};
</script>
