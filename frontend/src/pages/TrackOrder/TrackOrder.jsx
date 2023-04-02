import React from "react";
import "./TrackOrder.css"

const TrackOrder = () => {
  return (
    <div>
      <section className="root">
        <figure className="track_figure">
          <img
            src="https://images.melorra.com/image/upload/h_350,w_350,f_auto,fl_progressive/v1571040732/live-melorra/dev/catalogue/images/TG/OPT/580/W19WTG16F_C_580.jpg"
            alt=""
          />
          <figcaption>
            <h4 className="">Some Jewellery Name</h4>
            <h6 className="">Category</h6>
            <h2 className="">₹ 23,456</h2>
          </figcaption>
        </figure>
        <div className="order-track">
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Order Received</p>
              <span className="order-track-text-sub">21st November, 2019</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Order Processed</p>
              <span className="order-track-text-sub">21st November, 2019</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Manufracturing In Progress</p>
              <span className="order-track-text-sub">21st November, 2019</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Order Dispatched</p>
              <span className="order-track-text-sub">21st November, 2019</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Order Deliverd</p>
              <span className="order-track-text-sub">21st November, 2019</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackOrder;
