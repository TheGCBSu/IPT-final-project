import React, { useState } from "react";
import './pagestyles.css'

const UploadMenu = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve the token from local storage
    const token = localStorage.getItem("token");
    const secretKey = "abcdefg";
    if (!file) {
      setErrorMessage("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);

    // Send the form data to the server
    fetch("http://localhost:1500/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "x-secret-key": secretKey,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage("Menu item uploaded successfully");
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
          setSuccessMessage("");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <div className="centered" align="center">
      <h2>Upload Menu Item</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="file-input">Picture:</label>
              </td>
              <td>
                <input
                  type="file"
                  id="file-input"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name-input">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name-input"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price-input">Price:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="price-input"
                  value={price}
                  onChange={handlePriceChange}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadMenu;
