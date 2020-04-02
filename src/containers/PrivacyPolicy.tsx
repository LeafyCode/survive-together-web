import React from "react";
import {PrivacyPolicySinhala} from '../components/privacyPolicyLanguges/PrivacyPolicySinhala';
import {PrivacyPolicyEnglish} from "../components/privacyPolicyLanguges/PrivacyPolicyEnglish";

export const PrivacyPolicy = () => {
  const value = 'sin';

  if (value ==='sin') {
    return (
        <>
          <PrivacyPolicySinhala/>
        </>
    );
  }
  else  {
    return (
        <>
          <PrivacyPolicyEnglish/>
        </>

    );
  }
}