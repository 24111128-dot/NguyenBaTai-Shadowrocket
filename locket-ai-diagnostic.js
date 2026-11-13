// Diagnostic only: logs status code, no photo, body, URL query or authentication tokens.
const rawStatus = $response && ($response.status || $response.statusCode);
const status = String(rawStatus || "unknown").replace(/[^0-9]/g, "");
const category = status === "401" || status === "403" ? "AUTH_OR_ENTITLEMENT"
  : status === "404" ? "ENDPOINT_NOT_FOUND"
  : ["500","502","503","504"].includes(status) ? "SERVER_ERROR"
  : status.startsWith("2") ? "HTTP_SUCCESS_CHECK_APP"
  : "OTHER";
console.log("[Locket AI diagnostic] HTTP " + (status || "unknown") + " " + category);
$done({});
