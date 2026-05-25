import config from '../config';

import HomePage from '../pages/HomePage/index.js';
import ProductPage from '../pages/ProductPage/index.js';
import ContactPage from '../pages/ContactPage/index.js';
import AboutPage from '../pages/AboutPage/index.js';
import ServicesPage from '../pages/ServicesPage/index.js';
// import ProjectPage from '../pages/ProjectPage/index.js';

const publicRoutes = [
    {path: config.routes.home, component: HomePage},
    {path: config.routes.product, component: ProductPage},
    {path: config.routes.contact, component: ContactPage},
    {path: config.routes.aboutus, component: AboutPage},
    {path: config.routes.services, component: ServicesPage},
    // {path: config.routes.project, component: ProjectPage}
];

export {publicRoutes};