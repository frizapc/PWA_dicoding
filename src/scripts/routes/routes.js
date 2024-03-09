import CatalogElement from "../components/catalog-element";
import ContactElement from "../components/contact-element";
import DetailElement from "../components/detail-element";
import ReviewElement from "../components/review-element";

const routes = {
  "/": CatalogElement,
  "/jumbotron": CatalogElement,
  "/catalog": CatalogElement,
  "/contact": ContactElement,
  "/detail/:id": DetailElement,
  "/review/:id": ReviewElement,
};

export default routes;
