// PreviewPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './PreviewPage.css'; // Import CSS file

function PreviewPage() {
  const location = useLocation();
  const formData = location.state;

  return (
    <div className="preview-container">
      <h2>Preview of Submitted Registration Form</h2>
      <div className="preview-data">
        <div className="input-data">
          <div className="preview-item">
            <label>Full name:</label>
            <span>{formData.name}</span>
          </div>
          <div className="preview-item">
            <label>Gender:</label>
            <span>{formData.gender}</span>
          </div>
          <div className="preview-item">
            <label>Date of birth:</label>
            <span>{formData.birthday}</span>
          </div>
          <div className="preview-item">
            <label>Religion:</label>
            <span>{formData.religion}</span>
          </div>
          <div className="preview-item">
            <label>Marital status:</label>
            <span>{formData.marriage}</span>
          </div>
          <div className="preview-item">
            <label>Educational Qualification:</label>
            <span>{formData.qualification}</span>
          </div>
          <div className="preview-item">
            <label>Nationality:</label>
            <span>{formData.nationality}</span>
          </div>
          <div className="preview-item">
            <label>Address:</label>
            <span>{formData.address}</span>
          </div>
          <div className="preview-item">
            <label>Mobile No:</label>
            <span>{formData.phone}</span>
          </div>
          <div className="preview-item">
            <label>E-mail ID:</label>
            <span>{formData.email}</span>
          </div>
        </div>
        <div className="preview-photo">
          {formData.photo && <img src={formData.photoPreview} alt="Uploaded" />}
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
