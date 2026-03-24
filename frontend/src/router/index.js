import { createRouter, createWebHistory } from 'vue-router'
import SplashView         from '../views/SplashView.vue'
import PlayView           from '../views/PlayView.vue'
import WatchView          from '../views/WatchView.vue'
import CareerView         from '../views/CareerView.vue'
import JourneyView        from '../views/JourneyView.vue'
import UltimateTeamView   from '../views/UltimateTeamView.vue'
import PlayerDBView       from '../views/PlayerDBView.vue'
import LeagueView         from '../views/LeagueView.vue'
import FootyStreetView    from '../views/FootyStreetView.vue'
import ManagerEditorView  from '../views/ManagerEditorView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',            component: SplashView        },
    { path: '/play',        component: PlayView          },
    { path: '/watch',       component: WatchView         },
    { path: '/career',      component: CareerView        },
    { path: '/journey',     component: JourneyView       },
    { path: '/ultimate',    component: UltimateTeamView  },
    { path: '/players',     component: PlayerDBView      },
    { path: '/league',      component: LeagueView        },
    { path: '/street',      component: FootyStreetView   },
    { path: '/manager',     component: ManagerEditorView },
  ],
})
