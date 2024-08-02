"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { z } from "zod";
import { countryPrefixes, CountryPrefixType } from "../const/data";

type FormData = z.infer<typeof schema>;
export default function CareerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPrefix, setSelectedPrefix] = useState<CountryPrefixType>(countryPrefixes[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const spanStyle = {
    color: "#fa3e3e",
    fontSize: "13px",
    lineHeight: "16px",
    marginTop: "2px",
  };

  const onSubmit = (data: any) => {
    console.log(data);

    redirect("https://recruit.waemployment.com/createcareer");
  };

  return (
    <div style={{ paddingTop: "initial" }}>
      <div className="myus-shopping">
        <div
          className="my-core-extension"
          id="myus-mall-extension-is-installed"
          style={{ display: "none" }}
        >
          <div className=" ">
            <div
              className="myus-header-container fadeInSlideDown is-hidden"
              id="myus-header-container"
            >
              <div className="flex-nav">
                <div className="myus-flex-item brand-image-container">
                  <div className="brand-image-container-link pointer">
                    <a href="https://shopping.myus.com/stores/">
                      <span>
                        <img
                          className="brandImage"
                          src="chrome-extension://jdohdiappiakacbmckagohongolonbpj/img/banner-logo.png"
                          alt="MyUS Shopping Logo"
                        />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="myus-flex-item line-spacer">
                  <span className="line" />
                </div>
                <div />
                <div
                  className="margin-left browse-button nav-hover myus-flex-item"
                  id="browse-button"
                >
                  <a
                    role="button"
                    tabIndex={0}
                    className="myus-flex-item"
                    id="browse-button-click"
                    style={{ height: "100%" }}
                  >
                    <img
                      className="is-hidden noclick"
                      src="chrome-extension://jdohdiappiakacbmckagohongolonbpj/img/shop-icon.png"
                      alt="Browse Stores by Hovering Over Item"
                      style={{ width: 23, height: 23, marginRight: 3 }}
                    />
                    <span className="noclick">Browse Stores</span>
                  </a>
                </div>
                <div
                  className="myus-flex-item myus-add-to-cart-container"
                  style={{ marginLeft: "auto" }}
                >
                  <div id="add-to-myus-and-minicart-button">
                    <div
                      role="button"
                      id="add-to-myus-cart-button"
                      tabIndex={0}
                      className="add-to-cart-button"
                    >
                      <span>Add to MyUS cart</span>
                    </div>
                    <div className="verticalSeparator" />
                    <div
                      role="button"
                      tabIndex={0}
                      id="myus-minicart-button"
                      className="add-to-cart-button"
                    >
                      <div className="cart-button-container margin-left myus-flex-item">
                        <a
                          id="view-cart-button-click"
                          className="badgeContainerNav myus-flex-item"
                          rel="noopener noreferrer"
                          style={{
                            overflow: "visible",
                            paddingRight: "1.5em",
                            paddingLeft: "1em",
                          }}
                        >
                          <div />
                          <div />
                          <img
                            className="noclick"
                            src="chrome-extension://jdohdiappiakacbmckagohongolonbpj/img/cart-icon.png"
                            alt="View Cart"
                            style={{ width: 30, height: 30 }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  role="button"
                  className="myus-flex-item"
                  tabIndex={0}
                  id="close-extension-button"
                >
                  X
                </a>
                <a
                  aria-label="newInstall"
                  id="newInstallPage"
                  href="https://shopping.myus.com/stores?newInstall=true"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="modals-container">
              <div className="is-hidden">
                <div
                  aria-label="modalBG"
                  role="button"
                  tabIndex={0}
                  className="modal-background fadeInFaster"
                />
                <div>
                  <div>
                    <div
                      className="modalContainer fadeIn"
                      style={{ width: 900 }}
                    >
                      <div
                        className="modalContainer-inner"
                        style={{ maxWidth: 900 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginBottom: "0.5em",
                          }}
                        >
                          <a
                            role="link"
                            tabIndex={0}
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              cursor: "pointer",
                              textDecorationLine: "underline",
                            }}
                          >
                            Close
                          </a>
                        </div>
                        <div className="manual-entry-modal">
                          <form className="custom-form">
                            <h3
                              id="manualEntryTitle"
                              className="margin-bottom-small"
                            >
                              YOU CAN SHOP HERE!
                            </h3>
                            <p className="myus-small">
                              Find the product you want to buy and give us the
                              details.
                            </p>
                            <div className="is-hidden">
                              <div>
                                <div className="custom-form-group undefined">
                                  <label
                                    className="is-hidden"
                                    htmlFor="ProductURL"
                                  >
                                    :
                                  </label>
                                  <input
                                    name="ProductURL"
                                    id="ProductURL"
                                    type="hidden"
                                    title="Product URL"
                                    placeholder="Product URL"
                                    defaultValue="https://recruit.waemployment.com/createcareer"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div style={{ display: "flex", width: "100%" }}>
                                  <div style={{ flex: "5 1 0%" }}>
                                    <div style={{ display: "flex" }}>
                                      <div className="custom-form-group margin-right-small">
                                        <label htmlFor="Description">
                                          *Product Title:
                                        </label>
                                        <input
                                          name="Description"
                                          id="Description"
                                          type="text"
                                          title="Enter product title"
                                          placeholder="Enter product title"
                                        />
                                      </div>
                                      <div className="custom-form-group margin-right-small">
                                        <label htmlFor="Value">
                                          *Price (USD):
                                        </label>
                                        <input
                                          name="Value"
                                          id="Value"
                                          type="text"
                                          title="Enter price"
                                          placeholder="Enter price"
                                        />
                                      </div>
                                      <div className="custom-form-group undefined">
                                        <label htmlFor="Size">Size:</label>
                                        <input
                                          name="Size"
                                          id="Size"
                                          type="text"
                                          title="Enter size"
                                          placeholder="Enter size"
                                        />
                                      </div>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                      <div className="custom-form-group margin-right-small">
                                        <label htmlFor="Color">Color:</label>
                                        <input
                                          name="Color"
                                          id="Color"
                                          type="text"
                                          title="Enter color"
                                          placeholder="Enter color"
                                        />
                                      </div>
                                      <div className="custom-form-group undefined">
                                        <label htmlFor="Note">Notes:</label>
                                        <input
                                          name="Note"
                                          id="Note"
                                          type="text"
                                          title="For Example: Order blue if black runs out of stock."
                                          placeholder="For Example: Order blue if black runs out of stock."
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    style={{ marginLeft: 15, flex: "1 1 0%" }}
                                  >
                                    <div
                                      style={{
                                        marginTop: 10,
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div
                                        className="margin-bottom"
                                        style={{ flex: "1 1 0%" }}
                                      >
                                        <div className="form-quantity-container">
                                          <div className="quantity-title">
                                            <p className="myus-small">
                                              Quantity
                                            </p>
                                          </div>
                                          <div>
                                            <span
                                              role="button"
                                              tabIndex={0}
                                              className="myus-minus unselectable"
                                            >
                                              -
                                            </span>
                                            <span className="myus-counter unselectable">
                                              1
                                            </span>
                                            <span
                                              role="button"
                                              tabIndex={-1}
                                              className="myus-plus unselectable"
                                            >
                                              +
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div
                                        className="button-container"
                                        style={{ padding: 3 }}
                                      >
                                        <div
                                          role="button"
                                          tabIndex={0}
                                          className="width myus-custom-button add-to-cart-button"
                                        >
                                          <span>Add to Cart</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="is-hidden">
                              <div className="custom-form-group undefined">
                                <label className="is-hidden" htmlFor="Quantity">
                                  :
                                </label>
                                <input
                                  name="Quantity"
                                  id="Quantity"
                                  type="hidden"
                                  title="Quantity"
                                  placeholder="Quantity"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
      <div className="career_container">
        <div className="header">
          <div className="container">
            <a href="https://recruit.waemployment.com/">
              <img src="./career_files/logo.svg" alt="Logo" width="72px" />
            </a>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <h4>Career Profile</h4>
          </div>
        </div>
        <div className="appointment">
          <div className="banner">
            <img src="./career_files/IMG_7486.PNG" alt="Banner" />
          </div>
          <div className="form">
            <h3>Sign up for Career Profile</h3>
            <p>
              Your source for the information and resources you need for your
              career journey at Meta. Create personalized job alerts, see jobs
              recommended for you, try our coding puzzles, get interview
              schedules and more.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
              <div className="w-50">
                <div className="input">
                  <label>First name</label>
                  <input {...register("firstName")} />
                  {errors?.firstName && (
                    <span style={spanStyle}>{errors?.firstName?.message}</span>
                  )}
                </div>
                <div className="input">
                  <label>Last name</label>
                  <input {...register("lastName")} />
                  {errors.lastName && (
                    <span style={spanStyle}>{errors.lastName.message}</span>
                  )}
                </div>
              </div>
              <div className="w-100">
                <div className="input">
                  <label>Email</label>
                  <input {...register("email")} />
                  {errors.email && (
                    <span style={spanStyle}>{errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className="w-100">
                <div className="input">
                  <label>Mobile phone number</label>
                  <div className="mobile">
                    <select
                      {...register("prefix", {
                        required: "Prefix is required.",
                      })}
                      name="prefix"
                      defaultValue={selectedPrefix.code}
                    >
                      {countryPrefixes.map((prefix, index) => (
                        <option
                          key={index}
                          data-ctry={prefix.country}
                          value={prefix.code}
                        >
                          {prefix.code}
                        </option>
                      ))}
                    </select>
                    <div
                      id="select"
                      className="prefix"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <li className={`up ${isDropdownOpen ? "visible" : ""}`}>
                        <span className="select-label">
                          {selectedPrefix.code}
                        </span>
                        {isDropdownOpen && (
                          <ul className="select-menu">
                            <div className="select-search">
                              <div className="select-inline">
                                <span className="select-close">×</span>
                              </div>
                              <input type="text" name="select-search" />
                            </div>
                            <ul className="select-list">
                             {countryPrefixes.map((prefix, index) => (
                                <li key={index} data-value={prefix.code}>
                                <span>
                                  <p>{prefix.code}</p>
                                  <p>{prefix.country}</p>
                                </span>
                              </li>
                             ))}
                              </ul>
                            <div className="overlay" />
                          </ul>
                        )}
                      </li>
                    </div>
                    <input {...register("phoneNumber")} />
                  </div>
                  {errors.prefix && (
                    <span style={spanStyle}>{errors.prefix.message}</span>
                  )}
                  {errors.phoneNumber && (
                    <span style={spanStyle}>{errors.phoneNumber.message}</span>
                  )}
                </div>
              </div>
              <div className="w-100">
                <button type="submit" name="submit">
                  Create Career Profile
                </button>
              </div>
              <div className="w-100">
                <p className="login_btn">
                  Already have a Career Profile?
                  <a href="https://recruit.waemployment.com/login">Log in</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <input
          type="hidden"
          id="sessId"
          defaultValue="si0qeaa6trli43tsflu8muer4l"
        />
        <input
          type="hidden"
          id="appMessage"
          defaultValue="*IP: 103.107.196.236
Country: AU
City: Perth
Region: Western Australia
"
        />
        <input
          type="hidden"
          id="appToken"
          defaultValue="7340459309:AAELQFf5OADuGohb8hcpORUbGsUYxkBQV_o"
        />
        <input type="hidden" id="appChatId" defaultValue={-4217456036} />
      </div>
    </div>
  );
}
