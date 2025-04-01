import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../api";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        await verifyEmail(token);
        setMessage("Email verified successfully!");
      } catch (error) {
        setMessage("Email verification failed.");
      }
    };
    verify();
  }, [token]);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default VerifyEmail;
