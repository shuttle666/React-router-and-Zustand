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
    // 在SystemState中添加更丰富的主题配置
    SystemState: {
      theme: "dark",
      language: "en",
      colors: {
        dark: {
          primary: "#1a1a1a",
          secondary: "#2d2d2d", 
          accent: "#3b82f6",
          text: "#ffffff",
          textSecondary: "#a1a1aa",
          border: "#404040"
        },
        light: {
          primary: "#ffffff",
          secondary: "#f8fafc",
          accent: "#3b82f6", 
          text: "#1f2937",
          textSecondary: "#6b7280",
          border: "#e5e7eb"
        }
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