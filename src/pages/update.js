import React, { useState } from "react";
import './pagestyles.css'

const UpdateMenu = () => {
  const [deleteName, setDeleteName] = useState("");
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

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);

    // Send the form data to the server
    fetch("http://localhost:1500/update", {
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
          setSuccessMessage("Menu item updated successfully");
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

  const handleDelete = () => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("token");
    const secretKey = "abcdefg";
  
    // Send the delete request to the server
    fetch(`http://localhost:1500/menu/${deleteName}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "x-secret-key": secretKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage("Menu item deleted successfully");
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
      <h2>Update Menu Item</h2>
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
        <button type="submit">Update</button>
      </form>
      <div>
  <h2>Delete Menu Item</h2>
  <input
    type="text"
    id="delete-name-input"
    value={deleteName}
    onChange={(event) => setDeleteName(event.target.value)}
    placeholder="Enter name to delete"
    required
  />
  <button onClick={handleDelete}>Delete</button>
</div>

    </div>
  );
};

export default UpdateMenu;
