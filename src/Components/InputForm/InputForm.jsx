import React from "react";
import styles from "./InputForm.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "../Slider/Slider";
import CalenderInput from "../CalenderInput/CalenderInput";

const InputForm = () => {
  const [cdate, setcDate] = React.useState(new Date());

  return (
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
              <CalenderInput />
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

        <TabPanel style={{ border: "1px solid #AAAAAA", marginTop: "-2.5%",  padding: "10px"}}>
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
              <CalenderInput />
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
          <Slider />
        </div>

    </div>
  );
};

export default InputForm;
