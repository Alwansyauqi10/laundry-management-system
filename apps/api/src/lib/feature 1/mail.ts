import path from "node:path";
import { readFile } from "node:fs/promises";
import { createTransport } from "nodemailer";
import handlebars from "handlebars";

const mailUser = process.env.MAIL_USER;
const mailPass = process.env.MAIL_PASS;

if (!mailUser || !mailPass) {
  throw new Error("MAIL_USER and MAIL_PASS must be configured");
}

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: mailUser,
    pass: mailPass,
  },
});

type MailOptions = {
  to: string;
  subject: string;
  templateName: string;
  context: object;
};

export const sendMail = async ({
  to,
  subject,
  templateName,
  context,
}: MailOptions) => {
  const templatesDir = path.resolve(process.cwd(), "src", "templates");
  const templatePath = path.join(templatesDir, templateName);
  const templateSource = await readFile(templatePath, "utf-8");
  const html = handlebars.compile(templateSource)(context);

  await transporter.sendMail({
    from: mailUser,
    to,
    subject,
    html,
  });
};
