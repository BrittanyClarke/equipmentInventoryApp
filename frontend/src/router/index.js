// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import EquipmentInventory from '@/components/EquipmentInventory'

const routes = [
  {
    path: '/', // The path you want to visit in the browser
    name: 'EquipmentInventory',  // Name for debugging purposes
    component: EquipmentInventory,  // Your component
  },
]

const router = createRouter({
  history: createWebHistory(), // Use browser history
  routes, // Pass the routes
})

export default router

