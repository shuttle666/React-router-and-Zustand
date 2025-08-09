import { create } from 'zustand';
import { immer } from "zustand/middleware/immer";
import { cloneDeep } from 'lodash';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

// create a store => create(set => ({ state }))
// immer middleware allows us to directly mutate the state
const useSystemStore = create(immer((set, get) => (
  {
    // states
    SystemState: {
      theme: "dark",
      language: "en",
      background: {
        primary: "black",
        secondary: "white"
      }
    },
    // actions
    SwitchTheme: () => set(state => {
      state.SystemState.theme = state.SystemState.theme === "dark" ? "light" : "dark"
    })
  }
)))

const useAppStore = create(immer((set, get) => (
  {

    // states
    AppState: {
      AppList: [
        {
          id: 1,
          name: "Button",
          url: "https://topcoderfullstack.com",
          icon: "/app/edge.svg",
          ondblclickList: [],
          type: Button,
          component: null,
          install: "InstallEdge",
          active: false,
          
        }
      ]
    },
    // actions
    SwitchAppType: () => {
      set(state => {
        state.AppState.AppList[0].type = state.AppState.AppList[0].type === Button ? Card : Button
        state.AppState.AppList[0].name = state.AppState.AppList[0].type === Button ? 'Button' : 'Card'
      })
    }
  }
)))

export { useSystemStore, useAppStore }