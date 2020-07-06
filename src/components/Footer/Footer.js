import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer id="footer">
      <div className="info">
        <h3>Thông tin liên hệ</h3>
        <span><strong>Công ty Aubook</strong></span>
        <span>Email: contact@aubook.com</span>
        <span>Hotline: (+84)868678969</span>
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.3334124458006!2d107.59008245065455!3d16.458646788585682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a1daa222d0a3%3A0xe39eee1c4011d209!2zxJDhuqFpIEjhu41jIGtob2EgSOG7jWMgLSDEkOG6oWkgSOG7jWMgSHXhur8!5e0!3m2!1svi!2s!4v1592391570337!5m2!1svi!2s"></iframe>
      </div>
    </footer>
  );
}

export default Footer;
