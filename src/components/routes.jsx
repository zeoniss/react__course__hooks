import Products from "../pages/Products"
import Contacts from "../pages/Contacts"
import Counters from "../pages/Counter"

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
]
