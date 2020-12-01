import Vue from "vue";
import {
  Button,
  Select,
  Slider,
  Container,
  Header,
  Main,
  Footer,
  Aside
} from "element-ui";
let arr = [Button, Select, Slider, Container, Header, Main, Footer,Aside];
arr.forEach((item) => {
  Vue.use(item);
});
