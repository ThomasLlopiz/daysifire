import React, { useState } from "react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost/daysifire/src/mail/mail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            nombre: formData.nombre,
            email: formData.email,
            mensaje: formData.mensaje,
          }).toString(),
        }
      );
      const result = await response.text();
      const alertElement = document.createElement("div");
      alertElement.className = "custom-alert";
      alertElement.textContent = result;
      document.getElementById("contact-form").appendChild(alertElement);
      setTimeout(() => {
        alertElement.remove();
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-black" id="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        <form
          id="contact-form"
          className="form-horizontal"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="NOMBRE"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="CORREO"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <textarea
            className="form-control"
            rows="10"
            placeholder="MENSAJE"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary send-button" type="submit">
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i>
              <span className="send-text">ENVIAR</span>
            </div>
          </button>
        </form>
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Devoto, Córdoba</span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    +54 3564 651449
                  </a>
                </span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    info@daisyfire.com
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </section>
  );
};
