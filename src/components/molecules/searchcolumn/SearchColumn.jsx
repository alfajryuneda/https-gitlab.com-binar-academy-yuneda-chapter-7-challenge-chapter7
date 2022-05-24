import React from "react";
import DarkBackground from "./DarkBackground";
import "./Search.css";

const SearchColumn = () => {
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
          onclick="activeDarkBackground()"
        >
          <div className="row">
            <div className="col-lg-2 col-sm-6 col-12">
              <div>
                <label htmlFor>Tipe Driver</label>
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
            <div className="col-lg-2 col-sm-6 col-12">
              <label htmlFor="inputDate">Tanggal</label>
              <input
                id="inputDate"
                className="form-control"
                type="date"
                placeholder
              />
            </div>
            <div className="col-lg-3 col-sm-6 col-12  form-group has-feedback">
              <label htmlFor="inputTime">Waktu Jemput/ Ambil</label>
              <input
                step={1}
                id="inputTime"
                className="form-control"
                type="time"
                placeholder="Pilih Waktu"
              />
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
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
                />
              </div>
            </div>
            <div className="col-lg-2 col-sm-12 col-12 d-flex justify-content-center align-self-center">
              <button id="submitBtn" className="btn-rent-car w-100">
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchColumn;
