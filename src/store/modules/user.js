import { getCode, loginApi } from "@/api";
import { Message } from "element-ui";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    clientToken: "",
    userInfo: {},
  },
  mutations: {
    setClientToken(state, payload) {
      state.clientToken = payload;
    },
    updateUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    // 获取验证码图片
    async getCodeActions(context) {
      const clientToken = Math.random();
      context.commit("setClientToken", clientToken);
      const { data } = await getCode(clientToken);
      const src = URL.createObjectURL(data);
      return src;
    },

    // 登录
    async login(context, payload) {
      const { data } = await loginApi(payload);
      console.log(data);
      if (!data.success) return Message.error(data.msg);
      context.commit("updateUserInfo", data);
      Message.success("登陆成功");
      router.push("/");
    },
  },
};
