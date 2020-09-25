import { createRouter, createWebHistory } from 'vue-router'
import Page from '../layouts/Page'
import Form from "../components/form/RequestForm";
import Categories from "../components/categories/Categories";

const routes = [
  {
    path: '/',
    name: "Main",
    component: Page,
    children: [
      { path: 'categories',
        name: "Categories",
        component: Categories
      },
      { path: 'formalizing',
        name: "Form",
        component: Form
      }
    ]
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
