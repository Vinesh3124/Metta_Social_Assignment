import React from "react";
import styles from "./FilterBox.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "../Slider/Slider";
import CalenderInput from "../CalenderInput/CalenderInput";

const FilterBox = () => {
  const [oneway, setOneway] = React.useState(true);
  const [startDate, setStartDate] = React.useState(false);
  const [endDate, setEndDate] = React.useState(false);
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [pass, setPass] = React.useState(0);
  const [price, setPrice] = React.useState(1500);

  const handleOChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleDChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDropChange = (e) => {
    setPass(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sp = startDate.toString().trim().split(" ");

    let num_month;
    if (startDate) {
      num_month = startDate.getMonth() + 1;
    }
    let sDate = `${sp[2]}/${num_month}/${sp[3]}`;
    let str_month = sp[1];

    const payload = {
      origin_city: origin,
      dest_city: destination,
      passengers: pass,
      start_date: sDate,
      end_date: endDate,
      price: price
    };
    console.log(payload)
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.fromContainer}>
        <Tabs style={{ marginTop: "10%" }}>
          <TabList style={{ border: "none" }}>
            <Tab>One-Way</Tab>
            <Tab>Return</Tab>
          </TabList>

          <TabPanel
            style={{
              border: "1px solid #AAAAAA",
              marginTop: "-2.5%",
              padding: "10px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                className={styles.inputBox}
                placeholder="Enter Origin City"
                onChange={handleOChange}
              />
              <input
                className={styles.inputBox}
                placeholder="Enter Destination City"
                onChange={handleDChange}
              />
              <div className={styles.selectBox}>
                <CalenderInput
                  oneway={oneway}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
              <select
                onChange={handleDropChange}
                className={styles.selectBox_pass}
              >
                <option>Passengers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <button className={styles.btn}>Search</button>
            </form>
          </TabPanel>

          <TabPanel
            style={{
              border: "1px solid #AAAAAA",
              marginTop: "-2.5%",
              padding: "10px",
            }}
          >
            <form>
              <input
                className={styles.inputBox}
                placeholder="Enter Origin City"
              />
              <input
                className={styles.inputBox}
                placeholder="Enter Destination City"
              />
              <div className={styles.selectBox}>
                <CalenderInput
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
              <select className={styles.selectBox_pass}>
                <option>Passengers</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <button className={styles.btn}>Search</button>
            </form>
          </TabPanel>
        </Tabs>

        <div className={styles.sliderContainer}>
          <p>Refine flight search</p>
          <Slider setPrice={setPrice} price={price} />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
