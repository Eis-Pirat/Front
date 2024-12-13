import React, { useState } from "react";
import axios from "../services/api";
import { FaCloudUploadAlt, FaFileImage, FaCheckCircle } from "react-icons/fa";
import "./UploadImage.css";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => setImagePreview(event.target.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post("/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data.extractedData);
    } catch (error) {
      console.error("Error uploading file:", error);
      setResult("An error occurred while processing the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">
        <FaCloudUploadAlt className="upload-icon" /> Upload Image
      </h2>
      <form className="upload-form" onSubmit={handleUpload}>
        <label htmlFor="fileInput" className="file-input-label">
          <FaFileImage className="file-input-icon" />
          <span>Select an Image</span>
        </label>
        <input
          id="fileInput"
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleFileChange}
          className="file-input"
        />
        <button type="submit" className="upload-button" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {file && (
        <div className="file-info-section">
          <p className="file-info">
            <FaCheckCircle className="file-info-icon" /> Selected File: {file.name}
          </p>
          {imagePreview && (
            <div className="image-preview">
              <h3>Image Preview</h3>
              <img
                src={imagePreview}
                alt="Preview"
                className="preview-image"
              />
            </div>
          )}
        </div>
      )}
      <div className="result-section">
        <h3>Result</h3>
        <div className="result-text">
          {loading
            ? "Processing file, please wait..."
            : result || "No data to display. Upload an image to see results."}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
