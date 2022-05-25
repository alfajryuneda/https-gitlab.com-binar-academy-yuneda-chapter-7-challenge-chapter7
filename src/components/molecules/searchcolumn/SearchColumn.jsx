import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectAllCars,
  getCarsError,
  getCarsStatus,
} from "../../../features/cars/carsSlice";

import DarkBackground from "./DarkBackground";
import "./Search.css";
import { carlist } from "../../../store/data";
import ListCar from "./ListCar";

const SearchColumn = () => {
  const cars = useSelector(selectAllCars);
  const carStatus = useSelector(getCarsStatus);
  const error = useSelector(getCarsError);
  const [carList, setCarList] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");
  const [showdata, setShowData] = useState(false);

  let result;
  let emptyChecker;
  if (carStatus === "loading") {
    console.log("loading");
    result = <p>"Loading..."</p>;
  } else if (carStatus === "succeeded") {
    console.log("sukses");
    let filteredCars = cars;
    emptyChecker = [date, time, capacity].every(Boolean) && showdata == true;
    if (emptyChecker) {
      filteredCars = cars.filter((car) => car.capacity > capacity);
    }
    result = filteredCars.map((car) => (
      <div key={car.id}>
        <div className="carContainer align-items-stretch">
          <div className="card p-3">
            <div className="image-card">
              <img
                src={car.image}
                className="w-100"
                alt=""
                style={{ maxHeight: "180px", objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="fw-bold mt-1">
                {car.manufacture}/{car.model}
              </p>
            </div>
            <div>
              <h5 className="fw-bolder">Rp. {car.rentPerDay} / hari</h5>
            </div>
            <div>
              <p className="car-desc">
                {" "}
                {car.description != ""
                  ? car.description
                  : "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia exercitationem vel iure! Eligendi, delectus."}
              </p>
            </div>
            <div>
              <span>
                <i className="bi bi-people me-3"></i>
                {car.capacity} Orang
              </span>
            </div>
            <div>
              <span>
                <i className="bi bi-gear me-3"></i>
                {car.transmission}
              </span>
            </div>
            <div>
              <span>
                <i className="bi bi-calendar me-3"></i>Tahun {car.availableAt}
              </span>
            </div>
            <button className="btn btn-success"> Pilih Mobil</button>
          </div>
        </div>
      </div>
    ));
  } else if (carStatus === "failed") {
    console.log("gagal");
    result = <p>{error}</p>;
  }

  const dateHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setTime(e.target.value);
    setShowData(false);
  };
  const timeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setDate(e.target.value);
    setShowData(false);
  };
  const capacityHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCapacity(e.target.value);
    setShowData(false);
  };
  const onSaveHandler = () => {
    console.log(emptyChecker);
    setShowData(true);
  };
  return (
    <>
      <DarkBackground />
      <div
        id="search"
        className="container position-relative"
        style={{ zIndex: 2 }}
      >
        <div
          id="searchColumn"
          className="card-search card p-3"
          // onclick="activeDarkBackground()"
        >
          <div className="row">
            <div id="driver-type" className="col-lg-2 col-sm-6 col-12">
              <div>
                <label>Tipe Driver</label>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle w-100"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pilih Tipe Driver
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <p className="dropdown-item">Dengan Sopir</p>
                  </li>
                  <li>
                    <p className="dropdown-item" href="#">
                      Tanpa Sopir (Lepas Kunci)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div id="date-input" className="col-lg-2 col-sm-6 col-12">
              <label htmlFor="inputDate">Tanggal</label>
              <input
                id="inputDate"
                className="form-control"
                type="date"
                // value={date}
                onChange={dateHandler}
              />
            </div>
            <div
              id="time-input"
              className="col-lg-3 col-sm-6 col-12  form-group has-feedback"
            >
              <label htmlFor="inputTime">Waktu Jemput/ Ambil</label>
              <input
                step={0}
                id="inputTime"
                className="form-control"
                type="time"
                placeholder="Pilih Waktu"
                // value={time}
                onChange={timeHandler}
              />
            </div>
            <div id="capacity-input" className="col-lg-3 col-sm-6 col-12">
              <label htmlFor="startDate">Jumlah Penumpang</label>
              <div className="input-group mb-3">
                <input
                  id="jumlahPenumpang"
                  type="number"
                  className="form-control"
                  placeholder="Jumlah Penumpang"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  aria-placeholder="Pilih Waktu"
                  value={capacity}
                  onChange={capacityHandler}
                />
              </div>
            </div>
            <div className="col-lg-2 col-sm-12 col-12 d-flex justify-content-center align-self-center">
              <button
                id="submitBtn"
                onClick={onSaveHandler}
                className="btn-rent-car w-100"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
      <ListCar>{showdata && result}</ListCar>
    </>
  );
};

export default SearchColumn;
