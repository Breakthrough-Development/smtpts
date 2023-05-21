# SMTPTS
SMTPTS is a TypeScript library providing a simple API for sending emails using SMTPJS. This library was inspired by and based on the JavaScript library and service available at [SMTPJS.com](https://smtpjs.com/).

## Installation
```bash
npm install smtpts
```

## Usage
Import Email and EmailPayload from smtpts in your TypeScript file.

```ts
import { Email, EmailPayload } from 'smtpts';
```

You can then send emails using the Email.send function. The function takes an EmailPayload object which includes the properties of the email.

```ts
const emailPayload: EmailPayload = {
    To: 'recipient@example.com',
    From: 'sender@example.com',
    Subject: 'Hello, world!',
    Body: 'This is a test email.',
    // other SMTPJS options can be included here...
};

Email.send(emailPayload)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

Please note, this library uses SMTPJS and hence requires SMTPJS parameters to be included in the EmailPayload.

## API
The library exposes the following API:

### EmailPayload
A TypeScript interface defining the structure of an email payload. This payload includes all the properties required by SMTPJS. You can include any property that SMTPJS supports in this payload.

### Email.send
A function that takes an EmailPayload and sends an email using SMTPJS. This function returns a Promise that resolves with the SMTPJS response.

### Email.ajaxPost
An internal function used by Email.send to make AJAX POST requests.

### Email.createCORSRequest
An internal function used by Email.ajaxPost to create CORS requests.

## Checking for Spam
In some cases, emails sent through SMTPJS (and thus through this library) may end up in the recipient's spam folder. This can happen due to various reasons such as the reputation of the SMTP server, the content of the email, or the recipient's email provider's spam filtering rules.

If the recipient does not receive the email in their inbox, please ask them to check their spam or junk mail folder. It's also a good idea to test the system with different email accounts to ensure deliverability.

To help avoid your emails being marked as spam:

* Make sure the content of your emails does not trigger spam filters. Avoid using all caps, excessive exclamation marks, spammy words, and ensure you have a good text-to-image ratio.
* Ensure that the sending email address is a legitimate address that you control.
* Consider using a reputable SMTP server or email sending service that has mechanisms in place to protect their server's reputation.
* If you are sending bulk email, make sure you are complying with all relevant laws and best practices for bulk email to prevent your server's IP from being blacklisted.

Remember, email deliverability is a complex issue with many factors beyond the control of this library. Always test your system thoroughly and consider using professional email sending services for critical email sending tasks.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Original Work
This library is inspired by [SMTPJS.com](https://smtpjs.com/), a service offering a simple JavaScript library for sending emails. This TypeScript library attempts to offer a similar API, while benefiting from TypeScript's static typing and other features. Visit the original website for more details and for JavaScript-based usage.

## License
MIT
