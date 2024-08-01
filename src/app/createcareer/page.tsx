"use client";

import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CareerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPrefix, setSelectedPrefix] = useState({
    value: "+1",
    country: "Canada",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
                  <input
                    type="text"
                    {...register("name", {
                      required: "First name is required.",
                    })}
                    name="name"
                    id="name"
                  />
                  {errors?.name && (
                    <span style={spanStyle}>{errors?.name?.message}</span>
                  )}
                </div>
                <div className="input">
                  <label>Last name</label>
                  <input
                    type="text"
                    {...register("last_name", {
                      required: "Last name is required.",
                    })}
                    name="last_name"
                    id="last_name"
                  />
                  {errors.last_name && (
                    <span style={spanStyle}>{errors.last_name.message}</span>
                  )}
                </div>
              </div>
              <div className="w-100">
                <div className="input">
                  <label>Email</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email is invalid.",
                      },
                    })}
                  />
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
                      defaultValue={selectedPrefix.value}
                    >
                      <option data-ctry="Canada" value={+1}>
                        +1
                      </option>
                      <option data-ctry="UK" value={+44}>
                        +44
                      </option>
                      <option data-ctry="Algeria" value={+213}>
                        +213
                      </option>
                      <option data-ctry="Andorra" value={+376}>
                        +376
                      </option>
                      <option data-ctry="Angola" value={+244}>
                        +244
                      </option>
                      <option data-ctry="Anguilla" value={+1264}>
                        +1264
                      </option>
                      <option data-ctry="Antigua & Barbuda" value={+1268}>
                        +1268
                      </option>
                      <option data-ctry="Argentina" value={+54}>
                        +54
                      </option>
                      <option data-ctry="Armenia" value={+374}>
                        +374
                      </option>
                      <option data-ctry="Aruba" value={+297}>
                        +297
                      </option>
                      <option data-ctry="Australia" value={+61}>
                        +61
                      </option>
                      <option data-ctry="Austria]" value={+43}>
                        +43
                      </option>
                      <option data-ctry="Azerbaijan" value={+994}>
                        +994
                      </option>
                      <option data-ctry="Bahamas" value={+1242}>
                        +1242
                      </option>
                      <option data-ctry="Bahrain" value={+973}>
                        +973
                      </option>
                      <option data-ctry="Bangladesh" value={+880}>
                        +880
                      </option>
                      <option data-ctry="Barbados" value={+1246}>
                        +1246
                      </option>
                      <option data-ctry="Belarus" value={+375}>
                        +375
                      </option>
                      <option data-ctry="Belgium" value={+32}>
                        +32
                      </option>
                      <option data-ctry="Belize" value={+501}>
                        +501
                      </option>
                      <option data-ctry="Benin" value={+229}>
                        +229
                      </option>
                      <option data-ctry="Bermuda" value={+1441}>
                        +1441
                      </option>
                      <option data-ctry="Bhutan" value={+975}>
                        +975
                      </option>
                      <option data-ctry="Bolivia" value={+591}>
                        +591
                      </option>
                      <option data-ctry="Bosnia Herzegovina" value={+387}>
                        +387
                      </option>
                      <option data-ctry="Botswana" value={+267}>
                        +267
                      </option>
                      <option data-ctry="Brazil" value={+55}>
                        +55
                      </option>
                      <option data-ctry="Brunei" value={+673}>
                        +673
                      </option>
                      <option data-ctry="Bulgaria" value={+359}>
                        +359
                      </option>
                      <option data-ctry="Burkina Faso" value={+226}>
                        +226
                      </option>
                      <option data-ctry="Burundi" value={+257}>
                        +257
                      </option>
                      <option data-ctry="Cambodia" value={+855}>
                        +855
                      </option>
                      <option data-ctry="Cameroon" value={+237}>
                        +237
                      </option>
                      <option data-ctry="Cape Verde Islands" value={+238}>
                        +238
                      </option>
                      <option data-ctry="Cayman Islands" value={+1345}>
                        +1345
                      </option>
                      <option data-ctry="Central African Republic" value={+236}>
                        +236
                      </option>
                      <option data-ctry="Chile" value={+56}>
                        +56
                      </option>
                      <option data-ctry="China" value={+86}>
                        +86
                      </option>
                      <option data-ctry="Colombia" value={+57}>
                        +57
                      </option>
                      <option data-ctry="Mayotte" value={+269}>
                        +269
                      </option>
                      <option data-ctry="Congo" value={+242}>
                        +242
                      </option>
                      <option data-ctry="Cook Islands" value={+682}>
                        +682
                      </option>
                      <option data-ctry="Costa Rica" value={+506}>
                        +506
                      </option>
                      <option data-ctry="Croatia" value={+385}>
                        +385
                      </option>
                      <option data-ctry="Cuba" value={+53}>
                        +53
                      </option>
                      <option data-ctry="Cyprus North" value={+90392}>
                        +90392
                      </option>
                      <option data-ctry="Cyprus South" value={+357}>
                        +357
                      </option>
                      <option data-ctry="Czech Republic" value={+42}>
                        +42
                      </option>
                      <option data-ctry="Denmark" value={+45}>
                        +45
                      </option>
                      <option data-ctry="Djibouti" value={+253}>
                        +253
                      </option>
                      <option data-ctry="Dominican Republic" value={+1809}>
                        +1809
                      </option>
                      <option data-ctry="Ecuador" value={+593}>
                        +593
                      </option>
                      <option data-ctry="Egypt" value={+20}>
                        +20
                      </option>
                      <option data-ctry="El Salvador" value={+503}>
                        +503
                      </option>
                      <option data-ctry="Equatorial Guinea" value={+240}>
                        +240
                      </option>
                      <option data-ctry="Eritrea" value={+291}>
                        +291
                      </option>
                      <option data-ctry="Estonia" value={+372}>
                        +372
                      </option>
                      <option data-ctry="Ethiopia" value={+251}>
                        +251
                      </option>
                      <option data-ctry="Falkland Islands" value={+500}>
                        +500
                      </option>
                      <option data-ctry="Faroe Islands" value={+298}>
                        +298
                      </option>
                      <option data-ctry="Fiji" value={+679}>
                        +679
                      </option>
                      <option data-ctry="Finland" value={+358}>
                        +358
                      </option>
                      <option data-ctry="France" value={+33}>
                        +33
                      </option>
                      <option data-ctry="French Guiana" value={+594}>
                        +594
                      </option>
                      <option data-ctry="French Polynesia" value={+689}>
                        +689
                      </option>
                      <option data-ctry="Gabon" value={+241}>
                        +241
                      </option>
                      <option data-ctry="Gambia" value={+220}>
                        +220
                      </option>
                      <option data-ctry="Georgia" value={+7880}>
                        +7880
                      </option>
                      <option data-ctry="Germany" value={+49}>
                        +49
                      </option>
                      <option data-ctry="Ghana" value={+233}>
                        +233
                      </option>
                      <option data-ctry="Gibraltar" value={+350}>
                        +350
                      </option>
                      <option data-ctry="Greece" value={+30}>
                        +30
                      </option>
                      <option data-ctry="Greenland" value={+299}>
                        +299
                      </option>
                      <option data-ctry="Grenada" value={+1473}>
                        +1473
                      </option>
                      <option data-ctry="Guadeloupe" value={+590}>
                        +590
                      </option>
                      <option data-ctry="Guam" value={+671}>
                        +671
                      </option>
                      <option data-ctry="Guatemala" value={+502}>
                        +502
                      </option>
                      <option data-ctry="Guinea" value={+224}>
                        +224
                      </option>
                      <option data-ctry="Guinea - Bissau" value={+245}>
                        +245
                      </option>
                      <option data-ctry="Guyana" value={+592}>
                        +592
                      </option>
                      <option data-ctry="Haiti" value={+509}>
                        +509
                      </option>
                      <option data-ctry="Honduras" value={+504}>
                        +504
                      </option>
                      <option data-ctry="Hong Kong" value={+852}>
                        +852
                      </option>
                      <option data-ctry="Hungary" value={+36}>
                        +36
                      </option>
                      <option data-ctry="Iceland" value={+354}>
                        +354
                      </option>
                      <option data-ctry="India" value={+91}>
                        +91
                      </option>
                      <option data-ctry="Indonesia" value={+62}>
                        +62
                      </option>
                      <option data-ctry="Iran" value={+98}>
                        +98
                      </option>
                      <option data-ctry="Iraq" value={+964}>
                        +964
                      </option>
                      <option data-ctry="Ireland" value={+353}>
                        +353
                      </option>
                      <option data-ctry="Israel" value={+972}>
                        +972
                      </option>
                      <option data-ctry="Italy" value={+39}>
                        +39
                      </option>
                      <option data-ctry="Jamaica" value={+1876}>
                        +1876
                      </option>
                      <option data-ctry="Japan" value={+81}>
                        +81
                      </option>
                      <option data-ctry="Jordan" value={+962}>
                        +962
                      </option>
                      <option data-ctry="Uzbekistan" value={+7}>
                        +7
                      </option>
                      <option data-ctry="Kenya" value={+254}>
                        +254
                      </option>
                      <option data-ctry="Kiribati" value={+686}>
                        +686
                      </option>
                      <option data-ctry="Korea North" value={+850}>
                        +850
                      </option>
                      <option data-ctry="Korea South" value={+82}>
                        +82
                      </option>
                      <option data-ctry="Kuwait" value={+965}>
                        +965
                      </option>
                      <option data-ctry="Kyrgyzstan" value={+996}>
                        +996
                      </option>
                      <option data-ctry="Laos" value={+856}>
                        +856
                      </option>
                      <option data-ctry="Latvia" value={+371}>
                        +371
                      </option>
                      <option data-ctry="Lebanon" value={+961}>
                        +961
                      </option>
                      <option data-ctry="Lesotho" value={+266}>
                        +266
                      </option>
                      <option data-ctry="Liberia" value={+231}>
                        +231
                      </option>
                      <option data-ctry="Libya" value={+218}>
                        +218
                      </option>
                      <option data-ctry="Liechtenstein" value={+417}>
                        +417
                      </option>
                      <option data-ctry="Lithuania" value={+370}>
                        +370
                      </option>
                      <option data-ctry="Luxembourg" value={+352}>
                        +352
                      </option>
                      <option data-ctry="Macao" value={+853}>
                        +853
                      </option>
                      <option data-ctry="Macedonia" value={+389}>
                        +389
                      </option>
                      <option data-ctry="Madagascar" value={+261}>
                        +261
                      </option>
                      <option data-ctry="Malawi" value={+265}>
                        +265
                      </option>
                      <option data-ctry="Malaysia" value={+60}>
                        +60
                      </option>
                      <option data-ctry="Maldives" value={+960}>
                        +960
                      </option>
                      <option data-ctry="Mali" value={+223}>
                        +223
                      </option>
                      <option data-ctry="Malta" value={+356}>
                        +356
                      </option>
                      <option data-ctry="Marshall Islands" value={+692}>
                        +692
                      </option>
                      <option data-ctry="Martinique" value={+596}>
                        +596
                      </option>
                      <option data-ctry="Mauritania" value={+222}>
                        +222
                      </option>
                      <option data-ctry="Mexico" value={+52}>
                        +52
                      </option>
                      <option data-ctry="Micronesia" value={+691}>
                        +691
                      </option>
                      <option data-ctry="Moldova" value={+373}>
                        +373
                      </option>
                      <option data-ctry="Monaco" value={+377}>
                        +377
                      </option>
                      <option data-ctry="Mongolia" value={+976}>
                        +976
                      </option>
                      <option data-ctry="Montserrat" value={+1664}>
                        +1664
                      </option>
                      <option data-ctry="Morocco" value={+212}>
                        +212
                      </option>
                      <option data-ctry="Mozambique" value={+258}>
                        +258
                      </option>
                      <option data-ctry="Myanmar" value={+95}>
                        +95
                      </option>
                      <option data-ctry="Namibia" value={+264}>
                        +264
                      </option>
                      <option data-ctry="Nauru" value={+674}>
                        +674
                      </option>
                      <option data-ctry="Nepal" value={+977}>
                        +977
                      </option>
                      <option data-ctry="Netherlands" value={+31}>
                        +31
                      </option>
                      <option data-ctry="New Caledonia" value={+687}>
                        +687
                      </option>
                      <option data-ctry="New Zealand" value={+64}>
                        +64
                      </option>
                      <option data-ctry="Nicaragua" value={+505}>
                        +505
                      </option>
                      <option data-ctry="Niger" value={+227}>
                        +227
                      </option>
                      <option data-ctry="Nigeria" value={+234}>
                        +234
                      </option>
                      <option data-ctry="Niue" value={+683}>
                        +683
                      </option>
                      <option data-ctry="Norfolk Islands" value={+672}>
                        +672
                      </option>
                      <option data-ctry="Northern Marianas" value={+670}>
                        +670
                      </option>
                      <option data-ctry="Norway" value={+47}>
                        +47
                      </option>
                      <option data-ctry="Oman" value={+968}>
                        +968
                      </option>
                      <option data-ctry="Palau" value={+680}>
                        +680
                      </option>
                      <option data-ctry="Panama" value={+507}>
                        +507
                      </option>
                      <option data-ctry="Papua New Guinea" value={+675}>
                        +675
                      </option>
                      <option data-ctry="Paraguay" value={+595}>
                        +595
                      </option>
                      <option data-ctry="Peru" value={+51}>
                        +51
                      </option>
                      <option data-ctry="Philippines" value={+63}>
                        +63
                      </option>
                      <option data-ctry="Poland" value={+48}>
                        +48
                      </option>
                      <option data-ctry="Portugal" value={+351}>
                        +351
                      </option>
                      <option data-ctry="Puerto Rico" value={+1787}>
                        +1787
                      </option>
                      <option data-ctry="Qatar" value={+974}>
                        +974
                      </option>
                      <option data-ctry="Reunion" value={+262}>
                        +262
                      </option>
                      <option data-ctry="Romania" value={+40}>
                        +40
                      </option>
                      <option data-ctry="Rwanda" value={+250}>
                        +250
                      </option>
                      <option data-ctry="San Marino" value={+378}>
                        +378
                      </option>
                      <option data-ctry="Sao Tome & Principe" value={+239}>
                        +239
                      </option>
                      <option data-ctry="Saudi Arabia" value={+966}>
                        +966
                      </option>
                      <option data-ctry="Senegal" value={+221}>
                        +221
                      </option>
                      <option data-ctry="Serbia" value={+381}>
                        +381
                      </option>
                      <option data-ctry="Seychelles" value={+248}>
                        +248
                      </option>
                      <option data-ctry="Sierra Leone" value={+232}>
                        +232
                      </option>
                      <option data-ctry="Singapore" value={+65}>
                        +65
                      </option>
                      <option data-ctry="Slovak Republic" value={+421}>
                        +421
                      </option>
                      <option data-ctry="Slovenia" value={+386}>
                        +386
                      </option>
                      <option data-ctry="Solomon Islands" value={+677}>
                        +677
                      </option>
                      <option data-ctry="Somalia" value={+252}>
                        +252
                      </option>
                      <option data-ctry="South Africa" value={+27}>
                        +27
                      </option>
                      <option data-ctry="Spain" value={+34}>
                        +34
                      </option>
                      <option data-ctry="Sri Lanka" value={+94}>
                        +94
                      </option>
                      <option data-ctry="St. Helena" value={+290}>
                        +290
                      </option>
                      <option data-ctry="St. Kitts" value={+1869}>
                        +1869
                      </option>
                      <option data-ctry="St. Lucia" value={+1758}>
                        +1758
                      </option>
                      <option data-ctry="Sudan" value={+249}>
                        +249
                      </option>
                      <option data-ctry="Suriname" value={+597}>
                        +597
                      </option>
                      <option data-ctry="Swaziland" value={+268}>
                        +268
                      </option>
                      <option data-ctry="Sweden" value={+46}>
                        +46
                      </option>
                      <option data-ctry="Switzerland" value={+41}>
                        +41
                      </option>
                      <option data-ctry="Syria" value={+963}>
                        +963
                      </option>
                      <option data-ctry="Taiwan" value={+886}>
                        +886
                      </option>
                      <option data-ctry="Thailand" value={+66}>
                        +66
                      </option>
                      <option data-ctry="Togo" value={+228}>
                        +228
                      </option>
                      <option data-ctry="Tonga" value={+676}>
                        +676
                      </option>
                      <option data-ctry="Trinidad & Tobago" value={+1868}>
                        +1868
                      </option>
                      <option data-ctry="Tunisia" value={+216}>
                        +216
                      </option>
                      <option data-ctry="Turkey" value={+90}>
                        +90
                      </option>
                      <option data-ctry="Turkmenistan" value={+993}>
                        +993
                      </option>
                      <option data-ctry="Turks & Caicos Islands" value={+1649}>
                        +1649
                      </option>
                      <option data-ctry="Tuvalu" value={+688}>
                        +688
                      </option>
                      <option data-ctry="Uganda" value={+256}>
                        +256
                      </option>
                      <option data-ctry="Ukrainw" value={+380}>
                        +380
                      </option>
                      <option data-ctry="United Arab Emirates" value={+971}>
                        +971
                      </option>
                      <option data-ctry="Uruguay" value={+598}>
                        +598
                      </option>
                      <option data-ctry="Vanuatu" value={+678}>
                        +678
                      </option>
                      <option data-ctry="Vatican City" value={+379}>
                        +379
                      </option>
                      <option data-ctry="Venezuela" value={+58}>
                        +58
                      </option>
                      <option data-ctry="Virgin Islands - US" value={+84}>
                        +84
                      </option>
                      <option data-ctry="Wallis & Futuna" value={+681}>
                        +681
                      </option>
                      <option data-ctry="Yemen (North)" value={+969}>
                        +969
                      </option>
                      <option data-ctry="Yemen (South)" value={+967}>
                        +967
                      </option>
                      <option data-ctry="Zambia" value={+260}>
                        +260
                      </option>
                      <option data-ctry="Zimbabwe" value={+263}>
                        +263
                      </option>
                    </select>
                    <div
                      id="select"
                      className="prefix"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <li className={`up ${isDropdownOpen ? "visible" : ""}`}>
                        <span className="select-label">
                          {selectedPrefix.value}
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
                              <li data-value={+1} className="selected">
                                <span>
                                  <p>+1</p>
                                  <p>Canada</p>
                                </span>
                              </li>
                              <li data-value={+44}>
                                <span>
                                  <p>+44</p>
                                  <p>UK</p>
                                </span>
                              </li>
                              <li data-value={+213}>
                                <span>
                                  <p>+213</p>
                                  <p>Algeria</p>
                                </span>
                              </li>
                              <li data-value={+376}>
                                <span>
                                  <p>+376</p>
                                  <p>Andorra</p>
                                </span>
                              </li>
                              <li data-value={+244}>
                                <span>
                                  <p>+244</p>
                                  <p>Angola</p>
                                </span>
                              </li>
                              <li data-value={+1264}>
                                <span>
                                  <p>+1264</p>
                                  <p>Anguilla</p>
                                </span>
                              </li>
                              <li data-value={+1268}>
                                <span>
                                  <p>+1268</p>
                                  <p>Antigua &amp; Barbuda</p>
                                </span>
                              </li>
                              <li data-value={+54}>
                                <span>
                                  <p>+54</p>
                                  <p>Argentina</p>
                                </span>
                              </li>
                              <li data-value={+374}>
                                <span>
                                  <p>+374</p>
                                  <p>Armenia</p>
                                </span>
                              </li>
                              <li data-value={+297}>
                                <span>
                                  <p>+297</p>
                                  <p>Aruba</p>
                                </span>
                              </li>
                              <li data-value={+61}>
                                <span>
                                  <p>+61</p>
                                  <p>Australia</p>
                                </span>
                              </li>
                              <li data-value={+43}>
                                <span>
                                  <p>+43</p>
                                  <p>Austria]</p>
                                </span>
                              </li>
                              <li data-value={+994}>
                                <span>
                                  <p>+994</p>
                                  <p>Azerbaijan</p>
                                </span>
                              </li>
                              <li data-value={+1242}>
                                <span>
                                  <p>+1242</p>
                                  <p>Bahamas</p>
                                </span>
                              </li>
                              <li data-value={+973}>
                                <span>
                                  <p>+973</p>
                                  <p>Bahrain</p>
                                </span>
                              </li>
                              <li data-value={+880}>
                                <span>
                                  <p>+880</p>
                                  <p>Bangladesh</p>
                                </span>
                              </li>
                              <li data-value={+1246}>
                                <span>
                                  <p>+1246</p>
                                  <p>Barbados</p>
                                </span>
                              </li>
                              <li data-value={+375}>
                                <span>
                                  <p>+375</p>
                                  <p>Belarus</p>
                                </span>
                              </li>
                              <li data-value={+32}>
                                <span>
                                  <p>+32</p>
                                  <p>Belgium</p>
                                </span>
                              </li>
                              <li data-value={+501}>
                                <span>
                                  <p>+501</p>
                                  <p>Belize</p>
                                </span>
                              </li>
                              <li data-value={+229}>
                                <span>
                                  <p>+229</p>
                                  <p>Benin</p>
                                </span>
                              </li>
                              <li data-value={+1441}>
                                <span>
                                  <p>+1441</p>
                                  <p>Bermuda</p>
                                </span>
                              </li>
                              <li data-value={+975}>
                                <span>
                                  <p>+975</p>
                                  <p>Bhutan</p>
                                </span>
                              </li>
                              <li data-value={+591}>
                                <span>
                                  <p>+591</p>
                                  <p>Bolivia</p>
                                </span>
                              </li>
                              <li data-value={+387}>
                                <span>
                                  <p>+387</p>
                                  <p>Bosnia Herzegovina</p>
                                </span>
                              </li>
                              <li data-value={+267}>
                                <span>
                                  <p>+267</p>
                                  <p>Botswana</p>
                                </span>
                              </li>
                              <li data-value={+55}>
                                <span>
                                  <p>+55</p>
                                  <p>Brazil</p>
                                </span>
                              </li>
                              <li data-value={+673}>
                                <span>
                                  <p>+673</p>
                                  <p>Brunei</p>
                                </span>
                              </li>
                              <li data-value={+359}>
                                <span>
                                  <p>+359</p>
                                  <p>Bulgaria</p>
                                </span>
                              </li>
                              <li data-value={+226}>
                                <span>
                                  <p>+226</p>
                                  <p>Burkina Faso</p>
                                </span>
                              </li>
                              <li data-value={+257}>
                                <span>
                                  <p>+257</p>
                                  <p>Burundi</p>
                                </span>
                              </li>
                              <li data-value={+855}>
                                <span>
                                  <p>+855</p>
                                  <p>Cambodia</p>
                                </span>
                              </li>
                              <li data-value={+237}>
                                <span>
                                  <p>+237</p>
                                  <p>Cameroon</p>
                                </span>
                              </li>
                              <li data-value={+238}>
                                <span>
                                  <p>+238</p>
                                  <p>Cape Verde Islands</p>
                                </span>
                              </li>
                              <li data-value={+1345}>
                                <span>
                                  <p>+1345</p>
                                  <p>Cayman Islands</p>
                                </span>
                              </li>
                              <li data-value={+236}>
                                <span>
                                  <p>+236</p>
                                  <p>Central African Republic</p>
                                </span>
                              </li>
                              <li data-value={+56}>
                                <span>
                                  <p>+56</p>
                                  <p>Chile</p>
                                </span>
                              </li>
                              <li data-value={+86}>
                                <span>
                                  <p>+86</p>
                                  <p>China</p>
                                </span>
                              </li>
                              <li data-value={+57}>
                                <span>
                                  <p>+57</p>
                                  <p>Colombia</p>
                                </span>
                              </li>
                              <li data-value={+269}>
                                <span>
                                  <p>+269</p>
                                  <p>Mayotte</p>
                                </span>
                              </li>
                              <li data-value={+242}>
                                <span>
                                  <p>+242</p>
                                  <p>Congo</p>
                                </span>
                              </li>
                              <li data-value={+682}>
                                <span>
                                  <p>+682</p>
                                  <p>Cook Islands</p>
                                </span>
                              </li>
                              <li data-value={+506}>
                                <span>
                                  <p>+506</p>
                                  <p>Costa Rica</p>
                                </span>
                              </li>
                              <li data-value={+385}>
                                <span>
                                  <p>+385</p>
                                  <p>Croatia</p>
                                </span>
                              </li>
                              <li data-value={+53}>
                                <span>
                                  <p>+53</p>
                                  <p>Cuba</p>
                                </span>
                              </li>
                              <li data-value={+90392}>
                                <span>
                                  <p>+90392</p>
                                  <p>Cyprus North</p>
                                </span>
                              </li>
                              <li data-value={+357}>
                                <span>
                                  <p>+357</p>
                                  <p>Cyprus South</p>
                                </span>
                              </li>
                              <li data-value={+42}>
                                <span>
                                  <p>+42</p>
                                  <p>Czech Republic</p>
                                </span>
                              </li>
                              <li data-value={+45}>
                                <span>
                                  <p>+45</p>
                                  <p>Denmark</p>
                                </span>
                              </li>
                              <li data-value={+253}>
                                <span>
                                  <p>+253</p>
                                  <p>Djibouti</p>
                                </span>
                              </li>
                              <li data-value={+1809}>
                                <span>
                                  <p>+1809</p>
                                  <p>Dominican Republic</p>
                                </span>
                              </li>
                              <li data-value={+593}>
                                <span>
                                  <p>+593</p>
                                  <p>Ecuador</p>
                                </span>
                              </li>
                              <li data-value={+20}>
                                <span>
                                  <p>+20</p>
                                  <p>Egypt</p>
                                </span>
                              </li>
                              <li data-value={+503}>
                                <span>
                                  <p>+503</p>
                                  <p>El Salvador</p>
                                </span>
                              </li>
                              <li data-value={+240}>
                                <span>
                                  <p>+240</p>
                                  <p>Equatorial Guinea</p>
                                </span>
                              </li>
                              <li data-value={+291}>
                                <span>
                                  <p>+291</p>
                                  <p>Eritrea</p>
                                </span>
                              </li>
                              <li data-value={+372}>
                                <span>
                                  <p>+372</p>
                                  <p>Estonia</p>
                                </span>
                              </li>
                              <li data-value={+251}>
                                <span>
                                  <p>+251</p>
                                  <p>Ethiopia</p>
                                </span>
                              </li>
                              <li data-value={+500}>
                                <span>
                                  <p>+500</p>
                                  <p>Falkland Islands</p>
                                </span>
                              </li>
                              <li data-value={+298}>
                                <span>
                                  <p>+298</p>
                                  <p>Faroe Islands</p>
                                </span>
                              </li>
                              <li data-value={+679}>
                                <span>
                                  <p>+679</p>
                                  <p>Fiji</p>
                                </span>
                              </li>
                              <li data-value={+358}>
                                <span>
                                  <p>+358</p>
                                  <p>Finland</p>
                                </span>
                              </li>
                              <li data-value={+33}>
                                <span>
                                  <p>+33</p>
                                  <p>France</p>
                                </span>
                              </li>
                              <li data-value={+594}>
                                <span>
                                  <p>+594</p>
                                  <p>French Guiana</p>
                                </span>
                              </li>
                              <li data-value={+689}>
                                <span>
                                  <p>+689</p>
                                  <p>French Polynesia</p>
                                </span>
                              </li>
                              <li data-value={+241}>
                                <span>
                                  <p>+241</p>
                                  <p>Gabon</p>
                                </span>
                              </li>
                              <li data-value={+220}>
                                <span>
                                  <p>+220</p>
                                  <p>Gambia</p>
                                </span>
                              </li>
                              <li data-value={+7880}>
                                <span>
                                  <p>+7880</p>
                                  <p>Georgia</p>
                                </span>
                              </li>
                              <li data-value={+49}>
                                <span>
                                  <p>+49</p>
                                  <p>Germany</p>
                                </span>
                              </li>
                              <li data-value={+233}>
                                <span>
                                  <p>+233</p>
                                  <p>Ghana</p>
                                </span>
                              </li>
                              <li data-value={+350}>
                                <span>
                                  <p>+350</p>
                                  <p>Gibraltar</p>
                                </span>
                              </li>
                              <li data-value={+30}>
                                <span>
                                  <p>+30</p>
                                  <p>Greece</p>
                                </span>
                              </li>
                              <li data-value={+299}>
                                <span>
                                  <p>+299</p>
                                  <p>Greenland</p>
                                </span>
                              </li>
                              <li data-value={+1473}>
                                <span>
                                  <p>+1473</p>
                                  <p>Grenada</p>
                                </span>
                              </li>
                              <li data-value={+590}>
                                <span>
                                  <p>+590</p>
                                  <p>Guadeloupe</p>
                                </span>
                              </li>
                              <li data-value={+671}>
                                <span>
                                  <p>+671</p>
                                  <p>Guam</p>
                                </span>
                              </li>
                              <li data-value={+502}>
                                <span>
                                  <p>+502</p>
                                  <p>Guatemala</p>
                                </span>
                              </li>
                              <li data-value={+224}>
                                <span>
                                  <p>+224</p>
                                  <p>Guinea</p>
                                </span>
                              </li>
                              <li data-value={+245}>
                                <span>
                                  <p>+245</p>
                                  <p>Guinea - Bissau</p>
                                </span>
                              </li>
                              <li data-value={+592}>
                                <span>
                                  <p>+592</p>
                                  <p>Guyana</p>
                                </span>
                              </li>
                              <li data-value={+509}>
                                <span>
                                  <p>+509</p>
                                  <p>Haiti</p>
                                </span>
                              </li>
                              <li data-value={+504}>
                                <span>
                                  <p>+504</p>
                                  <p>Honduras</p>
                                </span>
                              </li>
                              <li data-value={+852}>
                                <span>
                                  <p>+852</p>
                                  <p>Hong Kong</p>
                                </span>
                              </li>
                              <li data-value={+36}>
                                <span>
                                  <p>+36</p>
                                  <p>Hungary</p>
                                </span>
                              </li>
                              <li data-value={+354}>
                                <span>
                                  <p>+354</p>
                                  <p>Iceland</p>
                                </span>
                              </li>
                              <li data-value={+91}>
                                <span>
                                  <p>+91</p>
                                  <p>India</p>
                                </span>
                              </li>
                              <li data-value={+62}>
                                <span>
                                  <p>+62</p>
                                  <p>Indonesia</p>
                                </span>
                              </li>
                              <li data-value={+98}>
                                <span>
                                  <p>+98</p>
                                  <p>Iran</p>
                                </span>
                              </li>
                              <li data-value={+964}>
                                <span>
                                  <p>+964</p>
                                  <p>Iraq</p>
                                </span>
                              </li>
                              <li data-value={+353}>
                                <span>
                                  <p>+353</p>
                                  <p>Ireland</p>
                                </span>
                              </li>
                              <li data-value={+972}>
                                <span>
                                  <p>+972</p>
                                  <p>Israel</p>
                                </span>
                              </li>
                              <li data-value={+39}>
                                <span>
                                  <p>+39</p>
                                  <p>Italy</p>
                                </span>
                              </li>
                              <li data-value={+1876}>
                                <span>
                                  <p>+1876</p>
                                  <p>Jamaica</p>
                                </span>
                              </li>
                              <li data-value={+81}>
                                <span>
                                  <p>+81</p>
                                  <p>Japan</p>
                                </span>
                              </li>
                              <li data-value={+962}>
                                <span>
                                  <p>+962</p>
                                  <p>Jordan</p>
                                </span>
                              </li>
                              <li data-value={+7}>
                                <span>
                                  <p>+7</p>
                                  <p>Uzbekistan</p>
                                </span>
                              </li>
                              <li data-value={+254}>
                                <span>
                                  <p>+254</p>
                                  <p>Kenya</p>
                                </span>
                              </li>
                              <li data-value={+686}>
                                <span>
                                  <p>+686</p>
                                  <p>Kiribati</p>
                                </span>
                              </li>
                              <li data-value={+850}>
                                <span>
                                  <p>+850</p>
                                  <p>Korea North</p>
                                </span>
                              </li>
                              <li data-value={+82}>
                                <span>
                                  <p>+82</p>
                                  <p>Korea South</p>
                                </span>
                              </li>
                              <li data-value={+965}>
                                <span>
                                  <p>+965</p>
                                  <p>Kuwait</p>
                                </span>
                              </li>
                              <li data-value={+996}>
                                <span>
                                  <p>+996</p>
                                  <p>Kyrgyzstan</p>
                                </span>
                              </li>
                              <li data-value={+856}>
                                <span>
                                  <p>+856</p>
                                  <p>Laos</p>
                                </span>
                              </li>
                              <li data-value={+371}>
                                <span>
                                  <p>+371</p>
                                  <p>Latvia</p>
                                </span>
                              </li>
                              <li data-value={+961}>
                                <span>
                                  <p>+961</p>
                                  <p>Lebanon</p>
                                </span>
                              </li>
                              <li data-value={+266}>
                                <span>
                                  <p>+266</p>
                                  <p>Lesotho</p>
                                </span>
                              </li>
                              <li data-value={+231}>
                                <span>
                                  <p>+231</p>
                                  <p>Liberia</p>
                                </span>
                              </li>
                              <li data-value={+218}>
                                <span>
                                  <p>+218</p>
                                  <p>Libya</p>
                                </span>
                              </li>
                              <li data-value={+417}>
                                <span>
                                  <p>+417</p>
                                  <p>Liechtenstein</p>
                                </span>
                              </li>
                              <li data-value={+370}>
                                <span>
                                  <p>+370</p>
                                  <p>Lithuania</p>
                                </span>
                              </li>
                              <li data-value={+352}>
                                <span>
                                  <p>+352</p>
                                  <p>Luxembourg</p>
                                </span>
                              </li>
                              <li data-value={+853}>
                                <span>
                                  <p>+853</p>
                                  <p>Macao</p>
                                </span>
                              </li>
                              <li data-value={+389}>
                                <span>
                                  <p>+389</p>
                                  <p>Macedonia</p>
                                </span>
                              </li>
                              <li data-value={+261}>
                                <span>
                                  <p>+261</p>
                                  <p>Madagascar</p>
                                </span>
                              </li>
                              <li data-value={+265}>
                                <span>
                                  <p>+265</p>
                                  <p>Malawi</p>
                                </span>
                              </li>
                              <li data-value={+60}>
                                <span>
                                  <p>+60</p>
                                  <p>Malaysia</p>
                                </span>
                              </li>
                              <li data-value={+960}>
                                <span>
                                  <p>+960</p>
                                  <p>Maldives</p>
                                </span>
                              </li>
                              <li data-value={+223}>
                                <span>
                                  <p>+223</p>
                                  <p>Mali</p>
                                </span>
                              </li>
                              <li data-value={+356}>
                                <span>
                                  <p>+356</p>
                                  <p>Malta</p>
                                </span>
                              </li>
                              <li data-value={+692}>
                                <span>
                                  <p>+692</p>
                                  <p>Marshall Islands</p>
                                </span>
                              </li>
                              <li data-value={+596}>
                                <span>
                                  <p>+596</p>
                                  <p>Martinique</p>
                                </span>
                              </li>
                              <li data-value={+222}>
                                <span>
                                  <p>+222</p>
                                  <p>Mauritania</p>
                                </span>
                              </li>
                              <li data-value={+52}>
                                <span>
                                  <p>+52</p>
                                  <p>Mexico</p>
                                </span>
                              </li>
                              <li data-value={+691}>
                                <span>
                                  <p>+691</p>
                                  <p>Micronesia</p>
                                </span>
                              </li>
                              <li data-value={+373}>
                                <span>
                                  <p>+373</p>
                                  <p>Moldova</p>
                                </span>
                              </li>
                              <li data-value={+377}>
                                <span>
                                  <p>+377</p>
                                  <p>Monaco</p>
                                </span>
                              </li>
                              <li data-value={+976}>
                                <span>
                                  <p>+976</p>
                                  <p>Mongolia</p>
                                </span>
                              </li>
                              <li data-value={+1664}>
                                <span>
                                  <p>+1664</p>
                                  <p>Montserrat</p>
                                </span>
                              </li>
                              <li data-value={+212}>
                                <span>
                                  <p>+212</p>
                                  <p>Morocco</p>
                                </span>
                              </li>
                              <li data-value={+258}>
                                <span>
                                  <p>+258</p>
                                  <p>Mozambique</p>
                                </span>
                              </li>
                              <li data-value={+95}>
                                <span>
                                  <p>+95</p>
                                  <p>Myanmar</p>
                                </span>
                              </li>
                              <li data-value={+264}>
                                <span>
                                  <p>+264</p>
                                  <p>Namibia</p>
                                </span>
                              </li>
                              <li data-value={+674}>
                                <span>
                                  <p>+674</p>
                                  <p>Nauru</p>
                                </span>
                              </li>
                              <li data-value={+977}>
                                <span>
                                  <p>+977</p>
                                  <p>Nepal</p>
                                </span>
                              </li>
                              <li data-value={+31}>
                                <span>
                                  <p>+31</p>
                                  <p>Netherlands</p>
                                </span>
                              </li>
                              <li data-value={+687}>
                                <span>
                                  <p>+687</p>
                                  <p>New Caledonia</p>
                                </span>
                              </li>
                              <li data-value={+64}>
                                <span>
                                  <p>+64</p>
                                  <p>New Zealand</p>
                                </span>
                              </li>
                              <li data-value={+505}>
                                <span>
                                  <p>+505</p>
                                  <p>Nicaragua</p>
                                </span>
                              </li>
                              <li data-value={+227}>
                                <span>
                                  <p>+227</p>
                                  <p>Niger</p>
                                </span>
                              </li>
                              <li data-value={+234}>
                                <span>
                                  <p>+234</p>
                                  <p>Nigeria</p>
                                </span>
                              </li>
                              <li data-value={+683}>
                                <span>
                                  <p>+683</p>
                                  <p>Niue</p>
                                </span>
                              </li>
                              <li data-value={+672}>
                                <span>
                                  <p>+672</p>
                                  <p>Norfolk Islands</p>
                                </span>
                              </li>
                              <li data-value={+670}>
                                <span>
                                  <p>+670</p>
                                  <p>Northern Marianas</p>
                                </span>
                              </li>
                              <li data-value={+47}>
                                <span>
                                  <p>+47</p>
                                  <p>Norway</p>
                                </span>
                              </li>
                              <li data-value={+968}>
                                <span>
                                  <p>+968</p>
                                  <p>Oman</p>
                                </span>
                              </li>
                              <li data-value={+680}>
                                <span>
                                  <p>+680</p>
                                  <p>Palau</p>
                                </span>
                              </li>
                              <li data-value={+507}>
                                <span>
                                  <p>+507</p>
                                  <p>Panama</p>
                                </span>
                              </li>
                              <li data-value={+675}>
                                <span>
                                  <p>+675</p>
                                  <p>Papua New Guinea</p>
                                </span>
                              </li>
                              <li data-value={+595}>
                                <span>
                                  <p>+595</p>
                                  <p>Paraguay</p>
                                </span>
                              </li>
                              <li data-value={+51}>
                                <span>
                                  <p>+51</p>
                                  <p>Peru</p>
                                </span>
                              </li>
                              <li data-value={+63}>
                                <span>
                                  <p>+63</p>
                                  <p>Philippines</p>
                                </span>
                              </li>
                              <li data-value={+48}>
                                <span>
                                  <p>+48</p>
                                  <p>Poland</p>
                                </span>
                              </li>
                              <li data-value={+351}>
                                <span>
                                  <p>+351</p>
                                  <p>Portugal</p>
                                </span>
                              </li>
                              <li data-value={+1787}>
                                <span>
                                  <p>+1787</p>
                                  <p>Puerto Rico</p>
                                </span>
                              </li>
                              <li data-value={+974}>
                                <span>
                                  <p>+974</p>
                                  <p>Qatar</p>
                                </span>
                              </li>
                              <li data-value={+262}>
                                <span>
                                  <p>+262</p>
                                  <p>Reunion</p>
                                </span>
                              </li>
                              <li data-value={+40}>
                                <span>
                                  <p>+40</p>
                                  <p>Romania</p>
                                </span>
                              </li>
                              <li data-value={+250}>
                                <span>
                                  <p>+250</p>
                                  <p>Rwanda</p>
                                </span>
                              </li>
                              <li data-value={+378}>
                                <span>
                                  <p>+378</p>
                                  <p>San Marino</p>
                                </span>
                              </li>
                              <li data-value={+239}>
                                <span>
                                  <p>+239</p>
                                  <p>Sao Tome &amp; Principe</p>
                                </span>
                              </li>
                              <li data-value={+966}>
                                <span>
                                  <p>+966</p>
                                  <p>Saudi Arabia</p>
                                </span>
                              </li>
                              <li data-value={+221}>
                                <span>
                                  <p>+221</p>
                                  <p>Senegal</p>
                                </span>
                              </li>
                              <li data-value={+381}>
                                <span>
                                  <p>+381</p>
                                  <p>Serbia</p>
                                </span>
                              </li>
                              <li data-value={+248}>
                                <span>
                                  <p>+248</p>
                                  <p>Seychelles</p>
                                </span>
                              </li>
                              <li data-value={+232}>
                                <span>
                                  <p>+232</p>
                                  <p>Sierra Leone</p>
                                </span>
                              </li>
                              <li data-value={+65}>
                                <span>
                                  <p>+65</p>
                                  <p>Singapore</p>
                                </span>
                              </li>
                              <li data-value={+421}>
                                <span>
                                  <p>+421</p>
                                  <p>Slovak Republic</p>
                                </span>
                              </li>
                              <li data-value={+386}>
                                <span>
                                  <p>+386</p>
                                  <p>Slovenia</p>
                                </span>
                              </li>
                              <li data-value={+677}>
                                <span>
                                  <p>+677</p>
                                  <p>Solomon Islands</p>
                                </span>
                              </li>
                              <li data-value={+252}>
                                <span>
                                  <p>+252</p>
                                  <p>Somalia</p>
                                </span>
                              </li>
                              <li data-value={+27}>
                                <span>
                                  <p>+27</p>
                                  <p>South Africa</p>
                                </span>
                              </li>
                              <li data-value={+34}>
                                <span>
                                  <p>+34</p>
                                  <p>Spain</p>
                                </span>
                              </li>
                              <li data-value={+94}>
                                <span>
                                  <p>+94</p>
                                  <p>Sri Lanka</p>
                                </span>
                              </li>
                              <li data-value={+290}>
                                <span>
                                  <p>+290</p>
                                  <p>St. Helena</p>
                                </span>
                              </li>
                              <li data-value={+1869}>
                                <span>
                                  <p>+1869</p>
                                  <p>St. Kitts</p>
                                </span>
                              </li>
                              <li data-value={+1758}>
                                <span>
                                  <p>+1758</p>
                                  <p>St. Lucia</p>
                                </span>
                              </li>
                              <li data-value={+249}>
                                <span>
                                  <p>+249</p>
                                  <p>Sudan</p>
                                </span>
                              </li>
                              <li data-value={+597}>
                                <span>
                                  <p>+597</p>
                                  <p>Suriname</p>
                                </span>
                              </li>
                              <li data-value={+268}>
                                <span>
                                  <p>+268</p>
                                  <p>Swaziland</p>
                                </span>
                              </li>
                              <li data-value={+46}>
                                <span>
                                  <p>+46</p>
                                  <p>Sweden</p>
                                </span>
                              </li>
                              <li data-value={+41}>
                                <span>
                                  <p>+41</p>
                                  <p>Switzerland</p>
                                </span>
                              </li>
                              <li data-value={+963}>
                                <span>
                                  <p>+963</p>
                                  <p>Syria</p>
                                </span>
                              </li>
                              <li data-value={+886}>
                                <span>
                                  <p>+886</p>
                                  <p>Taiwan</p>
                                </span>
                              </li>
                              <li data-value={+66}>
                                <span>
                                  <p>+66</p>
                                  <p>Thailand</p>
                                </span>
                              </li>
                              <li data-value={+228}>
                                <span>
                                  <p>+228</p>
                                  <p>Togo</p>
                                </span>
                              </li>
                              <li data-value={+676}>
                                <span>
                                  <p>+676</p>
                                  <p>Tonga</p>
                                </span>
                              </li>
                              <li data-value={+1868}>
                                <span>
                                  <p>+1868</p>
                                  <p>Trinidad &amp; Tobago</p>
                                </span>
                              </li>
                              <li data-value={+216}>
                                <span>
                                  <p>+216</p>
                                  <p>Tunisia</p>
                                </span>
                              </li>
                              <li data-value={+90}>
                                <span>
                                  <p>+90</p>
                                  <p>Turkey</p>
                                </span>
                              </li>
                              <li data-value={+993}>
                                <span>
                                  <p>+993</p>
                                  <p>Turkmenistan</p>
                                </span>
                              </li>
                              <li data-value={+1649}>
                                <span>
                                  <p>+1649</p>
                                  <p>Turks &amp; Caicos Islands</p>
                                </span>
                              </li>
                              <li data-value={+688}>
                                <span>
                                  <p>+688</p>
                                  <p>Tuvalu</p>
                                </span>
                              </li>
                              <li data-value={+256}>
                                <span>
                                  <p>+256</p>
                                  <p>Uganda</p>
                                </span>
                              </li>
                              <li data-value={+380}>
                                <span>
                                  <p>+380</p>
                                  <p>Ukrainw</p>
                                </span>
                              </li>
                              <li data-value={+971}>
                                <span>
                                  <p>+971</p>
                                  <p>United Arab Emirates</p>
                                </span>
                              </li>
                              <li data-value={+598}>
                                <span>
                                  <p>+598</p>
                                  <p>Uruguay</p>
                                </span>
                              </li>
                              <li data-value={+678}>
                                <span>
                                  <p>+678</p>
                                  <p>Vanuatu</p>
                                </span>
                              </li>
                              <li data-value={+379}>
                                <span>
                                  <p>+379</p>
                                  <p>Vatican City</p>
                                </span>
                              </li>
                              <li data-value={+58}>
                                <span>
                                  <p>+58</p>
                                  <p>Venezuela</p>
                                </span>
                              </li>
                              <li data-value={+84}>
                                <span>
                                  <p>+84</p>
                                  <p>Virgin Islands - US</p>
                                </span>
                              </li>
                              <li data-value={+681}>
                                <span>
                                  <p>+681</p>
                                  <p>Wallis &amp; Futuna</p>
                                </span>
                              </li>
                              <li data-value={+969}>
                                <span>
                                  <p>+969</p>
                                  <p>Yemen (North)</p>
                                </span>
                              </li>
                              <li data-value={+967}>
                                <span>
                                  <p>+967</p>
                                  <p>Yemen (South)</p>
                                </span>
                              </li>
                              <li data-value={+260}>
                                <span>
                                  <p>+260</p>
                                  <p>Zambia</p>
                                </span>
                              </li>
                              <li data-value={+263}>
                                <span>
                                  <p>+263</p>
                                  <p>Zimbabwe</p>
                                </span>
                              </li>
                            </ul>
                            <div className="overlay" />
                          </ul>
                        )}
                      </li>
                    </div>
                    <input
                      id="mobile"
                      type="text"
                      name="mobile"
                      {...register("mobile", {
                        required: "Mobile phone number is required.",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Mobile phone number is invalid.",
                        },
                      })}
                    />
                  </div>
                  {errors.prefix && (
                    <span style={spanStyle}>{errors.prefix.message}</span>
                  )}
                  {errors.mobile && (
                    <span style={spanStyle}>{errors.mobile.message}</span>
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
