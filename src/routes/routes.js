import config from "../config";

import HomePage from "../pages/HomePage/index.js";
import ProductPage from "../pages/ProductPage/index.js";
import ContactPage from "../pages/ContactPage/index.js";
import AboutPage from "../pages/AboutPage/index.js";
import ServicesPage from "../pages/ServicesPage/index.js";
import MediaGalleryPage from "../pages/MediaGalleryPage/index.js";
import BlogKhongNung from "../pages/ArticlePage/BlogKhongNung/index.js";
import BlogTerazo from "../pages/ArticlePage/BlogTerazo/index.js";

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.product, component: ProductPage },
  { path: config.routes.contact, component: ContactPage },
  { path: config.routes.aboutus, component: AboutPage },
  { path: config.routes.services, component: ServicesPage },
  { path: config.routes.mediaGallery, component: MediaGalleryPage },
  { path: config.routes.blogKhongNung, component: BlogKhongNung },
  { path: config.routes.blogTerazo, component: BlogTerazo },
];

export { publicRoutes };