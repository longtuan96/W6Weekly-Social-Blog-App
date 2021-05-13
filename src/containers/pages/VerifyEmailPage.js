import React, { useEffect } from "react";
import { useParams } from "react-router";
import api from "../../redux/api";

const VerifyEmailPage = () => {
  const { token } = useParams();
  const verifyEmail = async () => {
    try {
      await api.get(`/verify/${token}`);
    } catch (error) {
      console.log("verify email fail");
    }
  };

  useEffect(() => {
    verifyEmail();
  }, []);
  return <div>Congratualation your email verified</div>;
};

export default VerifyEmailPage;
