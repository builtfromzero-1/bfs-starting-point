export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { email, firstName = "" } = req.body;

    console.log("Request body:", req.body);
console.log("Email:", email);
console.log("First name:", firstName);

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`anystring:${apiKey}`).toString("base64"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
          },
          tags: ["Coaching Journey"],
        }),
      }
    );

    const data = await response.json();

    if (
  response.status === 400 &&
  data.title === "Member Exists"
) {
  return res.status(200).json({
    success: true,
    alreadySubscribed: true,
  });
}

console.log("Mailchimp response:", data);

return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}