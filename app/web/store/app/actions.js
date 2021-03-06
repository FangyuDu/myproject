'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = 'http://127.0.0.1:7001';

const actions = {
  toggleFont: ({commit, state}, font) => {
    let i = state.fontList.indexOf(font)
    if (i === -1) {
      commit(Type.ADD_FONT, font)
    } else {
      commit(Type.REDUCE_FONT, i)
    }
  },
  setFontList: ({commit, state}, fonts) => {
    commit(Type.SET_FONT_LIST, fonts)
  },
  FETCH_ARTICLE_LIST: ({ commit, dispatch, state }) => {
    if (!state.articleList.length) {
      return axios.get(`${host}/api/article/list`)
        .then(response => {
          let data = response.data.list;
          commit(Type.SET_ARTICLE_LIST, data);
          return data;
        })
    }
    return Promise.resolve();
  },

  FETCH_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    if (state.article.id != id) {
      return axios.get(`${host}/api/article/${id}`)
        .then(response => {
          let data = response.data;
          commit(Type.SET_ARTICLE_DETAIL, data);
        })
    }
    return Promise.resolve();
  }
};

export default actions;


