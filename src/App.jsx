import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// Home Component
function Predictor() {
  const navigate = useNavigate();

  function goToForm() {
    navigate("/predict");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Credit Default Predictor</h1>
      <button
        onClick={goToForm}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Go to Predict
      </button>
    </div>
  );
}

// Form Component
function PredictionForm() {
  const [formData, setFormData] = useState({
    loanGrade: "",
    personIncome: "",
    personAge: "",
    personHomeOwnership: "",
    personEmploymentLength: "",
    loanAmount: "",
    loanInterestRate: "",
    creditHistoryLength: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully! Check console for details.");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Prediction Form</h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ flex: 1 }}>Loan Grade:</label>
          <input
            type="text"
            name="loanGrade"
            maxLength="1"
            value={formData.loanGrade}
            onChange={handleChange}
            required
            style={{ flex: 2, padding: "5px" }}
          />
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ flex: 1 }}>Person Income:</label>
          <input
            type="number"
            name="personIncome"
            value={formData.personIncome}
            onChange={handleChange}
            required
            style={{ flex: 2, padding: "5px" }}
          />
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ flex: 1 }}>Person Age:</label>
          <input
            type="number"
            name="personAge"
            value={formData.personAge}
            onChange={handleChange}
            required
            style={{ flex: 2, padding: "5px" }}
          />
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ flex: 1 }}>Person Home Ownership:</label>
          <select
            name="personHomeOwnership"
            value={formData.personHomeOwnership}
            onChange={handleChange}
            required
            style={{ flex: 2, padding: "5px" }}
          >
            <option value="">Select</option>
            <option value="rent">Rent</option>
            <option value="own">Own</option>
            <option value="mortgage">Mortgage</option>
          </select>
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ flex: 1 }}>Person Employment Length (years):</label>
          <input
            type="number"
            name="personEmploymentLength"
            value={formData.personEmploymentLength}
            onChange={handleChange}
            required
            style={{ flex: 2, padding: "5px" }}
          />
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ flex: 1 }}>Loan Amount:</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
            style={{ flex: 2, padding: "5px" }}
          />
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ flex: 1 }}>Loan Interest Rate:</label>
          <input
            type="number"
            name="loanInterestRate"
            value={formData.loanInterestRate}
            onChange={handleChange}
            required
            style={{ flex: 2, padding: "5px" }}
          />
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ flex: 1 }}>Credit History Length:</label>
          <input
            type="number"
            name="creditHistoryLength"
            value={formData.creditHistoryLength}
            onChange={handleChange}
            required
            style={{ flex: 2, padding: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Predictor />} />
        <Route path="/predict" element={<PredictionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
