import logo from "./logo-Image/logo.png";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  NavDropdown,

  Table,
  Stack,
  Button,
  Card,
} from "react-bootstrap"; // Import Nav and Dropdown from react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faBell,
  faPhone,
  faBlog,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
// import walmart from "./logo-Image/walmart.png";
import walmart from "../../../public/logo-Image/walmart.png";
import eBay from "../../../public/logo-Image/ebay.png";
import aliexpress from "../../../public/logo-Image/aliexpress.png";
import amazon from "../../../public/logo-Image/amazon.png";

import book from "../../../public/logo-Image/books.jpg";
import game from "../../../public/logo-Image/Games.png";
import fashion from "../../../public/logo-Image/fashion1.jpg"
import beauty from "../../../public/logo-Image/beauty.jpg";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faClock,
  faStar,
  faComment,
  faCheckCircle,
  faTruck,
  faDollarSign,
  faDownLong,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";

import c1 from "../../../public/uploads/c4.png";
import c2 from "../../../public/uploads/c5.png";
import c3 from "../../../public/uploads/c6.png";
import { MegaMenu } from "primereact/megamenu";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";

import Footer from "./Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Appbar from "./Components/Appbar";

import { BiSupport, BiFile } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Accordion from "./Components/Accordion";





function Home() {
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [platformSortBy, setPlatformSortBy] = useState("up");

  const [detailSortBy, setDetailSortBy] = useState("up");

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  library.add(faHome, faBell, faPhone, faBlog);

  const categories = [
    "Electronics",
    "Books",
    "Clothing, Shoes & Jewelry",
    "Home & Kitchen",
    "Health & Household",
    "Beauty & Personal Care",
    "Toys & Games",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Automotive",
    "Pet Supplies",
    "Baby",
    "Movies & TV Shows",
    "Music",
    "Grocery & Gourmet Food",
    "Computers & Accessories",
    "Office Products",
    "Industrial & Scientific",
    "Arts, Crafts & Sewing",
    "Garden & Outdoor",
  ];




  const items = [
    {
      label: "Electronics",
      icon: "pi pi-fw pi-electric",
      items: [
        [
          {
            label: "Camera & Photo",
            items: [
              { label: "DSLR Cameras" },
              { label: "Mirrorless Cameras" },
              { label: "Point & Shoot Cameras" },
            ],
          },
          {
            label: "Headphones",
            items: [
              { label: "Over-Ear Headphones" },
              { label: "In-Ear Headphones" },
              { label: "Noise-Canceling Headphones" },
            ],
          },

          {
            label: "Wearable Technology",
            items: [
              { label: "Smartwatches" },
              { label: "Fitness Trackers" },
              { label: "Virtual Reality Headsets" },
            ],
          },
          {
            label: "Home Audio & Theater",
            items: [
              { label: "Soundbars" },
              { label: "Home Theater Systems" },
              { label: "Wireless & Bluetooth Speakers" },
            ],
          },

          {
            label: "Car Electronics",
            items: [
              { label: "Car Stereos" },
              { label: "Car Speakers" },
              { label: "Car GPS Units" },
            ],
          },
          {
            label: "Musical Instruments",
            items: [
              { label: "Guitars" },
              { label: "Keyboards" },
              { label: "Drums & Percussion" },
            ],
          },

          {
            label: "GPS & Navigation",
            items: [
              { label: "Handheld GPS" },
              { label: "Car GPS" },
              { label: "Marine GPS" },
            ],
          },
        ],
      ],
    },

    {
      label: "Books",
      icon: "pi pi-fw pi-book",
      items: [
        [
          {
            label: "Literature & Fiction",
            items: [
              { label: "Contemporary Fiction" },
              { label: "Classic Literature" },
              { label: "Historical Fiction" },
            ],
          },
          {
            label: "Mystery, Thriller & Suspense",
            items: [
              { label: "Police Procedurals" },
              { label: "Psychological Thrillers" },
              { label: "Legal Thrillers" },
            ],
          },

          {
            label: "Science Fiction & Fantasy",
            items: [
              { label: "Space Opera" },
              { label: "Epic Fantasy" },
              { label: "Urban Fantasy" },
            ],
          },
          {
            label: "Romance",
            items: [
              { label: "Historical Romance" },
              { label: "Paranormal Romance" },
              { label: "Contemporary Romance" },
            ],
          },

          {
            label: "Biographies & Memoirs",
            items: [
              { label: "Autobiographies" },
              { label: "Memoirs of Public Figures" },
              { label: "Personal Journals" },
            ],
          },
          {
            label: "History",
            items: [
              { label: "Ancient History" },
              { label: "World War II History" },
              { label: "Cultural History" },
            ],
          },

          {
            label: "Self-Help",
            items: [
              { label: "Personal Development" },
              { label: "Motivational" },
              { label: "Time Management" },
            ],
          },
          {
            label: "Cookbooks, Food & Wine",
            items: [
              { label: "Quick & Easy Cooking" },
              { label: "Baking" },
              { label: "International Cuisine" },
            ],
          },
        ],
      ],
    },

    {
      label: "Clothing, Shoes & Jewelry",
      icon: "pi pi-fw pi-book",
      items: [
        [
          {
            label: "Women",
            items: [
              { label: "Dresses" },
              { label: "Tops" },
              { label: "Bottoms" },
            ],
          },
          {
            label: "Men",
            items: [
              { label: "Shirts" },
              { label: "Pants" },
              { label: "Outerwear" },
            ],
          },
          ,
          {
            label: "Handbags & Accessories",
            items: [
              { label: "Tote Bags" },
              { label: "Wallets" },
              { label: "Sunglasses" },
            ],
          },

          {
            label: "Girls",
            items: [
              { label: "Dresses" },
              { label: "Tops" },
              { label: "Shoes" },
            ],
          },
          {
            label: "Boys",
            items: [
              { label: "T-Shirts" },
              { label: "Jeans" },
              { label: "Activewear" },
            ],
          },

          {
            label: "Baby",
            items: [
              { label: "Bodysuits" },
              { label: "Sleepwear" },
              { label: "Accessories" },
            ],
          },
          {
            label: "Shoes",
            items: [
              { label: "Sneakers" },
              { label: "Sandals" },
              { label: "Sandals" },
            ],
          },

          {
            label: "Jewelry",
            items: [
              { label: "Necklaces" },
              { label: "Earrings" },
              { label: "Bracelets" },
            ],
          },
          {
            label: "Watches",
            items: [
              { label: "Analog Watches" },
              { label: "BakingDigital Watches" },
              { label: "Smartwatches" },
            ],
          },
        ],
      ],
    },

    {
      label: "Home & Kitchen",
      icon: "pi pi-fw pi-book",
      items: [
        [
          {
            label: "Kitchen & Dining",
            items: [
              { label: "Cookware Sets" },
              { label: "Small Appliances" },
              { label: "Cutlery & Knife Accessories" },
            ],
          },
          {
            label: "Furniture",
            items: [
              { label: "Living Room Furniture" },
              { label: "Bedroom Furniture" },
              { label: "Dining Room Furniture" },
            ],
          },
          ,
          {
            label: "Bedding",
            items: [
              { label: "Bed Sheets" },
              { label: "Comforters" },
              { label: " Mattress Toppers" },
            ],
          },

          {
            label: "Bath",
            items: [
              { label: "Towels" },
              { label: "Shower Curtains" },
              { label: "Bathroom Storage" },
            ],
          },
          {
            label: "Home Décor",
            items: [
              { label: "Wall Clocks" },
              { label: " Decorative Pillows" },
              { label: "Wall Mirrors" },
            ],
          },

          {
            label: "Wall Art",
            items: [
              { label: "Canvas Art" },
              { label: "Framed Prints" },
              { label: "Wall Decals" },
            ],
          },
          {
            label: "Lighting",
            items: [
              { label: "Table Lamps" },
              { label: "Pendant Lights" },
              { label: "Chandeliers" },
            ],
          },

          {
            label: "Storage & Organization",
            items: [
              { label: "Storage Bins" },
              { label: "Closet Organizers" },
              { label: "Shelving Units" },
            ],
          },
        ],
      ],
    },

    {
      label: "Health & Household",
      icon: "pi pi-fw pi-book",
      items: [
        [
          {
            label: "Health Care",
            items: [
              { label: "Pain Relief" },
              { label: "Allergy & Sinus" },
              { label: "Cough & Cold" },
            ],
          },
          {
            label: "Household Supplies",
            items: [
              { label: "Cleaning Supplies" },
              { label: "Paper Towels" },
              { label: "Trash Bags" },
            ],
          },
          ,
          {
            label: "Sexual Wellness",
            items: [
              { label: "Pregnancy Tests" },
              { label: "Condoms" },
              { label: "Lubricants" },
            ],
          },

          {
            label: "Girls",
            items: [
              { label: "Dresses" },
              { label: "Tops" },
              { label: "Shoes" },
            ],
          },
          {
            label: "Sports Nutrition",
            items: [
              { label: "Protein Powders" },
              { label: "Energy Bars" },
              { label: "Amino Acid Supplements" },
            ],
          },

          {
            label: "Vitamins & Dietary Supplements",
            items: [
              { label: "Multivitamins" },
              { label: "Vitamin D" },
              { label: "Fish Oil Supplements" },
            ],
          },

        ],
      ],
    },


  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onChangePlatformSortBy = (value) => {
    setPlatformSortBy(value);
  };

  const onChangeDetailSortBy = (value) => {
    setDetailSortBy(value);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };












  const renderSubcategories = (subcategories) => {
    return (
      <ul className="categories ps-0 mb-0">
        {subcategories.map((subItem) => (
          <li key={subItem.label}>
            <a href="/">{subItem.label}</a>
            {subItem.items && renderSubcategories(subItem.items)}
          </li>
        ))}
      </ul>
    );
  };

  const renderMenu = () => {
    return categories.map((category) => {
      const categoryItem = items.find((item) => item.label === category);
      return (
        <ul className="categories ps-0 mb-0" key={category}>
          <li>
            <a href="">{category}</a>
            {categoryItem && renderSubcategories(categoryItem.items[0])}
          </li>
        </ul>
      );
    });
  };



  return (
    <>
      <Appbar />
      <div className="banner ">
        <div className="container mt-2 ">
          <div
            className="row align-items-stretch justify-content-center "
          // style={{ overflow: "hidden" }}
          >
            {/* <div className="px-1 d-none d-md-block col-md-3 h-100 position-relative  " >
            

              {renderMenu().slice(0, Math.ceil(renderMenu().length / 2))}
               </div> */}
            <div className="px-1 col-md-9 h-100">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={c1}
                      alt="slide"
                      style={{ height: "100%", objectFit: "fill" }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={c2}
                      alt="slide"
                      style={{ height: "100%", objectFit: "fill" }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={c3}
                      alt="slide"
                      style={{ height: "100%", objectFit: "fill" }}
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            {/* <div className="px-1 d-none d-md-block col-md-3 h-100 position-relative  " >


              {renderMenu().slice(Math.ceil(renderMenu().length / 2))}
              </div> */}
          </div>
        </div>
      </div>

      <div
        className="container products_section"

      >
        <div className="product_filter d-flex justify-content-md-end flex-wrap justify-content-center">
          <div className="p-2 d-flex align-items-center">
            <p className="mb-0" style={{ minWidth: "70px" }}>
              Sort By
            </p>
            <Form.Select
              id="plateform"
              className="form-select"
              style={{ color: "black" }}
            >
              <option selected disabled>
                Filter By Platform
              </option>
              <option value="Amazon">Amazon</option>
              <option value="eBay">eBay</option>
              <option value="Walmart">Walmart</option>
              <option value="Ali Express">Ali Express</option>
            </Form.Select>
            <div className="ms-3">
              {platformSortBy === "down" ? (
                <FontAwesomeIcon
                  icon={faDownLong}
                  onClick={() => {
                    onChangePlatformSortBy("up");
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUpLong}
                  onClick={() => {
                    onChangePlatformSortBy("down");
                  }}
                />
              )}
            </div>
          </div>
          <div className="p-2 d-flex align-items-center">
            <p className="mb-0" style={{ minWidth: "70px" }}>
              Sort By
            </p>
            <Form.Select
              id="plateform"
              className="form-select"
              style={{ color: "black" }}
            >
              <option selected>High to Low Price</option>
              <option>Low to High Price</option>
              <option value="Amazon">Rating</option>
              <option value="eBay">Reviews</option>
              <option value="Walmart">Shipping Time</option>
              <option value="Ali Express">Shipping Cost</option>
            </Form.Select>
            <div className="ms-3">
              {detailSortBy === "down" ? (
                <FontAwesomeIcon
                  icon={faDownLong}
                  onClick={() => {
                    onChangeDetailSortBy("up");
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUpLong}
                  onClick={() => {
                    onChangeDetailSortBy("down");
                  }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="products">
          <div className="product_cover d-flex flex-lg-row flex-column justify-content-center align-items-center align-items-lg-start justify-content-md-start flex-wrap flex-md-nowrap">

            <div
              style={{ width: "300px", height: "300px", aspectRatio: "3/1" }}
            >
              <img
                src="https://m.media-amazon.com/images/I/81sTUHkUHaL._AC_SX679_.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>



            <div className="col d-flex align-items-start flex-column flex-lg-row">
              <div className="my-4 my-md-0">
                <div style={{ fontSize: "22px" }}>
                  <a href="/IPHONE 14" className="product_name">
                    Safety Pin <b>Its a Dummy data (USA) Zain Ul Hassan</b>
                  </a>
                </div>
                <div
                  className="mt-2 d-block"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  Prym Large 20 PC Safety Pins, Zinc Count
                </div>
                <div className="mt-3 d-flex flex-wrap flex-row" style={{ fontSize: "15px" }}>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Discount: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faClock} />
                    Shipping Time: 2 Days</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faComment} />
                    Reviews: 128</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Offer: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faCheckCircle} />
                    sold: 120</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faStar} />
                    Rating: 4.5</div>
                </div>
              </div>


              <div className="text-end d-flex flex-row col-12 flex-lg-column justify-content-between  col-lg"
                style={{ minWidth: "200px" }}
              >
                <div className="brand_image container">
                  <img
                    src={amazon}
                    alt="brand_image"
                    style={{
                      width: "150px",
                      height: "90px",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-end data container">
                  <table style={{ margin: "0 0 0 auto" }}>
                    <tr>
                      <td
                        className="color_primary shipping"
                        style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                      >
                        <FontAwesomeIcon
                          icon={faTruck}
                          className="color_primary"
                        />{" "}
                        Free
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="color_primary cost"
                        style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                      >
                        <FontAwesomeIcon icon={faDollarSign} /> 1
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="color_primary total"
                        style={{ fontWeight: "bold", fontSize: "2rem" }}
                      >
                        <FontAwesomeIcon
                          icon={faDollarSign}
                          className="color_primary"
                        />{" "}
                        1
                      </td>
                    </tr>
                  </table>
                  <hr />
                  <a target="_blank" href="https://www.amazon.com/Pyrm-Large-Safety-Pins-Count/dp/B00NEBCZVE/ref=sr_1_7?crid=39M89PMGIAJIK&amp;keywords=safety+pins&amp;qid=1695979362&amp;refresh=1&amp;sprefix=safety+pins%252Caps%252C426&amp;sr=8-7&_encoding=UTF8&tag=helpermall-20&linkCode=ur2&linkId=30e2d492ce58659acf1084ecf43d234e&camp=1789&creative=9325">
                    <button className="btn btn-primary-amazon">Buy Now</button>
                  </a>

                </div>
              </div>
            </div>
          </div>

        </div>




        <div className="products">

          <div className="product_cover d-flex flex-lg-row flex-column justify-content-center align-items-center align-items-lg-start justify-content-md-start flex-wrap flex-md-nowrap">
            <div
              style={{ width: "300px", height: "300px", aspectRatio: "3/1" }}
            >
              <img
                src="https://m.media-amazon.com/images/I/61jXKhfDa8L._AC_SX679_.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="col d-flex align-items-start flex-column flex-lg-row">
              <div className="my-4 my-md-0">
                <div style={{ fontSize: "22px" }}>
                  <a href="#" className="product_name">
                    Safe and Sound Safety Pins
                  </a>
                </div>
                <div
                  className="mt-2 d-block"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div>
                <div className="mt-3 d-flex flex-wrap flex-row" style={{ fontSize: "15px" }}>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Discount: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faClock} />
                    Shipping Time: 2 Days</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faComment} />
                    Reviews: 128</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Offer: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faCheckCircle} />
                    sold: 120</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faStar} />
                    Rating: 4.5</div>
                </div>
              </div>

              <div
                className="text-end col-12 col-md"
                style={{ minWidth: "200px" }}
              >
                <div className="brand_image">
                  <img
                    src={walmart}
                    alt="brand_image"
                    style={{
                      width: "150px",
                      height: "90px",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <table style={{ margin: "0 0 0 auto" }}>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="color_primary"
                      />{" "}
                      9.80
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      <FontAwesomeIcon icon={faDollarSign} /> 90.00
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "2rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className="color_primary"
                      />{" "}
                      1
                    </td>
                  </tr>
                </table>
                <hr />
                <a target="_blank" href="https://www.amazon.co.uk/Locking-Markers-Colorful-Crochet-Knitting/dp/B09TMXCYZZ/ref=sr_1_10?crid=2SJX1V3J1MYUX&amp;keywords=safety+pin+pin&amp;qid=1695208400&amp;refinements=p_n_free_shipping_eligible%253A20930951031&amp;rnid=20930950031&amp;sprefix=saft%252Caps%252C629&amp;sr=8-10&_encoding=UTF8&tag=helpermall245-21&linkCode=ur2&linkId=377e1fb6f1ba12098dec8609336ebc5c&camp=1634&creative=6738">
                  <button class="btn btn-primary-walmart" style={{ fontWeight: "bold" }}>Buy Now</button>
                </a>


              </div>
            </div>
          </div>
          <div className="product_cover d-flex flex-lg-row flex-column justify-content-center align-items-center align-items-lg-start justify-content-md-start flex-wrap flex-md-nowrap">
            <div
              style={{ width: "300px", height: "300px", aspectRatio: "3/1" }}
            >
              <img
                src="https://m.media-amazon.com/images/I/61jXKhfDa8L._AC_SX679_.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="col d-flex align-items-start flex-column flex-lg-row">
              <div className="my-4 my-md-0">
                <div style={{ fontSize: "22px" }}>
                  <a href="#" className="product_name">
                    Safe and Sound Safety Pins
                  </a>
                </div>
                <div
                  className="mt-2 d-block"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div>
                <div className="mt-3 d-flex flex-wrap flex-row" style={{ fontSize: "15px" }}>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Discount: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faClock} />
                    Shipping Time: 2 Days</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faComment} />
                    Reviews: 128</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Offer: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faCheckCircle} />
                    sold: 120</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faStar} />
                    Rating: 4.5</div>
                </div>
              </div>

              <div
                className="text-end col-12 col-md"
                style={{ minWidth: "200px" }}
              >
                <div className="brand_image">
                  <img
                    src={amazon}
                    alt="brand_image"
                    style={{
                      width: "150px",
                      height: "90px",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <table style={{ margin: "0 0 0 auto" }}>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="color_primary"
                      />{" "}
                      9.80
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      <FontAwesomeIcon icon={faDollarSign} /> 90.00
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "2rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className="color_primary"
                      />{" "}
                      1
                    </td>
                  </tr>
                </table>
                <hr />
                <a target="_blank" href="https://www.amazon.co.uk/Locking-Markers-Colorful-Crochet-Knitting/dp/B09TMXCYZZ/ref=sr_1_10?crid=2SJX1V3J1MYUX&amp;keywords=safety+pin+pin&amp;qid=1695208400&amp;refinements=p_n_free_shipping_eligible%253A20930951031&amp;rnid=20930950031&amp;sprefix=saft%252Caps%252C629&amp;sr=8-10&_encoding=UTF8&tag=helpermall245-21&linkCode=ur2&linkId=377e1fb6f1ba12098dec8609336ebc5c&camp=1634&creative=6738">
                  <button class="btn btn-primary-amazon " style={{ fontWeight: "bold" }}>Buy Now</button>
                </a>

              </div>
            </div>
          </div>
          <div className="product_cover d-flex flex-lg-row flex-column justify-content-center align-items-center align-items-lg-start justify-content-md-start flex-wrap flex-md-nowrap">
            <div
              style={{ width: "300px", height: "300px", aspectRatio: "3/1" }}
            >
              <img
                src="https://m.media-amazon.com/images/I/61jXKhfDa8L._AC_SX679_.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="col d-flex align-items-start flex-column flex-lg-row">
              <div className="my-4 my-md-0">
                <div style={{ fontSize: "22px" }}>
                  <a href="#" className="product_name">
                    Safe and Sound Safety Pins
                  </a>
                </div>
                <div
                  className="mt-2 d-block"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div>
                <div className="mt-3 d-flex flex-wrap flex-row" style={{ fontSize: "15px" }}>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Discount: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faClock} />
                    Shipping Time: 2 Days</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faComment} />
                    Reviews: 128</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Offer: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faCheckCircle} />
                    sold: 120</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faStar} />
                    Rating: 4.5</div>
                </div>
              </div>

              <div
                className="text-end col-12 col-md"
                style={{ minWidth: "200px" }}
              >
                <div className="brand_image">
                  <img
                    src={aliexpress}
                    alt="brand_image"
                    style={{
                      width: "150px",
                      height: "90px",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <table style={{ margin: "0 0 0 auto" }}>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="color_primary"
                      />{" "}
                      9.80
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      <FontAwesomeIcon icon={faDollarSign} /> 90.00
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "2rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className="color_primary"
                      />{" "}
                      1
                    </td>
                  </tr>
                </table>
                <hr />
                <a target="_blank" href="https://www.amazon.co.uk/Locking-Markers-Colorful-Crochet-Knitting/dp/B09TMXCYZZ/ref=sr_1_10?crid=2SJX1V3J1MYUX&amp;keywords=safety+pin+pin&amp;qid=1695208400&amp;refinements=p_n_free_shipping_eligible%253A20930951031&amp;rnid=20930950031&amp;sprefix=saft%252Caps%252C629&amp;sr=8-10&_encoding=UTF8&tag=helpermall245-21&linkCode=ur2&linkId=377e1fb6f1ba12098dec8609336ebc5c&camp=1634&creative=6738">
                  <button class="btn btn-primary-aliexpress" style={{ fontWeight: "bold" }}>Buy Now</button>
                </a>

              </div>
            </div>
          </div>
          <div className="product_cover d-flex flex-lg-row flex-column justify-content-center align-items-center align-items-lg-start justify-content-md-start flex-wrap flex-md-nowrap">
            <div
              style={{ width: "300px", height: "300px", aspectRatio: "3/1" }}
            >
              <img
                src="https://m.media-amazon.com/images/I/61jXKhfDa8L._AC_SX679_.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="col d-flex align-items-start flex-column flex-lg-row">
              <div className="my-4 my-md-0">
                <div style={{ fontSize: "22px" }}>
                  <a href="#" className="product_name">
                    Safe and Sound Safety Pins
                  </a>
                </div>
                <div
                  className="mt-2 d-block"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div>
                <div className="mt-3 d-flex flex-wrap flex-row" style={{ fontSize: "15px" }}>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Discount: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faClock} />
                    Shipping Time: 2 Days</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faComment} />
                    Reviews: 128</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faTags} />
                    Offer: 0.00</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faCheckCircle} />
                    sold: 120</div>
                  <div className="d-flex align-items-center" style={{ minWidth: "180px", marginRight: "10px" }}><FontAwesomeIcon style={{ marginRight: "10px" }} className="color_primary" icon={faStar} />
                    Rating: 4.5</div>
                </div>
              </div>

              <div
                className="text-end col-12 col-md"
                style={{ minWidth: "200px" }}
              >
                <div className="brand_image">
                  <img
                    src={eBay}
                    alt="brand_image"
                    style={{
                      width: "150px",
                      height: "90px",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <table style={{ margin: "0 0 0 auto" }}>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="color_primary"
                      />{" "}
                      9.80
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      <FontAwesomeIcon icon={faDollarSign} /> 90.00
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="color_primary"
                      style={{ fontWeight: "bold", fontSize: "2rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className="color_primary"
                      />{" "}
                      1
                    </td>
                  </tr>
                </table>
                <hr />
                <a target="_blank" href="https://www.amazon.co.uk/Locking-Markers-Colorful-Crochet-Knitting/dp/B09TMXCYZZ/ref=sr_1_10?crid=2SJX1V3J1MYUX&amp;keywords=safety+pin+pin&amp;qid=1695208400&amp;refinements=p_n_free_shipping_eligible%253A20930951031&amp;rnid=20930950031&amp;sprefix=saft%252Caps%252C629&amp;sr=8-10&_encoding=UTF8&tag=helpermall245-21&linkCode=ur2&linkId=377e1fb6f1ba12098dec8609336ebc5c&camp=1634&creative=6738">
                  <button class="btn btn-primary-ebay" style={{ fontWeight: "bold" }}>Buy Now</button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div >

      <Container className="featured_products">
        <h2 className="mb-4 fw-bold" style={{ marginTop: "80px" }}>
          Featured Products
        </h2>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-xl-3 mt-4">
            <div className="product-container">
              <div className="product_image_cover">
                <img
                  className="product_image"
                  src="https://m.media-amazon.com/images/I/61jXKhfDa8L._AC_SX679_.jpg"
                  width="100%"
                  height="100%"
                  alt="Product Image"
                />
              </div>
              <div className="product_details">
                <h2 className="product-name">Title</h2>
                {/* <div
                  className="product-title"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  {" "}
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div> */}
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon className="color_primary" icon={faStar} />{" "}
                    Rating: 4.5
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    <FontAwesomeIcon
                      className="color_primary"
                      icon={faComment}
                    />{" "}
                    Reviews: 128
                  </div>

                </div>
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "25px" }}>
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="color_primary"
                    />{" "}
                    1
                  </div>
                  <div className="brand_image">
                    <img
                      src={aliexpress}
                      alt="brand_image"
                      style={{
                        width: "100px",
                        height: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                </div>
                <a target="_blank" href="https://www.amazon.co.uk/Safe-Sound-Safety-Assorted-Lengths/dp/B0774XH9G1/ref=sr_1_36?keywords=safety+pin&amp;qid=1694629339&amp;sr=8-36&_encoding=UTF8&tag=helpermall245-21&linkCode=ur2&linkId=2bfd3acef913a2791e88bf5c583c6499&camp=1634&creative=6738">
                  <button
                    className="btn btn-primary "
                    style={{ borderRadius: "0px" }}
                  >
                    Buy Now
                  </button>
                </a>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xl-3 mt-4">
            <div className="product-container">
              <div className="product_image_cover">
                <img
                  className="product_image"
                  src="https://m.media-amazon.com/images/I/61jXKhfDa8L._AC_SX679_.jpg"
                  width="100%"
                  height="100%"
                  alt="Product Image"
                />
              </div>
              <div className="product_details">
                <h2 className="product-name">Title</h2>
                {/* <div
                  className="product-title"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  {" "}
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div> */}
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon className="color_primary" icon={faStar} />{" "}
                    Rating: 4.5
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    <FontAwesomeIcon
                      className="color_primary"
                      icon={faComment}
                    />{" "}
                    Reviews: 128
                  </div>
                </div>
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "25px" }}>
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="color_primary"
                    />{" "}
                    1
                  </div>
                  <div className="brand_image">
                    <img
                      src={eBay}
                      alt="brand_image"
                      style={{
                        width: "100px",
                        height: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                </div>
                <a target="_blank" href="https://www.amazon.co.uk/Safe-Sound-Safety-Assorted-Lengths/dp/B0774XH9G1/ref=sr_1_36?keywords=safety+pin&amp;qid=1694629339&amp;sr=8-36&_encoding=UTF8&tag=helpermall245-21&linkCode=ur2&linkId=2bfd3acef913a2791e88bf5c583c6499&camp=1634&creative=6738">
                  <button
                    className="btn btn-primary "
                    style={{ borderRadius: "0px" }}
                  >
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xl-3 mt-4">
            <div className="product-container">
              <div className="product_image_cover">
                <img
                  className="product_image"
                  src="https://m.media-amazon.com/images/I/61jXKhfDa8L._AC_SX679_.jpg"
                  width="100%"
                  height="100%"
                  alt="Product Image"
                />
              </div>
              <div className="product_details">
                <h2 className="product-name">Title</h2>
                {/* <div
                  className="product-title"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  {" "}
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div> */}
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon className="color_primary" icon={faStar} />{" "}
                    Rating: 4.5
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    <FontAwesomeIcon
                      className="color_primary"
                      icon={faComment}
                    />{" "}
                    Reviews: 128
                  </div>
                </div>
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "25px" }}>
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="color_primary"
                    />{" "}
                    1
                  </div>
                  <div className="brand_image">
                    <img
                      src={amazon}
                      alt="brand_image"
                      style={{
                        width: "100px",
                        height: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                </div>
                <a target="_blank" href="https://www.amazon.co.uk/Safe-Sound-Safety-Assorted-Lengths/dp/B0774XH9G1/ref=sr_1_36?keywords=safety+pin&amp;qid=1694629339&amp;sr=8-36&_encoding=UTF8&tag=helpermall245-21&linkCode=ur2&linkId=2bfd3acef913a2791e88bf5c583c6499&camp=1634&creative=6738">
                  <button
                    className="btn btn-primary "
                    style={{ borderRadius: "0px" }}
                  >
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xl-3 mt-4">
            <div className="product-container">
              <div className="product_image_cover">
                <img
                  className="product_image"
                  src="https://m.media-amazon.com/images/I/61jXKhfDa8L._AC_SX679_.jpg"
                  width="100%"
                  height="100%"
                  alt="Product Image"
                />
              </div>
              <div className="product_details">
                <h2 className="product-name">Title</h2>
                {/* <div
                  className="product-title"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  {" "}
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div> */}
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon className="color_primary" icon={faStar} />{" "}
                    Rating: 4.5
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    <FontAwesomeIcon
                      className="color_primary"
                      icon={faComment}
                    />{" "}
                    Reviews: 128
                  </div>
                </div>
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "25px" }}>
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="color_primary"
                    />{" "}
                    1
                  </div>
                  <div className="brand_image">
                    <img
                      src={walmart}
                      alt="brand_image"
                      style={{
                        width: "100px",
                        height: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                </div>
                <button
                  className="btn btn-primary "
                  style={{ borderRadius: "0px" }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="blog_posts">
        <h2 className="mb-4 fw-bold" style={{ marginTop: "80px" }}>
          Latest Blog Posts
        </h2>

        <Slider {...settings} className="mt-4">
          <div className="col flex px-2">
            <div className="product-container p-3">
              <img className="product-image" src={book} alt="Product Image" />
              <a
                href="/"
                className="d-block text-start color_primary product-name"
              >
                Unlocking E-commerce Success: Strategies for Maximizing Your
                Online Store's Potential
              </a>
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "0px" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col flex px-2">
            <div className="product-container p-3">
              <img className="product-image" src={beauty} alt="Product Image" />
              <a
                href="/"
                className="d-block text-start color_primary product-name"
              >
                Unlocking E-commerce Success: Strategies for Maximizing Your
                Online Store's Potential
              </a>
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "0px" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col flex px-2">
            <div className="product-container p-3">
              <img className="product-image" src={game} alt="Product Image" />
              <a
                href="/"
                className="d-block text-start color_primary product-name"
              >
                Unlocking E-commerce Success: Strategies for Maximizing Your
                Online Store's Potential
              </a>
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "0px" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col flex px-2">
            <div className="product-container mx-auto p-3">
              <img className="product-image" src={fashion} alt="Product Image" />
              <a
                href="/"
                className="d-block text-start color_primary product-name"
              >
                Unlocking E-commerce Success: Strategies for Maximizing Your
                Online Store's Potential
              </a>
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "0px" }}
              >
                Read More
              </button>
            </div>
          </div>
        </Slider>

        <center>
          <button className="btn btn-outline-primary" style={{ width: "30%", marginTop: "50px" }}>See ALL</button>

        </center>
      </Container>

      <Container style={{ margin: "50px auto" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3 col-md-6">
            <Card
              style={{ maxWidth: "18rem", width: "100%", margin: "20px auto" }}
            >
              <BiSupport
                style={{ margin: "20px auto", fontSize: "60px", color: "#ff3052" }}
              />
              <Card.Body>
                <center>
                  <Card.Title>Easy Decision</Card.Title>

                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              style={{ maxWidth: "18rem", width: "100%", margin: "20px auto" }}
            >
              <FaMoneyBillAlt
                style={{ margin: "20px auto", fontSize: "60px", color: "#ff3052" }}
              />
              <Card.Body>
                <center>
                  <Card.Title>No Hidden Costs</Card.Title>

                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              style={{ maxWidth: "18rem", width: "100%", margin: "20px auto" }}
            >
              <AiOutlineShoppingCart
                style={{ margin: "20px auto", fontSize: "60px", color: "#ff3052" }}
              />
              <Card.Body>
                <center>
                  <Card.Title>Available Best Products</Card.Title>

                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              style={{ maxWidth: "18rem", width: "100%", margin: "20px auto" }}
            >
              <BiFile
                style={{ margin: "20px auto", fontSize: "60px", color: "#ff3052" }}
              />
              <Card.Body>
                <center>
                  <Card.Title>No Fraud Best Quality</Card.Title>

                </center>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>



      <Container className="d-flex justify-content-center">
        <Row className="justify-content-center">
          <Col xs={6} sm={3} md={3} className="text-center" style={{ height: '150px' }}>
            <Image src={walmart} style={{ maxWidth: '100%', height: '100%', objectFit: 'contain', border: 'none' }} />
          </Col>
          <Col xs={6} sm={3} md={3} className="text-center" style={{ height: '150px' }}>
            <Image src={amazon} style={{ maxWidth: '100%', height: '100%', objectFit: 'contain', border: 'none' }} />
          </Col>
          <Col xs={6} sm={3} md={3} className="text-center" style={{ height: '150px' }}>
            <Image src={aliexpress} style={{ maxWidth: '100%', height: '100%', objectFit: 'contain', border: 'none' }} />
          </Col>
          <Col xs={6} sm={3} md={3} className="text-center" style={{ height: '150px' }}>
            <Image src={eBay} style={{ maxWidth: '100%', height: '100%', objectFit: 'contain', border: 'none' }} />
          </Col>
        </Row>
      </Container>





      <Footer />
    </>
  );
}

export default Home;
