import sendgrid from "@sendgrid/mail";
import { NextResponse, NextRequest } from "next/server";

//@ts-ignore
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await sendgrid.send({
      to: "jeremy.j.buist@gmail.com", // Your email where you'll receive emails
      from: "jeremy@jeremybuist.ca", // your website email address here
      subject: `Contact form submission from jeremybuist.ca`,
      html: `<p>You have a new contact form submission</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    await sendgrid.send({
      to: `${data.email}`,
      from: "jeremy@jeremybuist.ca",
      subject: `Thanks for contacting me!`,
      html: `<p>Hi ${data.name},</p>
      <p>Thanks for reaching out! I'll get back to you as soon as I can.</p>
      <p>Jeremy</p>
      `,
    });
  } catch (error) {
    //@ts-ignore
    return new NextResponse("Fail", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }

  return new NextResponse("Success", {
    status: 200,
    statusText: "OK",
  });
}
