import Products from "../pages/Products"
import Contacts from "../pages/Contacts"
import Counters from "../pages/Counter"
import LifeCycleTest from "../pages/LifeCycleTest"

export const routes = [
  {
    path: "/products",
    label: "Products",
    component: Products,
  },
  {
    path: "/contscts",
    label: "Contacts",
    component: Contacts,
  },
  {
    path: "/counters",
    label: "Counters",
    component: Counters,
  },
  {
    path: "/life-cycle-test",
    label: "Life-cycle-test",
    component: LifeCycleTest,
  },
]
