/**
 * Lead Service for No Stuff Appliances
 *
 * Sends Ask Harry inquiries to Google Apps Script.
 * Google Apps Script records the lead in Google Sheets
 * and emails the inquiry to Harry.
 */

const LEAD_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbylXL0HT_deQd904dOS_VIJxuHQZCJL3yyvKukkVmJEoRO9NTeyVFOX_bAW4-Fw_xdR/exec";

export const submitLeadInquiry = async (leadData) => {
  const payload = {
    submittedAt: new Date().toISOString(),
    leadType: leadData.leadType || "Appliance Inquiry",
    name: leadData.name?.trim() || "",
    phone: leadData.phone?.trim() || "",
    email: leadData.email?.trim() || "",
    applianceRequest: leadData.applianceRequest?.trim() || "",
    message: leadData.message?.trim() || "",
    source: leadData.source || "No Stuff Website - Ask Harry"
  };

  const formData = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    await fetch(LEAD_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData
    });

    return {
      success: true,
      message: "Request sent successfully"
    };
  } catch (error) {
    console.error("Lead submission failed:", error);

    throw new Error("Unable to send inquiry.");
  }
};