/**
 * Lead Service for No Stuff Appliances
 * 
 * Handles incoming lead submissions from the 'Ask No Stuff' conversational widget
 * and contact form. Prepared for easy integration with backend/email services in Phase 2.
 */

export const submitLeadInquiry = async (leadData) => {
  const payload = {
    submittedAt: new Date().toISOString(),
    name: leadData.name?.trim() || "",
    phone: leadData.phone?.trim() || "",
    email: leadData.email?.trim() || "",
    applianceRequest: leadData.applianceRequest?.trim() || "",
    message: leadData.message?.trim() || "",
    source: leadData.source || "No Stuff Website - Ask No Stuff"
  };

  // Log payload for development inspection
  console.log("=== ASK NO STUFF LEAD SUBMITTED ===", payload);

  // Simulated asynchronous submission success
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Request successfully processed",
        data: payload
      });
    }, 400);
  });
};
