import React from "react";
import styles from "./FilterBox.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "../Slider/Slider";
import CalenderInput from "../CalenderInput/CalenderInput";
import { useDispatch } from "react-redux";
import { getFilter } from "../../Redux/Filter/action";

const FilterBox = () => {
  const [oneway, setOneway] = React.useState(true);
  let [returnway, setReturnway] = React.useState(false);
  const [startDate, setStartDate] = React.useState(false);
  const [endDate, setEndDate] = React.useState(false);
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [pass, setPass] = React.useState(0);
  const [price, setPrice] = React.useState(1500);

  const dispatch = useDispatch();

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
    setReturnway((returnway = false));
    console.log(returnway + "t");
    const sp = startDate.toString().trim().split(" ");
    const ed = endDate.toString().trim().split(" ");

    let start_num_month;
    if (startDate) {
      if (startDate.getMonth() <= 8) {
        start_num_month = 0 + `${startDate.getMonth() + 1}`;
        console.log(start_num_month);
      } else {
        start_num_month = startDate.getMonth() + 1;
      }
    }
    let sDate = `${sp[2]}/${start_num_month}/${sp[3]}`;
    let str_month = sp[1];
    let StrDate = `${sp[2]} ${str_month} ${sp[3]}`;

    let end_num_month;
    if (endDate) {
      if (endDate.getMonth() <= 8) {
        end_num_month = 0 + `${endDate.getMonth() + 1}`;
      } else {
        end_num_month = endDate.getMonth() + 1;
      }
    }
    let eDate = `${ed[2]}/${end_num_month}/${ed[3]}`;
    let e_str_month = ed[1];
    let e_StrDate = `${ed[2]} ${e_str_month} ${ed[3]}`;

    const payload = {
      origin_city: origin,
      dest_city: destination,
      passengers: pass,
      start_date: sDate,
      end_date: eDate,
      price: price,
      month_str: str_month,
      string_date: StrDate,
      e_month_str: e_str_month,
      e_str_date: e_StrDate,
      one_way: returnway,
    };
    console.log(returnway);
    dispatch(getFilter(payload));
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setReturnway((returnway = true));
    const sp = startDate.toString().trim().split(" ");
    const ed = endDate.toString().trim().split(" ");

    let start_num_month;
    if (startDate) {
      if (startDate.getMonth() <= 8) {
        start_num_month = 0 + `${startDate.getMonth() + 1}`;
      } else {
        start_num_month = startDate.getMonth() + 1;
      }
    }
    let sDate = `${sp[2]}/${start_num_month}/${sp[3]}`;
    let str_month = sp[1];
    let StrDate = `${sp[2]} ${str_month} ${sp[3]}`;

    let end_num_month;
    if (endDate) {
      if (endDate.getMonth() <= 8) {
        end_num_month = 0 + `${endDate.getMonth() + 1}`;
      } else {
        end_num_month = endDate.getMonth() + 1;
      }
    }
    let eDate = `${ed[2]}/${end_num_month}/${ed[3]}`;
    let e_str_month = ed[1];
    let e_StrDate = `${ed[2]} ${e_str_month} ${ed[3]}`;
    const payload = {
      origin_city: origin,
      dest_city: destination,
      passengers: pass,
      start_date: sDate,
      end_date: eDate,
      price: price,
      month_str: str_month,
      string_date: StrDate,
      e_month_str: e_str_month,
      e_str_date: e_StrDate,
      one_way: returnway,
    };
    console.log(returnway);
    dispatch(getFilter(payload));
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
            <form onSubmit={handleSubmit2}>
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
