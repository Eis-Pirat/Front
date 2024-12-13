import React, { useState } from "react";
import "./Historique.css";

const Historique = () => {
  // Simulated upload history
  const [uploads] = useState([
    { id: 1, fileName: "image1.png", result: "Name: John Doe, ID: 123456" },
    { id: 2, fileName: "image2.jpg", result: "Name: Jane Smith, ID: 987654" },
    { id: 3, fileName: "image3.jpeg", result: "Name: Alice Brown, ID: 456789" },
  ]);

  const [selectedResult, setSelectedResult] = useState("");

  const handleCardClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <div className="historique-container">
      <h2>Historique des Uploads</h2>
      <p className="upload-count">
        Nombre total d'uploads : <strong>{uploads.length}</strong>
      </p>
      <div className="card-container">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            className="upload-card"
            onClick={() => handleCardClick(upload.result)}
          >
            <img
              src={`https://via.placeholder.com/150?text=${upload.fileName}`}
              alt={upload.fileName}
              className="upload-image"
            />
            <p>{upload.fileName}</p>
          </div>
        ))}
      </div>
      {selectedResult && (
        <div className="result-section">
          <h3>Informations</h3>
          <p>{selectedResult}</p>
        </div>
      )}
    </div>
  );
};

export default Historique;
