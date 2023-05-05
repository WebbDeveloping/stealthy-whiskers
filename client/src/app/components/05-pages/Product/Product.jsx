import React from "react";
import Footer from "../../03-organisms/Footer/Footer";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Navigation from "../../03-organisms/Navigation/Navigation";
import TestimonialSlider from "../../03-organisms/TestimonialSlider/TestimonialSlider";
import ProductHero from "../../03-organisms/ProductHero/ProductHero";

const product = {
  name: "Cat-Eye Goggles",
  Description:
    "Cat Eye Shields are the ultimate in military-grade protective eyewear for cats. Designed to protect your feline friend's eyes during any mission, these goggles are made with the highest quality materials to provide maximum protection against wind, dust, and other potential hazards.",
  Price: 20000,
  Handle: "cat-eye-goggles",
  Category: "Tactical Gear",
  PictureUrl:
    "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc6e30d1ede73497f655c_11.png",
  Brand: "Angular",
  Type: "Advanced",
  QuantityInStock: 100,
  discount: true,
  isNew: false,
  isBestSelling: false,
  featuredItem: false,
};

export default function Product(props) {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="page-content top-pad">
        <ProductHero product={product} />
        <div className="section wf-section">
          <div className="grid-wrapper">
            <div id="w-node-f59989fd-a716-e913-9e73-01ec47429b15-fcba7ab5">
              <div className="grid-wrapper">
                <div
                  id="w-node-_41d2a644-3414-98fa-4fd3-9c5776944cdd-fcba7ab5"
                  className="product-detail-grid"
                >
                  <div className="large-showcase-image">
                    <div className="half-content">
                      <div className="stacked-intro">
                        <div className="subtitle">Details</div>
                        <div className="stacked-intro small">
                          <div className="width-small">
                            <h1 className="heading large">
                              Why we made this Item
                            </h1>
                          </div>
                          <div className="width-small">
                            <div className="body-display">
                              The "Scratch Sniper Rifle" - a sniper rifle with a
                              built-in scratching post for the cat to use during
                              long-range missions.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_4a9ca632-777f-3877-b473-b9e09e957d63-fcba7ab5"
                        className="dual-button"
                      >
                        <a
                          href="#buy"
                          className="button dark w-inline-block w--current"
                        >
                          <div className="button-text-wrapper">
                            <div className="button-text">Buy now</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-detail-collection w-dyn-list">
                    <script
                      type="text/x-wf-template"
                      id="wf-template-22346cd5-c410-d130-5c92-484947edf321"
                    >
                      %3Cdiv%20role%3D%22listitem%22%20class%3D%22showcase-item%20w-dyn-item%20w-dyn-repeater-item%22%3E%3Cdiv%20class%3D%22showcase-grid-image%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fassets.website-files.com%2F642fc428f0c0b942b1ba7a71%2F642fc9e581dd73d908d49cac_hqvw.png%22%20loading%3D%22lazy%22%20alt%3D%22%22%20sizes%3D%22(max-width%3A%20767px)%2075vw%2C%20(max-width%3A%20991px)%2050vw%2C%20(max-width%3A%201439px)%206vw%2C%2012vw%22%20srcset%3D%22https%3A%2F%2Fassets.website-files.com%2F642fc428f0c0b942b1ba7a71%2F642fc9e581dd73d908d49cac_hqvw-p-500.png%20500w%2C%20https%3A%2F%2Fassets.website-files.com%2F642fc428f0c0b942b1ba7a71%2F642fc9e581dd73d908d49cac_hqvw-p-800.png%20800w%2C%20https%3A%2F%2Fassets.website-files.com%2F642fc428f0c0b942b1ba7a71%2F642fc9e581dd73d908d49cac_hqvw.png%201024w%22%20class%3D%22image%20full-width%22%2F%3E%3C%2Fdiv%3E%3C%2Fdiv%3E
                    </script>
                    <div
                      role="list"
                      className="showcase-grid w-dyn-items"
                      data-wf-collection="f_customer_images_8dr"
                      data-wf-template-id="wf-template-22346cd5-c410-d130-5c92-484947edf321"
                    >
                      <div
                        role="listitem"
                        className="showcase-item w-dyn-item w-dyn-repeater-item"
                      >
                        <div className="showcase-grid-image">
                          <img
                            src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e581dd73d908d49cac_hqvw.png"
                            loading="lazy"
                            alt=""
                            className="image full-width"
                          />
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="showcase-item w-dyn-item w-dyn-repeater-item"
                      >
                        <div className="showcase-grid-image">
                          <img
                            src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e0fd26aa799293aa68_lknw.png"
                            loading="lazy"
                            alt=""
                            className="image full-width"
                          />
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="showcase-item w-dyn-item w-dyn-repeater-item"
                      >
                        <div className="showcase-grid-image">
                          <img
                            src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png"
                            loading="lazy"
                            alt=""
                            className="image full-width"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-hide w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section no-padding grey wf-section">
          <div className="grid-wrapper">
            <div className="half-grid">
              <div className="half-image">
                <div className="background-wrapper">
                  <div className="product-benefit-background">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png"
                      loading="lazy"
                      alt=""
                      className="product-feature-image"
                    />
                  </div>
                </div>
              </div>
              <div className="half-content">
                <div className="stacked-intro">
                  <div className="subtitle">Our Fabric</div>
                  <div className="stacked-intro small">
                    <div className="width-large">
                      <h1 className="heading large">
                        hand crafted camo in every item
                      </h1>
                    </div>
                    <div className="width-small">
                      <div className="body-display">
                        The "Scratch Sniper Rifle" - a sniper rifle with a
                        built-in scratching post for the cat to use during
                        long-range missions.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#buy"
                  className="underline-link w-inline-block w--current"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text">Buy yours now</div>
                  </div>
                  <div className="link-arrow-wrapper">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
                      loading="lazy"
                      alt=""
                      className="arrow-icon"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section bottom-border wf-section">
          <div className="stacked-content">
            <div className="grid-wrapper">
              <div className="wrapper-intro centered">
                <div className="stacked-intro">
                  <div className="subtitle">more images</div>
                  <h1 className="heading large">For cats who mean business</h1>
                </div>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="w-dyn-list">
                <div
                  role="list"
                  className="customer-image-grid w-dyn-items"
                  data-wf-collection="f_customer_product_images_8dr16dr"
                  data-wf-template-id="wf-template-d9a1172d-2ad9-8b17-4a05-596a96ef6371"
                >
                  <div
                    role="listitem"
                    className="w-dyn-item w-dyn-repeater-item"
                  >
                    <div className="customer-image">
                      <div
                        //     style="
                        //   background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e0fd26aa799293aa68_lknw.png');
                        // "
                        className="background"
                      ></div>
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="w-dyn-item w-dyn-repeater-item"
                  >
                    <div className="customer-image">
                      <div
                        //     style="
                        //   background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e581dd73d908d49cac_hqvw.png');
                        // "
                        className="background"
                      ></div>
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="w-dyn-item w-dyn-repeater-item"
                  >
                    <div className="customer-image">
                      <div
                        //     style="
                        //   background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png');
                        // "
                        className="background"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="w-dyn-hide w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
            <div className="grid-wrapper">
              <a
                href="#buy"
                id="w-node-_72602cd5-683c-6ea5-0d2f-7a3cbf8f4f27-fcba7ab5"
                className="button dark w-inline-block w--current"
              >
                <div className="button-text-wrapper">
                  <div className="button-text">Buy now</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="section no-bottom-padding wf-section">
          <div className="stacked-content">
            <div className="grid-wrapper">
              <div
                id="w-node-ffa86c75-f896-198a-f483-766bd5ccffe8-fcba7ab5"
                className="wrapper-intro"
              >
                <div className="stacked-intro">
                  <div className="subtitle">RELATED</div>
                  <h1 className="heading">People also bought</h1>
                </div>
                <a
                  id="w-node-ffa86c75-f896-198a-f483-766bd5ccffee-fcba7ab5"
                  href="/shop"
                  className="underline-link w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text">Shop all</div>
                  </div>
                  <div className="link-arrow-wrapper">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
                      loading="lazy"
                      alt=""
                      className="arrow-icon"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="stacked-content large">
              <div className="grid-wrapper">
                <div
                  id="w-node-ffa86c75-f896-198a-f483-766bd5ccfff6-fcba7ab5"
                  className="related-products"
                >
                  <div
                    id="w-node-ffa86c75-f896-198a-f483-766bd5ccfff7-fcba7ab5"
                    className="w-dyn-list"
                  >
                    <div role="list" className="product-grid w-dyn-items">
                      <div
                        role="listitem"
                        className="large-collection-item w-dyn-item"
                      >
                        <a
                          href="/product/tactical-scratching-post"
                          className="product-card w-inline-block"
                        >
                          <div className="card-image-wrapper">
                            <div className="card-image extra-large">
                              <div className="background-product">
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9a4a0da1f76aae7aa45_16.png');
                                  //   "
                                  className="image-card one"
                                ></div>
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9a717164850bfeaa1e3_17.png');
                                  //   "
                                  className="image-card two"
                                ></div>
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9a717164850bfeaa1e3_17.png');
                                  //   "
                                  className="image-card three"
                                ></div>
                              </div>
                              <div className="image-indicator">
                                <div className="indicator-fill"></div>
                              </div>
                            </div>
                          </div>
                          <div className="card-info">
                            <div
                              id="w-node-ffa86c75-f896-198a-f483-766bd5cd0004-fcba7ab5"
                              className="product-card-top"
                            >
                              <div className="product-card-info">
                                <div className="product-tags">
                                  <div className="new-tag w-condition-invisible">
                                    <div className="label-text">New</div>
                                  </div>
                                  <div className="discount-label w-condition-invisible">
                                    <img
                                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b989cbba7b18_tag---filled-Red(24x24)%402x.svg"
                                      loading="lazy"
                                      id="w-node-ffa86c75-f896-198a-f483-766bd5cd000b-fcba7ab5"
                                      alt=""
                                      className="tag-icon"
                                    />
                                    <div className="label-text discount w-dyn-bind-empty"></div>
                                  </div>
                                </div>
                                <div className="stacked-product-title">
                                  <h3 className="product-title">
                                    Tactical Scratching Post
                                  </h3>
                                  <div className="subtitle small">Camo</div>
                                </div>
                              </div>
                              <div className="dynamic-price">
                                <div
                                  data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                  className="price-text"
                                >
                                  $&nbsp;59.00&nbsp;USD
                                </div>
                                <div
                                  data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                  className="discount-text w-dyn-bind-empty"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="large-collection-item w-dyn-item"
                      >
                        <a
                          href="/product/kitty-kevlar-cap"
                          className="product-card w-inline-block"
                        >
                          <div className="card-image-wrapper">
                            <div className="card-image extra-large">
                              <div className="background-product">
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9cd5e9c6b5efd29eba6_10.png');
                                  //   "
                                  className="image-card one"
                                ></div>
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/64304a22b7123f4c3cd3b567_helm-5.png');
                                  //   "
                                  className="image-card two"
                                ></div>
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc6d862ccd0f93ec4d89c_8.png');
                                  //   "
                                  className="image-card three"
                                ></div>
                              </div>
                              <div className="image-indicator">
                                <div className="indicator-fill"></div>
                              </div>
                            </div>
                          </div>
                          <div className="card-info">
                            <div
                              id="w-node-ffa86c75-f896-198a-f483-766bd5cd0004-fcba7ab5"
                              className="product-card-top"
                            >
                              <div className="product-card-info">
                                <div className="product-tags">
                                  <div className="new-tag">
                                    <div className="label-text">New</div>
                                  </div>
                                  <div className="discount-label w-condition-invisible">
                                    <img
                                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b989cbba7b18_tag---filled-Red(24x24)%402x.svg"
                                      loading="lazy"
                                      id="w-node-ffa86c75-f896-198a-f483-766bd5cd000b-fcba7ab5"
                                      alt=""
                                      className="tag-icon"
                                    />
                                    <div className="label-text discount w-dyn-bind-empty"></div>
                                  </div>
                                </div>
                                <div className="stacked-product-title">
                                  <h3 className="product-title">
                                    Kitty Kevlar Cap
                                  </h3>
                                  <div className="subtitle small">
                                    Rich black
                                  </div>
                                </div>
                              </div>
                              <div className="dynamic-price">
                                <div
                                  data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                  className="price-text"
                                >
                                  $&nbsp;89.00&nbsp;USD
                                </div>
                                <div
                                  data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                  className="discount-text w-dyn-bind-empty"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="large-collection-item w-dyn-item"
                      >
                        <a
                          href="/product/tactical-climbing-harnesses"
                          className="product-card w-inline-block"
                        >
                          <div className="card-image-wrapper">
                            <div className="card-image extra-large">
                              <div className="background-product">
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9b9a0adeb47509a7825_oinew.png');
                                  //   "
                                  className="image-card one"
                                ></div>
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9bd1df41e0af4709846_nlknlik.png');
                                  //   "
                                  className="image-card two"
                                ></div>
                                <div
                                  //       style="
                                  //     background-image: url('https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc6885d245dd2e789d27c_3.png');
                                  //   "
                                  className="image-card three"
                                ></div>
                              </div>
                              <div className="image-indicator">
                                <div className="indicator-fill"></div>
                              </div>
                            </div>
                          </div>
                          <div className="card-info">
                            <div
                              id="w-node-ffa86c75-f896-198a-f483-766bd5cd0004-fcba7ab5"
                              className="product-card-top"
                            >
                              <div className="product-card-info">
                                <div className="product-tags">
                                  <div className="new-tag">
                                    <div className="label-text">New</div>
                                  </div>
                                  <div className="discount-label w-condition-invisible">
                                    <img
                                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b989cbba7b18_tag---filled-Red(24x24)%402x.svg"
                                      loading="lazy"
                                      id="w-node-ffa86c75-f896-198a-f483-766bd5cd000b-fcba7ab5"
                                      alt=""
                                      className="tag-icon"
                                    />
                                    <div className="label-text discount w-dyn-bind-empty"></div>
                                  </div>
                                </div>
                                <div className="stacked-product-title">
                                  <h3 className="product-title">
                                    Tactical Climbing Harnesses
                                  </h3>
                                  <div className="subtitle small">Camo</div>
                                </div>
                              </div>
                              <div className="dynamic-price">
                                <div
                                  data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                  className="price-text"
                                >
                                  $&nbsp;79.00&nbsp;USD
                                </div>
                                <div
                                  data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                  className="discount-text w-dyn-bind-empty"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialSlider />
        <FollowUs />
      </div>
      <Footer />
    </div>
  );
}
